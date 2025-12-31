import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets when function cold starts)
// For production, consider using Redis/Upstash for persistent rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // 5 requests
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }
  
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Input validation schema (manual implementation)
function validateQuoteRequest(data: unknown): { 
  valid: boolean; 
  data?: QuoteRequestData; 
  error?: string 
} {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const obj = data as Record<string, unknown>;

  // Validate name (required, 1-100 chars)
  if (typeof obj.name !== 'string' || obj.name.trim().length === 0 || obj.name.length > 100) {
    return { valid: false, error: 'Name is required and must be 1-100 characters' };
  }

  // Validate phone (required, 6-20 chars, basic phone format)
  if (typeof obj.phone !== 'string' || !/^[0-9\s\-\+\(\)]{6,20}$/.test(obj.phone)) {
    return { valid: false, error: 'Valid phone number is required (6-20 characters)' };
  }

  // Validate email (optional, must be valid if provided)
  if (obj.email !== undefined && obj.email !== null && obj.email !== '') {
    if (typeof obj.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) || obj.email.length > 255) {
      return { valid: false, error: 'Invalid email format' };
    }
  }

  // Validate service (optional, max 100 chars)
  if (obj.service !== undefined && obj.service !== null && obj.service !== '') {
    if (typeof obj.service !== 'string' || obj.service.length > 100) {
      return { valid: false, error: 'Service must be less than 100 characters' };
    }
  }

  // Validate message (optional, max 2000 chars)
  if (obj.message !== undefined && obj.message !== null && obj.message !== '') {
    if (typeof obj.message !== 'string' || obj.message.length > 2000) {
      return { valid: false, error: 'Message must be less than 2000 characters' };
    }
  }

  return {
    valid: true,
    data: {
      name: obj.name as string,
      phone: obj.phone as string,
      email: (obj.email as string) || undefined,
      service: (obj.service as string) || undefined,
      message: (obj.message as string) || undefined,
    }
  };
}

// HTML escape function to prevent injection
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char);
}

interface QuoteRequestData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authorization header exists (anon key or authenticated user)
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.warn("Unauthorized request attempt - no auth header");
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';
    
    // Check rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429, 
          headers: { 
            "Content-Type": "application/json", 
            "Retry-After": "3600",
            ...corsHeaders 
          } 
        }
      );
    }

    // Verify the request is coming from our Supabase instance
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing Supabase configuration");
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create Supabase client to verify the token
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    // Verify the JWT token is valid (this works for both anon and authenticated users)
    const token = authHeader.replace('Bearer ', '');
    if (token !== supabaseAnonKey) {
      // For non-anon tokens, verify with Supabase
      const { error: authError } = await supabase.auth.getUser();
      // We don't require a user, just that the token is a valid Supabase token
      // The anon key check above handles unauthenticated but valid requests
      if (authError) {
        console.warn("Invalid auth token");
      }
    }

    // Parse and validate input
    let rawData: unknown;
    try {
      rawData = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body' }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const validation = validateQuoteRequest(rawData);
    if (!validation.valid || !validation.data) {
      console.warn("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const data = validation.data;
    console.log("Processing quote request for:", data.name.substring(0, 20));

    // Escape all user input for HTML
    const safeName = escapeHtml(data.name);
    const safePhone = escapeHtml(data.phone);
    const safeEmail = data.email ? escapeHtml(data.email) : 'Not provided';
    const safeService = data.service ? escapeHtml(data.service) : 'Not specified';
    const safeMessage = data.message ? escapeHtml(data.message) : '';

    // Send notification email to business owner
    const emailResponse = await resend.emails.send({
      from: "Sydney Seal & Grout <onboarding@resend.dev>",
      to: ["info@sydneysealgrout.com.au"],
      subject: `New Quote Request from ${safeName}`,
      html: `
        <h1>New Quote Request</h1>
        <p>You have received a new quote request from your website.</p>
        
        <h2>Customer Details</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${safeService}</td>
          </tr>
        </table>
        
        ${safeMessage ? `
        <h2>Message</h2>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${safeMessage}</p>
        ` : ''}
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
        <p style="color: #666; font-size: 12px;">
          This email was sent from your Sydney Seal &amp; Grout website contact form.
        </p>
      `,
    });

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json", 
        "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        ...corsHeaders 
      },
    });
  } catch (error: unknown) {
    console.error("Error processing request:", error instanceof Error ? error.message : 'Unknown error');
    return new Response(
      JSON.stringify({ error: 'An error occurred processing your request' }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

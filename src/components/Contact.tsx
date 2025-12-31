
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Clock, Upload, X, Loader2 } from 'lucide-react';
import { useFormTracking } from '../hooks/useAnalytics';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Validation helper functions
const validateName = (name: string): boolean => name.trim().length >= 1 && name.length <= 100;
const validatePhone = (phone: string): boolean => /^[0-9\s\-\+\(\)]{6,20}$/.test(phone);
const validateEmail = (email: string): boolean => !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateMessage = (message: string): boolean => !message || message.length <= 2000;

const Contact = () => {
  const { trackForm } = useFormTracking();
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (!validateName(formData.name)) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (1-100 characters).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!validateMessage(formData.message)) {
      toast({
        title: "Message Too Long",
        description: "Please keep your message under 2000 characters.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('quote_requests')
        .insert({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || null,
          message: formData.message.trim() || null,
        });

      if (dbError) {
        if (import.meta.env.DEV) {
          console.error('Database error:', dbError);
        }
        throw new Error('Failed to save your request');
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-quote-notification', {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      if (emailError) {
        if (import.meta.env.DEV) {
          console.error('Email error:', emailError);
        }
        // Don't throw - form was saved successfully
      }

      trackForm('contact_form', { type: 'quote-request' });
      toast({
        title: "Thank you!",
        description: "We'll contact you within 24 hours.",
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
      setUploadedFiles([]);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Form submission error:', error);
      }
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Fix Your Leak?
          </h2>
          <p className="text-xl text-muted-foreground">
            Contact us today for fast, professional service
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">0421 043 444</p>
                  <p className="text-sm text-muted-foreground">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">info@sydneysealgrout.com.au</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Service Area</h4>
                  <p className="text-muted-foreground">Greater Sydney Area</p>
                  <p className="text-sm text-muted-foreground">Mobile service - we come to you</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 7am - 6pm</p>
                  <p className="text-muted-foreground">Sat - Sun: 8am - 4pm</p>
                  <p className="text-sm text-muted-foreground">Emergency callouts available</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-4 sm:p-6 lg:p-8 bg-card shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 sm:mb-6 text-center">Get Your Free Assessment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="touch-manipulation min-h-[48px] text-base"
                required
                maxLength={100}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="touch-manipulation min-h-[48px] text-base"
                required
                maxLength={20}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="touch-manipulation min-h-[48px] text-base"
                maxLength={255}
              />
              <textarea
                name="message"
                placeholder="Describe your leak or restoration needs..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                maxLength={2000}
                className="w-full px-3 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent touch-manipulation text-base resize-none"
              ></textarea>
              
              {/* File Upload Section */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-card-foreground">
                  Upload Photos or Videos (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-input border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">Photos: PNG, JPG, GIF (MAX. 10MB)</p>
                      <p className="text-xs text-muted-foreground">Videos: MP4, MOV, AVI (MAX. 50MB)</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
                
                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-card-foreground">Uploaded files:</p>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                        <span className="text-sm text-card-foreground truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Button 
                type="submit"
                className="w-full text-base sm:text-lg py-3 sm:py-4 touch-manipulation min-h-[48px] font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Get Free Assessment'
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

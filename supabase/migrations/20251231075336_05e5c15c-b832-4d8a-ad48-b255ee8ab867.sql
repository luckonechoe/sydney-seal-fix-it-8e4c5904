-- Add check constraints to quote_requests table for server-side validation
ALTER TABLE public.quote_requests 
ADD CONSTRAINT quote_requests_name_length CHECK (char_length(name) BETWEEN 1 AND 100),
ADD CONSTRAINT quote_requests_phone_format CHECK (phone ~ '^[0-9\s\-\+\(\)]{6,20}$'),
ADD CONSTRAINT quote_requests_email_format CHECK (email IS NULL OR email ~ '^[^\s@]+@[^\s@]+\.[^\s@]+$'),
ADD CONSTRAINT quote_requests_email_length CHECK (email IS NULL OR char_length(email) <= 255),
ADD CONSTRAINT quote_requests_message_length CHECK (message IS NULL OR char_length(message) <= 2000),
ADD CONSTRAINT quote_requests_service_length CHECK (service IS NULL OR char_length(service) <= 100);

-- Add UPDATE and DELETE policies for admins on quote_requests
CREATE POLICY "Admins can update quote requests"
ON public.quote_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete quote requests"
ON public.quote_requests
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
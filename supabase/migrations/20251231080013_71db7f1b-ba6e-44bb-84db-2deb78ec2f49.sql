-- Enable realtime for quote_requests table
ALTER TABLE public.quote_requests REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.quote_requests;
-- Add explicit INSERT policy for user_roles table
-- This allows admins to assign roles to users

CREATE POLICY "Admins can insert user roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add policy for service role to bootstrap the first admin
CREATE POLICY "Service role can manage user roles"
ON public.user_roles
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
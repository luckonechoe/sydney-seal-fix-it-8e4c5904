-- Remove the redundant "Service role can manage user roles" policy.
-- The service_role key bypasses RLS by default, so this policy is unnecessary
-- and creates a privilege escalation risk if the key is ever leaked.
DROP POLICY IF EXISTS "Service role can manage user roles" ON public.user_roles;
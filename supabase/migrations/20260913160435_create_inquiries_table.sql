/*
# Create inquiries table for F&G Industrial quote requests

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer name
  - `phone` (text, not null) — customer phone number
  - `email` (text, not null) — customer email address
  - `service_category` (text, not null) — selected service type
  - `project_size` (text, nullable) — project size or scope description
  - `project_details` (text, nullable) — additional project details
  - `status` (text, default 'new') — inquiry status for follow-up tracking
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `inquiries`.
- This is a no-auth public website: the form is submitted by anonymous visitors.
- Allow anon + authenticated INSERT so visitors can submit quote requests.
- All other operations (SELECT, UPDATE, DELETE) are denied to anon to protect submitted data.
- No SELECT policy for anon means visitors cannot read other people's inquiries.

3. Notes
- The company receives notifications via an edge function webhook on insert.
- Only INSERT is public; reading inquiry data requires the service role key.
- The `status` column helps the company track which inquiries have been followed up.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_category text NOT NULL,
  project_size text,
  project_details text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
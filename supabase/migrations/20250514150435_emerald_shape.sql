/*
  # Create papers storage bucket

  1. Changes
    - Creates a new storage bucket named 'papers'
    - Sets the bucket as public
    - Adds RLS policies to allow:
      - Public read access
      - Authenticated users to upload files
      - Service role to manage bucket

  2. Security
    - Enables RLS on buckets table
    - Adds appropriate security policies
*/

-- Create the papers bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('papers', 'papers', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Allow public access to read files
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'papers');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'papers');

-- Allow users to update and delete their own files
CREATE POLICY "Users can manage own files" ON storage.objects
  FOR ALL
  TO authenticated
  USING (bucket_id = 'papers' AND owner = auth.uid());
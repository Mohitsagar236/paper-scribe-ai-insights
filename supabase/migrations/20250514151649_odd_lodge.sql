/*
  # Storage Bucket and Policies Setup

  1. Changes
    - Create papers storage bucket if it doesn't exist
    - Enable RLS on storage.objects
    - Set up storage policies for public read and authenticated user actions
  
  2. Security
    - Public read access for papers bucket
    - Authenticated users can upload files
    - File owners can update and delete their files
*/

-- Create storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('papers', 'papers', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS on objects table
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public Read Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Users Upload" ON storage.objects;
DROP POLICY IF EXISTS "Owner File Management" ON storage.objects;
DROP POLICY IF EXISTS "Owner File Deletion" ON storage.objects;

-- Create new policies
CREATE POLICY "Public Read Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'papers');

CREATE POLICY "Authenticated Users Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'papers');

CREATE POLICY "Owner File Management"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'papers' AND owner = auth.uid());

CREATE POLICY "Owner File Deletion"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'papers' AND owner = auth.uid());
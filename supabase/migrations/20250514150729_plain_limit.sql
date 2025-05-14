/*
  # Storage bucket and policies for paper uploads
  
  1. Creates a new storage bucket for papers
  2. Sets up RLS policies:
    - Public read access
    - Authenticated users can upload
    - Users can manage their own files
*/

-- Create storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('papers', 'papers', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Allow public access to read files
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'papers');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'papers');

-- Allow users to manage their own files
CREATE POLICY "Owner Management"
ON storage.objects FOR ALL
TO authenticated
USING (
  bucket_id = 'papers' 
  AND owner = auth.uid()
);
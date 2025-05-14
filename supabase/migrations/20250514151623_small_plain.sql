/*
  # Storage Configuration

  1. Changes
    - Create storage bucket for papers
    - Configure RLS policies for storage objects
    - Set up public access for reading files
    - Allow authenticated users to upload and manage their files

  2. Security
    - Enable RLS on storage.objects
    - Add policies for authenticated users
    - Add policy for public read access
*/

-- Create storage bucket if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM storage.buckets WHERE id = 'papers'
  ) THEN
    INSERT INTO storage.buckets (id, name, public)
    VALUES ('papers', 'papers', true);
  END IF;
END $$;

-- Enable RLS on objects table if not already enabled
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Public Read Access'
  ) THEN
    DROP POLICY "Public Read Access" ON storage.objects;
  END IF;
  
  IF EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Authenticated Users Upload'
  ) THEN
    DROP POLICY "Authenticated Users Upload" ON storage.objects;
  END IF;
  
  IF EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Owner File Management'
  ) THEN
    DROP POLICY "Owner File Management" ON storage.objects;
  END IF;
END $$;

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
USING (auth.uid() = owner);

CREATE POLICY "Owner File Deletion"
ON storage.objects FOR DELETE
TO authenticated
USING (auth.uid() = owner);
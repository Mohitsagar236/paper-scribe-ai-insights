/*
  # Storage Bucket Setup

  1. Changes
    - Create public storage bucket for papers
    - Set up storage policies for:
      - Public read access
      - Authenticated user uploads
      - Owner file management
  
  2. Security
    - Public can read files
    - Only authenticated users can upload
    - Users can only manage their own files
*/

-- Create storage bucket
select storage.create_bucket('papers', jsonb_build_object('public', true));

-- Create policies for the bucket
do $$
begin
  -- Allow public read access
  perform storage.create_policy(
    'papers',
    'Public Read Access',
    'SELECT',
    null,
    true
  );

  -- Allow authenticated users to upload
  perform storage.create_policy(
    'papers',
    'Authenticated Upload',
    'INSERT',
    'authenticated',
    true
  );

  -- Allow users to manage their own files
  perform storage.create_policy(
    'papers',
    'Owner Management',
    'ALL',
    'authenticated',
    storage.foldername(name)::text = auth.uid()::text
  );
end $$;
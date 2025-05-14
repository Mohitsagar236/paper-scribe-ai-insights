/*
  # Create papers storage bucket with RLS policies

  1. Storage Setup
    - Creates a public papers bucket for storing research papers
    - Enables secure file storage with appropriate access controls
  
  2. Security
    - Configures RLS policies for secure access
    - Allows public read access to papers
    - Restricts upload/management to authenticated users
*/

-- Create storage bucket
select storage.create_bucket('papers', {'public': true});

-- Create policies for the bucket
begin;
  -- Allow public read access
  select storage.create_policy(
    'papers',
    'Public Read Access',
    'SELECT',
    null,
    true
  );

  -- Allow authenticated users to upload
  select storage.create_policy(
    'papers',
    'Authenticated Upload',
    'INSERT',
    'authenticated',
    true
  );

  -- Allow users to manage their own files
  select storage.create_policy(
    'papers',
    'Owner Management',
    'ALL',
    'authenticated',
    storage.foldername(name)::text = auth.uid()::text
  );
commit;
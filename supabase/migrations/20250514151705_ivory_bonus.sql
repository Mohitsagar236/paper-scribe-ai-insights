/*
  # Storage Setup for Papers

  1. Changes
    - Creates papers storage bucket
    - Sets up RLS policies for paper storage
    - Configures access control for authenticated users
  
  2. Security
    - Enables RLS on objects table
    - Public read access for papers
    - Authenticated users can upload papers
    - Users can only manage their own files
*/

-- Create papers bucket
create table if not exists storage.buckets (
  id text primary key,
  name text not null,
  public boolean default false,
  avif_autodetection boolean default false,
  file_size_limit bigint,
  allowed_mime_types text[],
  owner uuid references auth.users,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

insert into storage.buckets (id, name, public)
values ('papers', 'papers', true)
on conflict (id) do nothing;

-- Create objects table if not exists
create table if not exists storage.objects (
  id uuid primary key default gen_random_uuid(),
  bucket_id text references storage.buckets(id),
  name text,
  owner uuid references auth.users,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  last_accessed_at timestamptz default now(),
  metadata jsonb,
  path_tokens text[] generated always as (string_to_array(name, '/')) stored
);

-- Enable RLS
alter table storage.objects enable row level security;

-- Create policies
create policy "Public Read Access"
on storage.objects for select
using ( bucket_id = 'papers' );

create policy "Authenticated Users Upload Access"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'papers' );

create policy "Owner Update Access"
on storage.objects for update
to authenticated
using ( bucket_id = 'papers' and owner = auth.uid() );

create policy "Owner Delete Access"
on storage.objects for delete
to authenticated
using ( bucket_id = 'papers' and owner = auth.uid() );
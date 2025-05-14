/*
  # Create Papers Schema

  1. New Tables
    - papers
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - title (text)
      - file_path (text)
      - file_type (text)
      - file_size (integer)
      - created_at (timestamptz)
      - updated_at (timestamptz)
    
    - feedback
      - id (uuid, primary key)
      - paper_id (uuid, references papers)
      - title_feedback (text)
      - abstract_feedback (text)
      - structure_feedback (text)
      - grammar_feedback (text)
      - citation_feedback (text)
      - journal_suggestions (text)
      - similar_papers (text)
      - created_at (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create papers table
CREATE TABLE IF NOT EXISTS papers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  title text NOT NULL,
  file_path text NOT NULL,
  file_type text NOT NULL CHECK (file_type IN ('pdf', 'docx')),
  file_size integer NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  paper_id uuid REFERENCES papers ON DELETE CASCADE NOT NULL,
  title_feedback text,
  abstract_feedback text,
  structure_feedback text,
  grammar_feedback text,
  citation_feedback text,
  journal_suggestions text,
  similar_papers text,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Papers policies
CREATE POLICY "Users can create their own papers"
  ON papers
  FOR INSERT
  TO public
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own papers"
  ON papers
  FOR SELECT
  TO public
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own papers"
  ON papers
  FOR UPDATE
  TO public
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own papers"
  ON papers
  FOR DELETE
  TO public
  USING (auth.uid() = user_id);

-- Feedback policies
CREATE POLICY "Users can view feedback for their papers"
  ON feedback
  FOR SELECT
  TO public
  USING (
    EXISTS (
      SELECT 1 FROM papers
      WHERE papers.id = feedback.paper_id
      AND papers.user_id = auth.uid()
    )
  );
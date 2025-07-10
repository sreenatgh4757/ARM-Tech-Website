/*
  # Create contact enquiries table

  1. New Tables
    - `contact_enquiries`
      - `id` (uuid, primary key)
      - `enquiry_id` (text, unique reference number)
      - `full_name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)
      - `status` (text, default 'new')

  2. Security
    - Enable RLS on `contact_enquiries` table
    - Add policy for public insert access (contact form submissions)
    - Add policy for authenticated admin access to read enquiries

  3. Functions
    - Create function to generate unique enquiry reference numbers
*/

-- Create contact enquiries table
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_id text UNIQUE NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Create function to generate enquiry ID
CREATE OR REPLACE FUNCTION generate_enquiry_id()
RETURNS text AS $$
DECLARE
  new_id text;
  exists_check boolean;
BEGIN
  LOOP
    -- Generate ID in format: ENQ-YYYYMMDD-XXXX
    new_id := 'ENQ-' || to_char(now(), 'YYYYMMDD') || '-' || 
              LPAD(floor(random() * 10000)::text, 4, '0');
    
    -- Check if ID already exists
    SELECT EXISTS(SELECT 1 FROM contact_enquiries WHERE enquiry_id = new_id) INTO exists_check;
    
    -- If ID doesn't exist, we can use it
    IF NOT exists_check THEN
      EXIT;
    END IF;
  END LOOP;
  
  RETURN new_id;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-generate enquiry_id
CREATE OR REPLACE FUNCTION set_enquiry_id()
RETURNS trigger AS $$
BEGIN
  IF NEW.enquiry_id IS NULL OR NEW.enquiry_id = '' THEN
    NEW.enquiry_id := generate_enquiry_id();
  END IF;
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_enquiry_id
  BEFORE INSERT OR UPDATE ON contact_enquiries
  FOR EACH ROW
  EXECUTE FUNCTION set_enquiry_id();

-- RLS Policies
CREATE POLICY "Allow public insert for contact submissions"
  ON contact_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read all enquiries"
  ON contact_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update enquiries"
  ON contact_enquiries
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at ON contact_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_status ON contact_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_enquiry_id ON contact_enquiries(enquiry_id);
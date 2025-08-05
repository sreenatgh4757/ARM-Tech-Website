/*
  # Add phone column to contact_messages table

  1. Changes
    - Add `phone` column to `contact_messages` table
    - Column is optional (nullable) to maintain compatibility with existing data

  2. Notes
    - This migration adds the missing phone field that the frontend is trying to insert
    - Made nullable to avoid breaking existing records
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_messages' AND column_name = 'phone'
  ) THEN
    ALTER TABLE contact_messages ADD COLUMN phone text;
  END IF;
END $$;
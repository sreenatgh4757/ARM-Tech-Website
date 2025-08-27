import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for contact_form table
export interface ContactForm {
  id: number
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  created_at: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

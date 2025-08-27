import { supabase } from '../lib/supabase'
import type { ContactFormData } from '../lib/supabase'

export interface ContactFormValidation {
  isValid: boolean
  errors: {
    name?: string
    email?: string
    phone?: string
    subject?: string
    message?: string
  }
}

export class ContactService {
  // ✅ Validate form data including phone
  static validateForm(data: ContactFormData): ContactFormValidation {
    const errors: ContactFormValidation['errors'] = {}

    // Name
    if (!data.name?.trim()) {
      errors.name = 'Name is required'
    } else if (data.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    } else if (data.name.trim().length > 100) {
      errors.name = 'Name must be less than 100 characters'
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email?.trim()) {
      errors.email = 'Email address is required'
    } else if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address'
    } else if (data.email.trim().length > 255) {
      errors.email = 'Email address is too long'
    }

    // ✅ Phone
    const phoneRegex = /^\+[1-9]\d{7,14}$/
    if (!data.phone?.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(data.phone.trim())) {
      errors.phone = 'Please enter a valid international phone number with country code (e.g. +447911123456)'
    }

    // Subject
    if (!data.subject?.trim()) {
      errors.subject = 'Subject is required'
    } else if (data.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters'
    } else if (data.subject.trim().length > 200) {
      errors.subject = 'Subject must be less than 200 characters'
    }

    // Message
    if (!data.message?.trim()) {
      errors.message = 'Message is required'
    } else if (data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    } else if (data.message.trim().length > 2000) {
      errors.message = 'Message must be less than 2000 characters'
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    }
  }

  // ✅ Submit contact form (without url)
  static async submitContactForm(data: ContactFormData): Promise<{
    success: boolean
    error?: string
  }> {
    try {
      // Validate first
      const validation = this.validateForm(data)
      if (!validation.isValid) {
        const errorMessages = Object.values(validation.errors).filter(Boolean)
        throw new Error(`Validation failed: ${errorMessages.join(', ')}`)
      }

      // Prepare clean data (no url field)
      const cleanData = {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        subject: data.subject.trim(),
        message: data.message.trim(),
        url: data.url || ''
      }

      // Insert into Supabase
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert([cleanData])

      if (insertError) {
        console.error('Database insertion error:', insertError)

        if (insertError.code === 'PGRST116') {
          throw new Error('Database table not found. Please check your Supabase setup.')
        } else if (insertError.code === '42501') {
          throw new Error('Permission denied. Please check your RLS policies.')
        } else {
          throw new Error('Failed to save your enquiry. Please try again or email us at info@armtechnologies.ltd')
        }
      }

      return { success: true }

    } catch (error) {
      console.error('Contact form submission error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to save your enquiry. Please try again or email us at info@armtechnologies.ltd'
      }
    }
  }
}

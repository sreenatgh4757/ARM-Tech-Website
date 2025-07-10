import { supabase } from '../lib/supabase'
import type { ContactSubmissionData, ContactEnquiry } from '../lib/supabase'

export interface ContactFormValidation {
  isValid: boolean
  errors: {
    full_name?: string
    email?: string
    subject?: string
    message?: string
  }
}

export class ContactService {
  // Validate form data
  static validateForm(data: ContactSubmissionData): ContactFormValidation {
    const errors: ContactFormValidation['errors'] = {}
    
    // Validate full name
    if (!data.full_name?.trim()) {
      errors.full_name = 'Full name is required'
    } else if (data.full_name.trim().length < 2) {
      errors.full_name = 'Full name must be at least 2 characters'
    } else if (data.full_name.trim().length > 100) {
      errors.full_name = 'Full name must be less than 100 characters'
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email?.trim()) {
      errors.email = 'Email address is required'
    } else if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address'
    } else if (data.email.trim().length > 255) {
      errors.email = 'Email address is too long'
    }
    
    // Validate subject
    if (!data.subject?.trim()) {
      errors.subject = 'Subject is required'
    } else if (data.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters'
    } else if (data.subject.trim().length > 200) {
      errors.subject = 'Subject must be less than 200 characters'
    }
    
    // Validate message
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

  // Submit contact form
  static async submitContactForm(data: ContactSubmissionData): Promise<{
    success: boolean
    enquiry_id?: string
    error?: string
  }> {
    try {
      // Validate form data
      const validation = this.validateForm(data)
      if (!validation.isValid) {
        const errorMessages = Object.values(validation.errors).filter(Boolean)
        throw new Error(`Validation failed: ${errorMessages.join(', ')}`)
      }

      // Clean and prepare data
      const cleanData = {
        full_name: data.full_name.trim(),
        email: data.email.trim().toLowerCase(),
        subject: data.subject.trim(),
        message: data.message.trim()
      }

      // Insert into database
      const { data: insertedData, error: insertError } = await supabase
        .from('contact_enquiries')
        .insert([cleanData])
        .select('enquiry_id, created_at, full_name, email, subject, message')
        .single()

      if (insertError) {
        console.error('Database insertion error:', insertError)
        throw new Error('Failed to save your enquiry. Please try again.')
      }

      if (!insertedData) {
        throw new Error('No data returned from database insertion')
      }

      // Send email notification
      try {
        const emailResponse = await supabase.functions.invoke('send-contact-email', {
          body: { submission: insertedData }
        })

        if (emailResponse.error) {
          console.error('Email sending error:', emailResponse.error)
          // Don't fail the entire submission if email fails
          console.warn('Contact form submitted successfully but email notification failed')
        }
      } catch (emailError) {
        console.error('Email service error:', emailError)
        // Don't fail the entire submission if email fails
        console.warn('Contact form submitted successfully but email notification failed')
      }

      return {
        success: true,
        enquiry_id: insertedData.enquiry_id
      }

    } catch (error) {
      console.error('Contact form submission error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      }
    }
  }

  // Get all enquiries (for admin use)
  static async getEnquiries(limit = 50, offset = 0): Promise<{
    data: ContactEnquiry[]
    error?: string
  }> {
    try {
      const { data, error } = await supabase
        .from('contact_enquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (error) {
        throw error
      }

      return { data: data || [] }
    } catch (error) {
      console.error('Error fetching enquiries:', error)
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Failed to fetch enquiries'
      }
    }
  }

  // Update enquiry status (for admin use)
  static async updateEnquiryStatus(
    enquiry_id: string, 
    status: ContactEnquiry['status']
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('contact_enquiries')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('enquiry_id', enquiry_id)

      if (error) {
        throw error
      }

      return { success: true }
    } catch (error) {
      console.error('Error updating enquiry status:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update enquiry status'
      }
    }
  }
}
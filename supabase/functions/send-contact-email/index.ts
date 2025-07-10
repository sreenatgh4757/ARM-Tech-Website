import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactSubmission {
  enquiry_id: string
  full_name: string
  email: string
  subject: string
  message: string
  created_at: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { submission }: { submission: ContactSubmission } = await req.json()

    // Validate required fields
    if (!submission.enquiry_id || !submission.full_name || !submission.email || !submission.subject || !submission.message) {
      throw new Error('Missing required fields')
    }

    // Format the email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Enquiry - ${submission.enquiry_id}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #A288E3, #00C2FF); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #A288E3; }
        .footer { margin-top: 20px; padding: 15px; background: #e9e9e9; border-radius: 4px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Enquiry</h1>
            <p>Reference: ${submission.enquiry_id}</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${submission.full_name}</div>
            </div>
            <div class="field">
                <div class="label">Email Address:</div>
                <div class="value">${submission.email}</div>
            </div>
            <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${submission.subject}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="value">${submission.message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
                <div class="label">Submitted:</div>
                <div class="value">${new Date(submission.created_at).toLocaleString('en-GB', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: 'Europe/London'
                })}</div>
            </div>
        </div>
        <div class="footer">
            <p>This enquiry was submitted through the ARM Technologies Ltd contact form.</p>
            <p>Please respond to the customer within 24 hours for optimal service.</p>
        </div>
    </div>
</body>
</html>
    `

    // Send email using a service like Resend, SendGrid, or similar
    // For this example, we'll use a generic fetch to an email service
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@armtechnologies.ltd',
        to: ['info@armtechnologies.ltd'],
        subject: `New Contact Enquiry: ${submission.subject} (${submission.enquiry_id})`,
        html: emailContent,
        reply_to: submission.email,
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Email sending failed:', errorText)
      throw new Error('Failed to send email notification')
    }

    const emailResult = await emailResponse.json()
    console.log('Email sent successfully:', emailResult)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email notification sent successfully',
        email_id: emailResult.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An unexpected error occurred' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
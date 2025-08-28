import React from 'react'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Contact Us
      </h1>
      <ContactForm />
    </div>
  )
}

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactService } from '../services/contactService';
import { ContactFormData } from '../lib/supabase';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await ContactService.sendMessage(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-16 section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">We'd love to hear from you! Fill out the form and we'll get back to you soon.</p>
          
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={20} className="text-accent" />
            <span>info@armtechnologies.ltd</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Phone size={20} className="text-accent" />
            <span>+44 1234 567890</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin size={20} className="text-accent" />
            <span>London, United Kingdom</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-lg">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send size={18} />
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 flex items-center gap-2 mt-2">
              <CheckCircle size={18} /> Message sent successfully!
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-600 flex items-center gap-2 mt-2">
              <AlertCircle size={18} /> Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

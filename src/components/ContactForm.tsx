import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactService } from '../services/contactService';
import type { ContactFormData } from '../lib/supabase';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullPhone = `${formData.countryCode}${formData.phone}`;
    const validation = ContactService.validateForm({ ...formData, phone: fullPhone });
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await ContactService.submitContactForm({ ...formData, phone: fullPhone });
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', countryCode: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      if (error instanceof Error) {
        setErrors({ general: error.message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Transform</span> Your Business
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to harness the power of intelligent automation? Get in touch with our experts 
            and discover how we can revolutionize your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg"><MapPin className="text-primary" size={24} /></div>
                <div><h4 className="font-semibold text-white mb-1">Office Location</h4><p className="text-gray-300">Bournemouth, United Kingdom</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg"><Mail className="text-primary" size={24} /></div>
                <div><h4 className="font-semibold text-white mb-1">Email</h4><a href="mailto:info@armtechnologies.ltd" className="text-gray-300 hover:text-primary">info@armtechnologies.ltd</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg"><Phone className="text-primary" size={24} /></div>
                <div><h4 className="font-semibold text-white mb-1">Phone</h4><a href="tel:+447823857523" className="text-gray-300 hover:text-primary">+44 7823 857523</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg"><Clock className="text-primary" size={24} /></div>
                <div><h4 className="font-semibold text-white mb-1">Business Hours</h4><p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM GMT</p></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            {isSuccess && (
              <div className="bg-green-500/20 text-green-400 p-4 rounded-lg mb-6">
                <p className="font-medium">Thank you! Your message has been sent.</p>
                <p className="text-sm">We'll get back to you within 24 hours.</p>
              </div>
            )}
            {errors.general && (
              <div className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-6">
                <p className="font-medium">Failed to save your enquiry. Please try again or email us.</p>
                <p className="text-sm">{errors.general}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-white font-medium mb-2">Full Name *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                  className={`w-full bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-700'}`} placeholder="Enter your full name" />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                  className={`w-full bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-700'}`} placeholder="Enter your email address" />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Phone Number *</label>
                <div className="flex gap-2">
                  <input type="tel" id="countryCode" name="countryCode" required value={formData.countryCode} onChange={handleChange}
                    placeholder="+44" className="w-1/3 bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                    placeholder="7307969911" className={`w-2/3 bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-gray-700'}`} />
                </div>
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                  className={`w-full bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${errors.subject ? 'border-red-500' : 'border-gray-700'}`} placeholder="What's this about?" />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={5}
                  className={`w-full bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none ${errors.message ? 'border-red-500' : 'border-gray-700'}`} placeholder="Tell us about your project requirements..." />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {isSuccess ? 'Message Sent!' : 'Send Message'}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

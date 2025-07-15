import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mail, User, FileText, Phone } from 'lucide-react';
import { ContactService } from '../services/contactService';
import type { ContactFormData } from '../lib/supabase';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = ContactService.validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrors({});

    try {
      const result = await ContactService.submitContactForm(formData);
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', contact: '', subject: '', message: '' });
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      if (error instanceof Error) {
        setErrors({ general: error.message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitStatus('idle');
    setErrors({});
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={closeModal} />
            <motion.div
              className="relative bg-card/95 rounded-2xl p-6 w-full max-w-md overflow-y-auto border"
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Send Message</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 p-4 rounded-lg mb-6 text-green-400">✓ Message sent successfully!</div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 p-4 rounded-lg mb-6 text-red-400">⚠️ {errors.general}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-white mb-2">Full Name *</label>
                  <input name="name" value={formData.name} onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg bg-background/50 text-white ${errors.name ? 'border-red-500' : 'border-gray-700'} border`} />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white mb-2">Email Address *</label>
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg bg-background/50 text-white ${errors.email ? 'border-red-500' : 'border-gray-700'} border`} />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-white mb-2">Contact Number *</label>
                  <input name="contact" value={formData.contact} onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg bg-background/50 text-white ${errors.contact ? 'border-red-500' : 'border-gray-700'} border`} />
                  {errors.contact && <p className="text-red-400 text-sm mt-1">{errors.contact}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white mb-2">Subject *</label>
                  <input name="subject" value={formData.subject} onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg bg-background/50 text-white ${errors.subject ? 'border-red-500' : 'border-gray-700'} border`} />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4}
                    className={`w-full p-3 rounded-lg bg-background/50 text-white ${errors.message ? 'border-red-500' : 'border-gray-700'} border resize-none`} />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit" disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full bg-primary text-white font-medium py-3 rounded-lg"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? "Sending..." : submitStatus === 'success' ? "Sent!" : "Send Message"}
                </motion.button>
              </form>

              {/* Fallback Contact */}
              <p className="text-gray-400 text-sm text-center mt-6">
                Or email us at <a href="mailto:info@armtechnologies.ltd" className="text-primary">info@armtechnologies.ltd</a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContactButton;

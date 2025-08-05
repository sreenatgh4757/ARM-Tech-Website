import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mail, User, FileText } from 'lucide-react';
import { ContactService } from '../services/contactService';
import type { ContactFormData } from '../lib/supabase';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form using ContactService
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
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Auto-close modal after success
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
      {/* Floating Contact Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-200" />
        
        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-background/90 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          Send us a message
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-background/90"></div>
        </motion.div>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 w-full max-w-md max-h-[90vh] overflow-y-auto border border-white/10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Send Message</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      ✓
                    </motion.div>
                  </div>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm text-green-300">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6 space-y-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-medium">Failed to send message</p>
                  {errors.general && (
                    <p className="text-sm text-red-300">{errors.general}</p>
                  )}
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <User size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <motion.p
                      className="text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Mail size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <motion.p
                      className="text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <FileText size={16} />
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                      errors.subject ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <motion.p
                      className="text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full bg-background/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && (
                    <motion.p
                      className="text-red-400 text-sm mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                  <p className="text-gray-400 text-xs mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm text-center">
                  Or reach us directly at{' '}
                  <a 
                    href="mailto:info@armtechnologies.ltd" 
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    info@armtechnologies.ltd
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContactButton;
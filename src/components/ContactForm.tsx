import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { parsePhoneNumber } from 'libphonenumber-js';
import { supabase } from '../lib/supabase';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+44',
    phone: '',
    subject: '',
    message: ''
    // ❌ removed url
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    try {
      const phoneNumber = parsePhoneNumber(`${formData.countryCode}${formData.phone}`);
      if (!phoneNumber.isValid()) {
        newErrors.phone = 'Invalid phone number for this country code';
      }
    } catch (err) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    const fullPhone = `${formData.countryCode}${formData.phone}`;

    try {
      // ✅ Insert into the new table: contact_form
      const { error } = await supabase.from('contact_form').insert({
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        subject: formData.subject,
        message: formData.message
        // ❌ removed url
      });

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', countryCode: '+44', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrors({ general: 'Submission failed. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container-custom mx-auto px-4">
        {/* heading and info cards remain unchanged */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Info */}
          {/* ... */}

          {/* Right Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            {isSuccess && (<div className="bg-green-500/20 text-green-400 p-4 rounded-lg mb-6"><p className="font-medium">Thank you! Your message has been sent.</p><p className="text-sm">We'll get back to you within 24 hours.</p></div>)}
            {errors.general && (<div className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-6"><p className="font-medium">{errors.general}</p></div>)}

            <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              {/* inputs remain the same */}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

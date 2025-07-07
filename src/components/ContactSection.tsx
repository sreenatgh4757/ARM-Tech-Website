import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, X } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: 1000,
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: 1000,
        description: ''
      });
    }, 1500);
  };

  const services = [
    'Mobile Application',
    'Website / Web application',
    'UI/UX Design',
    'DevOps and cloud management',
    'Others'
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      
      <div className="container-custom mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto relative"
        >
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-lg mb-2">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-lg mb-2">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white text-lg mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-background/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="+44 XXXX XXXXXX"
              />
              <p className="text-sm text-gray-400 mt-1">Format: +44 XXXX XXXXXX or 0XXXX XXXXXX</p>
            </div>

            <div>
              <label htmlFor="service" className="block text-white text-lg mb-2">
                Type of Service <span className="text-primary">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-background/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              >
                <option value="">Select a service...</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-lg mb-2">
                Budget Range
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  name="budget"
                  min="1000"
                  max="10000"
                  step="100"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-white min-w-[80px]">£{formData.budget}</span>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-white text-lg mb-2">
                Project Description <span className="text-primary">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full bg-background/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Please describe your project requirements..."
              ></textarea>
              <p className="text-sm text-gray-400 mt-1">Minimum 20 characters</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Submit Request
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
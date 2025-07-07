import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: 1000,
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const services = [
    'Mobile Application',
    'Website / Web application',
    'UI/UX Design',
    'DevOps and cloud management',
    'Others'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: 1000,
        description: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen">
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-2 text-gradient">Contact Us</h1>
          <p className="text-gray-300 mb-8">
            Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          {isSuccess && (
            <div className="bg-green-500/20 text-green-400 p-4 rounded-lg mb-6">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
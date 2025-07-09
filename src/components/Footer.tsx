import React, { useState } from 'react';
import { MapPin, Mail, Linkedin, Twitter, Github, Send, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscriptionStatus('idle'), 3000);
    }
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' }
  ];

  const services = [
    { name: "Automation", href: "#services" },
    { name: "DevOps & Cloud", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "Startup Support", href: "#services" },
    { name: "AI & Agentic Systems", href: "#services" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-card/95 to-background backdrop-blur-md border-t border-white/10 sticky top-full">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/5 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container-custom mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
        >
          
          {/* Company Info & Logo */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <motion.div
                className="flex flex-col items-start mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-white font-black text-2xl tracking-[0.2em] mb-1 relative">
                  A.R.M
                  <div className="absolute inset-0 text-blue-400/20 blur-sm">A.R.M</div>
                </div>
                <div className="text-gray-300 text-sm font-light tracking-[0.15em] uppercase">
                  Technologies Ltd
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-300">
              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Transforming businesses through intelligent automation and cutting-edge technology solutions.
              </motion.p>
              
              <motion.div
                className="flex items-start gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary group-hover:text-primary-dark transition-colors" />
                <span className="group-hover:text-white transition-colors">Bournemouth, United Kingdom</span>
              </motion.div>
              
              <motion.div
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={16} className="mt-1 flex-shrink-0 text-primary group-hover:text-primary-dark transition-colors" />
                <a
                  href="mailto:info@armtechnologies.ltd"
                  className="hover:text-primary transition-colors group-hover:text-white"
                >
                  info@armtechnologies.ltd
                </a>
              </motion.div>
              
              <motion.div
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={16} className="mt-1 flex-shrink-0 text-primary group-hover:text-primary-dark transition-colors" />
                <a
                  href="tel:+447823857523"
                  className="hover:text-primary transition-colors group-hover:text-white"
                >
                  +44 7823 857 523
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide relative">
              Quick Links
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group"
                    whileHover={{ x: 8 }}
                  >
                    <ArrowRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary" 
                    />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide relative">
              Our Services
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={service.href}
                    className="text-gray-300 hover:text-secondary transition-all duration-300 text-sm flex items-center gap-2 group"
                    whileHover={{ x: 8 }}
                  >
                    <ArrowRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-secondary" 
                    />
                    <span className="group-hover:text-white transition-colors">{service.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide relative">
              Stay Updated
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h4>
            <motion.p
              className="text-gray-300 text-sm mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get the latest insights on AI, automation, and technology trends.
            </motion.p>
            
            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-background/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubscribing}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubscribing ? (
                  <>
                    <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Subscribe
                  </>
                )}
              </motion.button>
              
              {subscriptionStatus === 'success' && (
                <motion.p
                  className="text-green-400 text-xs"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Successfully subscribed!
                </motion.p>
              )}
              {subscriptionStatus === 'error' && (
                <motion.p
                  className="text-red-400 text-xs"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </motion.form>

            {/* Social Links */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="text-white font-semibold text-sm mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card/50 hover:bg-primary/20 text-gray-300 hover:text-primary p-2 rounded-lg transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: "rgba(162, 136, 227, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} ARM Technologies Ltd. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { MapPin, Mail, Linkedin, Twitter, Github, Send, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

// motion-enabled Link
const MotionLink = motion(Link);

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
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
    { name: "Automation", sectionId: "services" },
    { name: "DevOps & Cloud", sectionId: "services" },
    { name: "Digital Marketing", sectionId: "services" },
    { name: "Startup Support", sectionId: "services" },
    { name: "AI & Agentic Systems", sectionId: "services" }
  ];

  const quickLinks = [
    { name: "About Us", sectionId: "about" },
    { name: "Services", sectionId: "services" },
    { name: "Projects", sectionId: "projects" },
    { name: "Contact", sectionId: "contact" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="relative bg-gradient-to-b from-card/95 to-background backdrop-blur-md border-t border-white/10 sticky top-full">
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/5 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <motion.div className="flex flex-col items-start mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
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
              <motion.div className="flex items-start gap-3 group" whileHover={{ x: 5 }}>
                <Mail size={16} className="mt-1 flex-shrink-0 text-primary group-hover:text-primary-dark" />
                <a href="mailto:info@armtechnologies.ltd" className="hover:text-primary group-hover:text-white">
                  info@armtechnologies.ltd
                </a>
              </motion.div>
              <motion.div className="flex items-start gap-3 group" whileHover={{ x: 5 }}>
                <Phone size={16} className="mt-1 flex-shrink-0 text-primary group-hover:text-primary-dark" />
                <a href="tel:+447823857523" className="hover:text-primary group-hover:text-white">
                  +44 7823 857 523
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide relative">
              Quick Links
              <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }} whileInView={{ width: "60%" }}
                transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }} />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i, duration: 0.5 }}>
                  <motion.a onClick={() => handleNavClick(link.sectionId)}
                    className="text-gray-300 hover:text-primary transition-all text-sm flex items-center gap-2 group"
                    whileHover={{ x: 8 }} style={{ cursor: 'pointer' }}>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-primary" />
                    <span className="group-hover:text-white">{link.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide relative">
              Our Services
              <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent"
                initial={{ width: 0 }} whileInView={{ width: "70%" }}
                transition={{ delay: 0.6, duration: 0.8 }} viewport={{ once: true }} />
            </h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i, duration: 0.5 }}>
                  <motion.a onClick={() => handleNavClick(s.sectionId)}
                    className="text-gray-300 hover:text-secondary transition-all text-sm flex items-center gap-2 group"
                    whileHover={{ x: 8 }} style={{ cursor: 'pointer' }}>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-secondary" />
                    <span className="group-hover:text-white">{s.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide relative">
              Stay Updated
              <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary"
                initial={{ width: 0 }} whileInView={{ width: "80%" }}
                transition={{ delay: 0.7, duration: 0.8 }} viewport={{ once: true }} />
            </h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">Get the latest insights on AI, automation, and technology trends.</p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-background/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                required />
              <button type="submit" disabled={isSubscribing}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-sm">
                {isSubscribing ? <><div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div> Subscribing...</>
                : <><Send size={16} /> Subscribe</>}
              </button>
              {subscriptionStatus === 'success' && <p className="text-green-400 text-xs">Successfully subscribed!</p>}
              {subscriptionStatus === 'error' && <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>}
            </form>

            <div className="mt-6">
              <h5 className="text-white font-semibold text-sm mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="bg-card/50 hover:bg-primary/20 text-gray-300 hover:text-primary p-2 rounded-lg transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">© {currentYear} ARM Technologies Ltd. All rights reserved.</p>
            <p className="text-gray-400 text-xs mt-1">
              Contact us at{' '}
              <a href="mailto:info@armtechnologies.ltd" className="text-primary hover:text-primary-dark">
                info@armtechnologies.ltd
              </a>
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <MotionLink to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors" whileHover={{ y: -2 }}>
              Privacy Policy
            </MotionLink>
            <MotionLink to="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors" whileHover={{ y: -2 }}>
              Terms of Service
            </MotionLink>
            <MotionLink to="/cookie-policy" className="text-gray-400 hover:text-primary transition-colors" whileHover={{ y: -2 }}>
              Cookie Policy
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

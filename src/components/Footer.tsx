import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'AI Automation', href: '/services' },
        { label: 'Workflow Integration', href: '/services' },
        { label: 'DevOps Engineering', href: '/services' },
        { label: 'Startup Consulting', href: '/services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Support', href: '/contact' },
        { label: 'Privacy Policy', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="flex flex-col items-start">
                  <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    A.R.M
                  </div>
                  <div className="text-sm text-gray-600 font-medium tracking-wider">
                    Technologies Ltd
                  </div>
                </div>
              </Link>
              
              <p className="text-gray-600 mb-8 leading-relaxed font-light max-w-md">
                Empowering businesses with AI automation, workflow integration, 
                and expert consulting services for the digital age.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:info@armtechnologies.ltd" className="font-medium">
                    info@armtechnologies.ltd
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Phone size={16} />
                  </div>
                  <a href="tel:+447823857523" className="font-medium">
                    +44 7823 857 523
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <span className="font-medium">United Kingdom</span>
                </div>
              </div>
            </motion.div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerLinks.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-gray-900 mb-6 text-lg">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-gray-600 hover:text-primary transition-colors font-medium"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-gray-600 text-sm font-medium">
              © {currentYear} A.R.M Technologies Ltd. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-gray-100 hover:bg-primary/10 text-gray-600 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
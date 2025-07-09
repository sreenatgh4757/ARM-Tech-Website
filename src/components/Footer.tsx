import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
  <footer className="bg-card/80 backdrop-blur-sm pt-12 md:pt-16 pb-6 relative">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container-custom mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        
        {/* Logo + Description */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img
              src="/PHOTO-2025-07-08-22-44-27.jpg"
              alt="ARM Technologies Ltd"
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-400 max-w-sm">
            Helping startups and enterprises grow through intelligent automation, scalable DevOps, and AI-powered innovation.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> London, United Kingdom
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@armtechnologies.ltd
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +44 7000 000 000
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#"><Linkedin size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Github size={18} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 border-t border-white/10 pt-6 mt-10">
        © {currentYear} ARM Technologies Limited. All rights reserved.
      </div>
    </div>
  </footer>
);
};

export default Footer;
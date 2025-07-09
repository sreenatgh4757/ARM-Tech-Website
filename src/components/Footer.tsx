import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/80 backdrop-blur-sm pt-12 md:pt-16 pb-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          
          {/* Address */}
          <div>
            <div className="flex flex-col items-start mb-4">
              <div className="text-white font-black text-2xl tracking-[0.2em] mb-1 relative">
                ARM Technologies Ltd
                <div className="absolute inset-0 text-blue-400/20 blur-sm">ARM Technologies Ltd</div>
              </div>
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bournemouth, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a 
                  href="mailto:contact@armtechnologies.ltd" 
                  className="hover:text-white transition-colors"
                >
                  contact@armtechnologies.ltd
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  DevOps & Cloud
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Startup Support
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  AI & Agentic Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="space-y-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={18} />
                Twitter
              </a>
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
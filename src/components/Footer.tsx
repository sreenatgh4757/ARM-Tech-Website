import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/80 backdrop-blur-sm pt-12 md:pt-16 pb-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/PHOTO-2025-07-08-22-44-27.jpg" 
                alt="ARM Technologies Ltd" 
                className="h-10 w-auto"
              />
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              Empowering businesses with cutting-edge AI automation solutions, 
              intelligent systems, and enterprise-grade DevOps infrastructure.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Automation',
                'Agentic AI',
                'DevOps & Cloud',
                'Software Development',
                'Digital Marketing & SEO',
                'Business Research',
                'Startup Support'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  London, United Kingdom
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@armtechnologies.ltd" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  info@armtechnologies.ltd
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+447000000000" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  +44 7000 000 000
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 hover:bg-primary/20 p-2 rounded-lg transition-colors">
                  <Linkedin className="h-4 w-4 text-gray-400 hover:text-primary" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary/20 p-2 rounded-lg transition-colors">
                  <Twitter className="h-4 w-4 text-gray-400 hover:text-primary" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary/20 p-2 rounded-lg transition-colors">
                  <Github className="h-4 w-4 text-gray-400 hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ARM Technologies Limited. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
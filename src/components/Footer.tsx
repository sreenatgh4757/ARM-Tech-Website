import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-gradient">
                A.R.M
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Technologies Ltd
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Empowering businesses with AI automation, workflow integration, 
              and expert consulting services for the digital age.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <a href="mailto:info@armtechnologies.ltd" className="hover:text-accent transition-colors">
                  info@armtechnologies.ltd
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <a href="tel:+447823857523" className="hover:text-accent transition-colors">
                  +44 7823 857 523
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-600 hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">AI Automation</li>
              <li className="text-gray-600">Workflow Integration</li>
              <li className="text-gray-600">DevOps Engineering</li>
              <li className="text-gray-600">Startup Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} A.R.M Technologies Ltd. All rights reserved.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-gray-600 hover:text-accent transition-colors text-sm">
              Home
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-accent transition-colors text-sm">
              Services
            </Link>
            <Link to="/case-studies" className="text-gray-600 hover:text-accent transition-colors text-sm">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-accent transition-colors text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
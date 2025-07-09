import React from 'react';
import { MapPin, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/90 backdrop-blur-md pt-12 md:pt-16 pb-8 text-gray-300">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">

          {/* Address */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4 tracking-wide">
              ARM Technologies Ltd
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} />
                <span>Bournemouth, UK</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} />
                <a
                  href="mailto:info@armtechnologies.ltd"
                  className="hover:text-white transition-colors"
                >
                  info@armtechnologies.ltd
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Automation",
                "DevOps & Cloud",
                "Digital Marketing",
                "Startup Support",
                "AI & Agentic Systems"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-white font-bold text-xl mb-4 tracking-wide">Follow Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Twitter size={18} />
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {currentYear} ARM Technologies Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

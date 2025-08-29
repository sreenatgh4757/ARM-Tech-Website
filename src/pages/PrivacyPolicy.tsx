import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20 pb-20 min-h-screen">
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <Shield className="text-primary" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At ARM Technologies Ltd, your privacy is extremely important to us. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your personal information when you visit our website or use our services.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="space-y-10">

                {/* Information We Collect */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">1. Information We Collect</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Personal Information: name, email address, phone number, and details submitted via contact forms.</li>
                    <li>Automatically Collected Data: IP address, browser type, device information, and site usage data.</li>
                    <li>Cookies & Tracking Technologies: to improve browsing experience and analyse site performance.</li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We process your information to respond to enquiries, provide requested services, 
                    improve our website, communicate updates, comply with legal obligations, and protect our rights. 
                    We do not sell or rent your personal data to third parties.
                  </p>
                </div>

                {/* Legal Basis */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">3. Legal Basis for Processing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Consent – when you voluntarily provide your details.</li>
                    <li>Contractual Necessity – to deliver requested services.</li>
                    <li>Legitimate Interests – improving services and preventing fraud.</li>
                    <li>Legal Obligation – complying with UK & EU data protection laws.</li>
                  </ul>
                </div>

                {/* Data Protection */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">4. Data Protection & Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use secure servers, encryption, and restricted access controls to safeguard your data. 
                    While we follow industry standards, no method of transmission or storage is 100% secure.
                  </p>
                </div>

                {/* Sharing of Information */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">5. Sharing of Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may share your data with trusted service providers, when required by law, or in case of 
                    a business transfer. We do not share your data with third parties for marketing purposes.
                  </p>
                </div>

                {/* Your Rights */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">6. Your Rights</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Request access to your personal data.</li>
                    <li>Request corrections or updates to your data.</li>
                    <li>Request deletion (“right to be forgotten”).</li>
                    <li>Restrict or object to processing.</li>
                    <li>Withdraw consent for data use.</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">7. Cookies & Tracking</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our site uses cookies to ensure functionality, remember preferences, and analyse traffic. 
                    You can disable cookies in your browser, but some features may not work correctly.
                  </p>
                </div>

                {/* Data Retention */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">8. Data Retention</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We retain personal data only as long as necessary for service delivery or legal compliance. 
                    Contact form submissions are stored for up to 12 months, while contractual records may be retained 
                    for up to 6 years under UK law.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">9. Third-Party Links</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our website may contain external links (e.g., LinkedIn, GitHub). 
                    We are not responsible for their privacy practices and recommend reviewing their policies.
                  </p>
                </div>

                {/* International Transfers */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">10. International Transfers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Some of our third-party service providers may process data outside the UK/EEA. 
                    In such cases, we ensure appropriate safeguards such as Standard Contractual Clauses.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">11. Children’s Privacy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our services are not directed at children under 16. 
                    We do not knowingly collect data from minors. 
                    If you believe a child has provided data, contact us to remove it.
                  </p>
                </div>

                {/* Updates */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">12. Updates to this Policy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy periodically. 
                    The latest version will always be available on this page with a revised “Last Updated” date.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-card/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">13. Contact Us</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    If you have any questions, requests, or concerns regarding this Privacy Policy, please contact us:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={20} />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <a 
                          href="mailto:info@armtechnologies.ltd" 
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          info@armtechnologies.ltd
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary" size={20} />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-gray-300">Bournemouth, United Kingdom</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="text-center pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm">
                    This Privacy Policy was last updated on {new Date().toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

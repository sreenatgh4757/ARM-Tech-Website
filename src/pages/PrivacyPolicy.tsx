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
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="space-y-8">
                
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Your Privacy</h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    At ARM Technologies Ltd, we value your privacy and are committed to protecting your personal information. 
                    This privacy policy outlines how we handle the data you share with us.
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Information We Collect</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We collect only the information you provide when contacting us through our website forms or direct communication:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Name:</strong> To address you personally in our communications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Email Address:</strong> To respond to your enquiries and provide updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Phone Number:</strong> For direct communication when necessary</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Subject & Message:</strong> To understand your requirements and provide relevant assistance</span>
                    </li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">How We Use Your Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This information is used solely for responding to your enquiry and providing our services. 
                    We do not use your personal information for marketing purposes without your explicit consent, 
                    and we never sell or rent your information to third parties.
                  </p>
                </div>

                {/* Data Protection */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Data Protection & Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely 
                    and accessed only by authorized personnel who need it to provide our services.
                  </p>
                </div>

                {/* Third Party Sharing */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Third Party Sharing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We do not sell, trade, or share your personal information with third parties for their marketing 
                    purposes. We may only share your information when required by law or to protect our rights and safety.
                  </p>
                </div>

                {/* Your Rights */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Your Rights</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Request access to your personal data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Request correction of inaccurate data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Request deletion of your data at any time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Withdraw consent for data processing</span>
                    </li>
                  </ul>
                </div>

                {/* Data Retention */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Data Retention</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes 
                    for which it was collected, comply with legal obligations, and resolve disputes. 
                    You may request deletion of your data at any time.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="bg-card/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Us About Your Privacy</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    If you have any questions about this privacy policy, want to exercise your rights, 
                    or request deletion of your data, please contact us:
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
                    This privacy policy was last updated on {new Date().toLocaleDateString('en-GB', {
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
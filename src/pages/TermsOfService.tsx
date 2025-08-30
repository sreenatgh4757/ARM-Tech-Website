import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8"
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <FileText className="text-primary" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Terms of Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              By accessing or using our website and services, you agree to these Terms of Service.  
              Please read them carefully before using ARM Technologies Ltd’s website.
            </p>
          </div>

          {/* Terms Content */}
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Use of Website</h2>
              <p>
                Our website provides information about our services, projects, and ways to contact us.  
                You agree not to misuse the site (e.g., no hacking, data scraping, or unlawful activity).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
              <p>
                Any services described on this website are subject to separate agreements.  
                Submitting a contact form does not create a binding service contract.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
              <p>
                All content, logos, branding, and design on this site are owned by ARM Technologies Ltd.  
                You may not copy, reuse, or redistribute without written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
              <p>
                We make reasonable efforts to provide accurate information, but we do not guarantee the website is 
                error-free or uninterrupted. ARM Technologies Ltd is not responsible for damages resulting from use of this site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. External Links</h2>
              <p>
                Our site may link to third-party sites (LinkedIn, GitHub, etc.).  
                We are not responsible for their content, policies, or practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Updates</h2>
              <p>
                We may update these Terms of Service at any time.  
                The latest version will always be available on this page with the “Last Updated” date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at:  
                <a href="mailto:info@armtechnologies.ltd" className="text-primary hover:text-primary-dark ml-1">
                  info@armtechnologies.ltd
                </a>
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                These Terms of Service were last updated on {new Date().toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;

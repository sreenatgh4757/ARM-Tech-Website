import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
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
                <Cookie className="text-primary" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Cookie Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This Cookie Policy explains how ARM Technologies Ltd uses cookies and similar technologies 
              when you visit our website.
            </p>
          </div>

          {/* Cookie Policy Content */}
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website.  
                They help websites function properly and provide useful information such as preferences 
                and usage statistics.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Cookies</h2>
              <p>
                Currently, ARM Technologies Ltd only uses <strong>essential cookies</strong> that are necessary 
                for the website to function correctly.  
                We do <strong>not</strong> use advertising, marketing, or third-party tracking cookies at this time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Third-Party Cookies</h2>
              <p>
                Some services we use, such as hosting providers or Supabase, may set their own essential cookies 
                for technical reasons (for example, session security).  
                We do not currently use analytics tools such as Google Analytics or Facebook Pixel.  
                If we introduce them in the future, this Cookie Policy will be updated.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Managing Cookies</h2>
              <p>
                You can control or delete cookies through your browser settings.  
                Please note that disabling essential cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Updates</h2>
              <p>
                We may update this Cookie Policy from time to time.  
                Any changes will be posted here with a new “Last Updated” date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Contact</h2>
              <p>
                If you have any questions about this Cookie Policy, please contact us at:  
                <a 
                  href="mailto:info@armtechnologies.ltd" 
                  className="text-primary hover:text-primary-dark ml-1"
                >
                  info@armtechnologies.ltd
                </a>
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                This Cookie Policy was last updated on {new Date().toLocaleDateString('en-GB', {
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

export default CookiePolicy;

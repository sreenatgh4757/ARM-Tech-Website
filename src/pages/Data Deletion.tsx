import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataDeletion: React.FC = () => {
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
                <Trash2 className="text-primary" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Data Deletion Instructions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ARM Technologies Ltd respects your privacy. If you wish to have your personal data deleted 
              from our systems, please follow the instructions below.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. How to Request Data Deletion</h2>
              <p>
                To request deletion of your data collected through our website or services, please email us at:
              </p>
              <p className="mt-2">
                📧 <a 
                  href="mailto:info@armtechnologies.ltd" 
                  className="text-primary hover:text-primary-dark"
                >
                  info@armtechnologies.ltd
                </a>
              </p>
              <p className="mt-2">
                Please include the subject line <strong>“Data Deletion Request”</strong> 
                and provide details (such as your name, email, or phone number) 
                so we can locate and remove your records.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Processing Time</h2>
              <p>
                We will acknowledge your request within 48 hours and complete the deletion 
                within <strong>7 working days</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Exceptions</h2>
              <p>
                In some cases, we may be legally required to retain certain records 
                (for example, for tax or compliance purposes). If this applies, 
                we will inform you clearly.
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                This Data Deletion policy was last updated on {new Date().toLocaleDateString('en-GB', {
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

export default DataDeletion;

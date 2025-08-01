import React from 'react';

interface CTABannerProps {
  openModal: () => void;
}

const CTABanner: React.FC<CTABannerProps> = ({ openModal }) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-24 text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Let’s Build Something Together</h2>
      <p className="text-lg mb-6">
        Contact us to discuss AI automation, DevOps, and software solutions for your business.
      </p>
      <button 
        onClick={openModal}
        className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition"
      >
        Get in Touch
      </button>
    </div>
  );
};

export default CTABanner;

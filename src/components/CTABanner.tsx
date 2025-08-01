import React from 'react';

const CTABanner: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-white text-center"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Together</h2>
        <p className="text-lg mb-8">
          Contact us to discuss AI automation, DevOps, and software solutions for your business.
        </p>
        <a
          href="mailto:info@armtechnologies.ltd"
          className="inline-block bg-white text-[#0F172A] font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTABanner;

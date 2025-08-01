import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #38BDF8 100%)'
      }}
    >
      <div className={`max-w-4xl mx-auto px-4 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
          AI Automation, DevOps, and <span className="whitespace-nowrap">Software Development</span>
          <span className="block bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
            for Modern Business
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
          Helping businesses scale with AI automation, cloud DevOps, and expert software consulting.
        </p>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content container-custom">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Software Development & 
            <span className="block text-gradient">AI Solutions</span>
            for Modern Business
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'fade-in-up-delay-1' : 'opacity-0'}`}>
            Empowering small and growing companies with AI automation, 
            workflow integration, and expert consulting services.
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;

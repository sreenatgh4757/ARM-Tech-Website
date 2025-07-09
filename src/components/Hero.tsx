import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const rotatingTexts = [
  'Transforming Ideas into Scalable Digital Products with Zero Waste',
  'Connecting Teams, Tools, and Data through Seamless Automation',
  'Engineering Cloud-Native Infrastructure That Scales with You',
  'Merging Human Creativity with Agentic AI to Redefine Operations',
  'Your One-Stop Tech Partner for Build, Deploy, and Run'
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background with Waves and Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/30"></div>
        
        {/* Subtle Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A288E3" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#00C2FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF8A3D" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#A288E3" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#waveGradient1)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            <motion.path
              d="M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z"
              fill="url(#waveGradient2)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
        </div>
        
        {/* Floating Light Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Rotating Animated Headlines */}
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight min-h-[100px] md:min-h-[150px] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-center">
  Modern problems solved through powerful{' '}
  <span className="inline-block text-gradient font-bold">
    <TypeAnimation
      sequence={[
        'Automation', 2000,
        'Code', 2000,
        'Workflows', 2000,
        'Solutions', 2000,
        'Platforms', 2000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  </span>
</h1>

          </div>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We deliver scalable Agentic AI, DevOps, and product solutions — built for startups and enterprises.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <a 
              href="#contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3 hover:scale-105 transform transition-all"
            >
              Let's Automate Your Business
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
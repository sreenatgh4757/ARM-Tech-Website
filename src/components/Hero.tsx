import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/20"></div>
        
        {/* Subtle Abstract Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
          <motion.path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,300 Q400,100 800,300 T1200,300"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A288E3" stopOpacity="0" />
              <stop offset="50%" stopColor="#A288E3" stopOpacity="1" />
              <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C2FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#00C2FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF8A3D" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Businesses Through{' '}
            <span className="text-gradient">Intelligent Automation</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
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
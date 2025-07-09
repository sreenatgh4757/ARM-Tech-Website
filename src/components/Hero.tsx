import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const rotatingWords = ['Automation', 'Innovation', 'Technology', 'Solutions', 'Engineering'];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  // ✅ Rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container-custom mx-auto px-4 text-center">
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight min-h-[100px] md:min-h-[150px] text-center">
          Modern problems solved through powerful{' '}
          <span className="inline-block text-gradient font-bold relative w-[200px] h-[1em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0"
              >
                {rotatingWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
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
      </div>
    </section>
  );
};

export default Hero;

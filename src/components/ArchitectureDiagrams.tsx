import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Bot, Database, Cloud, Zap } from 'lucide-react';

const ArchitectureDiagrams: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Intelligent Automation Flow</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visualize how our AI-powered systems integrate seamlessly with your existing infrastructure.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            {/* Workflow Diagram */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                {/* Step 1: Data Input */}
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Database className="text-primary" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Data Input</h4>
                  <p className="text-gray-400 text-sm">Raw data collection from multiple sources</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <ArrowRight className="text-primary" size={24} />
                </div>

                {/* Step 2: AI Processing */}
                <div className="text-center">
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Bot className="text-secondary" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">AI Processing</h4>
                  <p className="text-gray-400 text-sm">Intelligent analysis and decision making</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <ArrowRight className="text-primary" size={24} />
                </div>

                {/* Step 3: Automated Action */}
                <div className="text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="text-accent" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Automated Action</h4>
                  <p className="text-gray-400 text-sm">Seamless execution across systems</p>
                </div>
              </div>

              {/* Central Cloud Integration */}
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl inline-block">
                  <Cloud className="text-primary mx-auto mb-2" size={32} />
                  <h4 className="text-white font-semibold">Cloud Infrastructure</h4>
                  <p className="text-gray-400 text-sm">Scalable, secure, and monitored</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureDiagrams;
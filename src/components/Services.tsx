import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
      title: "AI Automation",
      description: "Optimizing workflows with intelligent AI solutions that reduce manual work and increase efficiency."
    },
    {
      icon: "https://img.icons8.com/fluency/96/process.png",
      title: "Workflow Integration",
      description: "Connecting and automating your tools with Make.com, n8n, and custom integration solutions."
    },
    {
      icon: "https://img.icons8.com/fluency/96/cloud.png",
      title: "DevOps Engineering",
      description: "Building, deploying, and maintaining scalable systems with modern DevOps practices."
    },
    {
      icon: "https://img.icons8.com/fluency/96/consultation.png",
      title: "Startup Consulting",
      description: "BRDs, requirement gathering, and technical guidance to bring your vision to life."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-blue-400/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Comprehensive <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 hover:bg-white/90 cursor-pointer h-full">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-20 h-20 mx-auto drop-shadow-lg"
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <motion.div
                  className="flex items-center justify-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
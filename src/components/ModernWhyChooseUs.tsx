import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Shield, Users, Clock, Award, Rocket } from 'lucide-react';

const ModernWhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Zap size={32} />,
      title: "⚡ Fast Delivery",
      description: "Rapid development and deployment with agile methodologies",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-400/10 to-orange-500/10"
    },
    {
      icon: <Shield size={32} />,
      title: "🔒 Scalable Solutions",
      description: "Future-proof architecture that grows with your business",
      color: "from-green-400 to-blue-500",
      bgColor: "from-green-400/10 to-blue-500/10"
    },
    {
      icon: <Users size={32} />,
      title: "🤝 Startup Friendly",
      description: "Flexible pricing and support tailored for growing companies",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-400/10 to-pink-500/10"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: <Award size={24} /> },
    { number: "98%", label: "Client Satisfaction", icon: <Users size={24} /> },
    { number: "24/7", label: "Support Available", icon: <Clock size={24} /> },
    { number: "3x", label: "Faster Deployment", icon: <Rocket size={24} /> }
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
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-r from-primary/6 to-accent/6 rounded-full blur-3xl"></div>
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Why Choose <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">ARM Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We're not just another tech consultancy. We're your strategic partners in digital transformation.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer h-full relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}>
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              Let's discuss your project and see how we can help transform your business.
            </p>
            <motion.button
              className="bg-gradient-to-r from-accent to-primary text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernWhyChooseUs;
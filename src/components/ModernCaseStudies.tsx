import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ExternalLink, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernCaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      title: "TheGigSearch",
      subtitle: "AI-Powered Staffing Platform",
      description: "Revolutionary platform connecting international students with employers through intelligent matching algorithms.",
      tags: ["Live Platform", "100+ Users", "AI/ML"],
      metrics: ["30% efficiency gain", "95% match accuracy"],
      link: "/case-studies",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      title: "Cognitive Wellness App",
      subtitle: "Mental Health & Productivity",
      description: "Data-driven mental health solution with personalized insights and AI-powered recommendations.",
      tags: ["In Development", "Healthcare", "Mobile"],
      metrics: ["Coming Q2 2025", "Beta testing"],
      link: "/case-studies",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/8 to-blue-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Success <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover how we've helped businesses transform their operations with innovative technology solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <Link to={study.link} className="block">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                        <ExternalLink size={16} className="text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {study.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 font-light">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <TrendingUp size={14} className="text-accent" />
                          {metric}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Case Study
                      <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-primary text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            View All Case Studies
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernCaseStudies;
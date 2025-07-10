import React from 'react';
import { Bot, Cpu, Cloud, Code, Search, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

const services = [
  {
    title: "Automation",
    description: "Streamline your business processes with intelligent automation solutions that reduce manual work and increase efficiency.",
    features: [
      "Process Automation Design",
      "Workflow Optimization",
      "Task Automation Systems",
      "Integration with Existing Tools",
      "Performance Monitoring"
    ],
    icon: <Bot size={36} />,
    color: "primary",
    delay: 0.1
  },
  {
    title: "Agentic AI",
    description: "Deploy intelligent AI agents that can reason, plan, and execute complex business tasks autonomously with human oversight.",
    features: [
      "Custom AI Agent Development",
      "Multi-Agent System Architecture",
      "Natural Language Processing",
      "Automated Decision Making",
      "AI-Powered Workflow Integration"
    ],
    icon: <Cpu size={36} />,
    color: "secondary",
    delay: 0.2
  },
  {
    title: "DevOps & Cloud",
    description: "Scalable, secure cloud solutions across AWS, Azure, and GCP with robust DevOps practices for continuous delivery.",
    features: [
      "Multi-Cloud Architecture Design",
      "CI/CD Pipeline Setup",
      "Infrastructure as Code (IaC)",
      "Container Orchestration",
      "Security & Compliance"
    ],
    icon: <Cloud size={36} />,
    color: "accent",
    delay: 0.3
  },
  {
    title: "Software Development",
    description: "End-to-end software development support from planning to deployment with modern technologies and best practices.",
    features: [
      "Full-Stack Web & Mobile Development",
      "API Design & Integration",
      "Database Architecture",
      "Quality Assurance & Testing",
      "Maintenance & Support"
    ],
    icon: <Code size={36} />,
    color: "primary",
    delay: 0.4
  },
  {
    title: "Digital Marketing & SEO",
    description: "Comprehensive digital marketing strategies and SEO optimization to enhance your online presence and drive growth.",
    features: [
      "SEO Strategy & Implementation",
      "Content Marketing",
      "Social Media Management",
      "PPC Campaign Management",
      "Analytics & Performance Tracking"
    ],
    icon: <Search size={36} />,
    color: "secondary",
    delay: 0.5
  },
  {
    title: "Startup Enablement & Business Strategy",
    description: "Comprehensive support for startups and founders — from business analysis and market validation to technical execution and launch.",
    features: [
      "MVP Design & Development",
      "Business Requirements Documentation (BRD)",
      "Market Research & Analysis",
      "Competitive & Technical Feasibility Studies",
      "Product Roadmapping & Go-to-Market Strategy"
    ],
    icon: <Rocket size={36} />,
    color: "accent",
    delay: 0.6
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
      return;
    }
    
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary',
          iconBg: 'bg-primary/20',
          hoverBg: 'hover:bg-primary/5',
          shadow: 'hover:shadow-primary/20',
          border: 'hover:border-primary/30'
        };
      case 'secondary':
        return {
          icon: 'text-secondary',
          iconBg: 'bg-secondary/20',
          hoverBg: 'hover:bg-secondary/5',
          shadow: 'hover:shadow-secondary/20',
          border: 'hover:border-secondary/30'
        };
      case 'accent':
        return {
          icon: 'text-accent',
          iconBg: 'bg-accent/20',
          hoverBg: 'hover:bg-accent/5',
          shadow: 'hover:shadow-accent/20',
          border: 'hover:border-accent/30'
        };
      default:
        return {
          icon: 'text-primary',
          iconBg: 'bg-primary/20',
          hoverBg: 'hover:bg-primary/5',
          shadow: 'hover:shadow-primary/20',
          border: 'hover:border-primary/30'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container-custom mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We offer comprehensive technology solutions to help your business thrive in the digital age
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 group cursor-pointer ${colorClasses.hoverBg} ${colorClasses.shadow} ${colorClasses.border} hover:shadow-2xl`}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`${colorClasses.iconBg} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                  variants={iconVariants}
                  whileHover={{ rotate: 5 }}
                >
                  <div className={colorClasses.icon}>
                    {service.icon}
                  </div>
                </motion.div>
                
                <motion.h3
                  className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: service.delay + 0.3, duration: 0.5 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: service.delay + 0.4, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.ul
                  className="space-y-3"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start group/item"
                      variants={featureVariants}
                      custom={featureIndex}
                    >
                      <motion.div
                        className={`w-2 h-2 ${colorClasses.iconBg.replace('/20', '')} rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}
                        whileHover={{ scale: 1.5 }}
                      />
                      <motion.span
                        className="text-gray-300 text-sm group-hover:text-white group/item-hover:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            onClick={handleContactClick}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(162, 136, 227, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ cursor: 'pointer' }}
          >
            Get Started Today
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
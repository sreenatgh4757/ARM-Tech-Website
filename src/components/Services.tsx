import React from 'react';
import { Bot, Cpu, Cloud, Code, Search, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    delay: 0.6
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: service.delay }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Cpu, Cloud, Code, Rocket } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  features, 
  icon, 
  delay 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 group h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Automation & DevOps Solutions",
      description: "Streamline your development lifecycle with intelligent automation, CI/CD pipelines, and infrastructure optimization.",
      features: [
        "CI/CD Pipeline Setup & Optimization",
        "Infrastructure as Code (IaC)",
        "Automated Testing & Deployment",
        "Monitoring & Performance Optimization",
        "Container Orchestration (Docker, Kubernetes)"
      ],
      icon: <Bot size={40} />,
      delay: 0.1
    },
    {
      title: "Agentic AI Integrations",
      description: "Deploy intelligent AI agents that can reason, plan, and execute complex business tasks autonomously.",
      features: [
        "Custom AI Agent Development",
        "Multi-Agent System Architecture",
        "Natural Language Processing Integration",
        "Automated Decision Making Systems",
        "AI-Powered Workflow Optimization"
      ],
      icon: <Cpu size={40} />,
      delay: 0.2
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Scalable, secure cloud solutions across AWS, Azure, and GCP tailored to your business needs.",
      features: [
        "Multi-Cloud Architecture Design",
        "AWS, Azure, GCP Implementation",
        "Security & Compliance Setup",
        "Cost Optimization Strategies",
        "Disaster Recovery Planning"
      ],
      icon: <Cloud size={40} />,
      delay: 0.3
    },
    {
      title: "Full Software Development Lifecycle",
      description: "End-to-end software development support from planning to deployment and maintenance.",
      features: [
        "Requirements Analysis & Planning",
        "Full-Stack Web & Mobile Development",
        "API Design & Integration",
        "Quality Assurance & Testing",
        "Maintenance & Support"
      ],
      icon: <Code size={40} />,
      delay: 0.4
    },
    {
      title: "Startup Support Services",
      description: "Comprehensive support for startups from concept validation to MVP delivery and scaling.",
      features: [
        "Business Requirements Documentation (BRD)",
        "MVP Design & Development",
        "UI/UX Planning (Simple & Functional)",
        "Research & Development Services",
        "End-to-End Product Delivery"
      ],
      icon: <Rocket size={40} />,
      delay: 0.5
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From intelligent automation to full-scale product development, we deliver 
            comprehensive technology solutions that drive business success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
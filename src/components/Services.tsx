import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Cpu, Cloud, Code, Search, FileText, Rocket } from 'lucide-react';

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
      className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-card/70 transition-all duration-300 group h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{description}</p>
      
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
  title: "Startup Enablement & Business Strategy",
  description: "Comprehensive support for startups and founders — from business analysis and market validation to technical execution and launch.",
  features: [
    "MVP Design & Development",
    "Business Requirements Documentation (BRD)",
    "Market Research & Analysis",
    "Competitive & Technical Feasibility Studies",
    "Product Roadmapping & Go-to-Market Strategy"
  ],
  icon: <TrendingUp size={36} />,
  delay: 0.6
},
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
      title: "Startup Support",
      description: "Comprehensive support for startups from concept validation to MVP delivery and scaling with end-to-end solutions.",
      features: [
        "MVP Design & Development",
        "UI/UX Planning (Simple & Functional)",
        "Product Strategy & Roadmap",
        "Technical Architecture Planning",
        "End-to-End Product Delivery"
      ],
      icon: <Rocket size={36} />,
      delay: 0.7
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From intelligent automation to full-scale product development, we deliver 
            comprehensive technology solutions that drive business success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
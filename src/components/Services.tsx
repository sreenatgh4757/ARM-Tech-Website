import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Cpu, Cloud, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageUrl: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  features, 
  icon, 
  imageUrl, 
  delay 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-primary">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <button className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors">
          Learn More
          <ArrowRight size={16} />
        </button>
      </div>
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
      title: "AI Automation",
      description: "Transform your business processes with intelligent automation solutions that learn, adapt, and optimize workflows in real-time.",
      features: [
        "Intelligent Process Automation",
        "Machine Learning Integration",
        "Real-time Decision Making",
        "Custom AI Model Development"
      ],
      icon: <Bot size={32} />,
      imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      delay: 0.1
    },
    {
      title: "Agentic AI",
      description: "Deploy autonomous AI agents that can reason, plan, and execute complex tasks independently while maintaining human oversight.",
      features: [
        "Autonomous Decision Making",
        "Multi-Agent Coordination",
        "Goal-Oriented Planning",
        "Human-AI Collaboration"
      ],
      icon: <Cpu size={32} />,
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      delay: 0.2
    },
    {
      title: "DevOps & Cloud Infrastructure",
      description: "Streamline your development lifecycle with automated CI/CD pipelines, cloud-native solutions, and infrastructure as code.",
      features: [
        "CI/CD Pipeline Automation",
        "Cloud-Native Architecture",
        "Infrastructure as Code",
        "Monitoring & Optimization"
      ],
      icon: <Cloud size={32} />,
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      delay: 0.3
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/95">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive innovation and efficiency 
            across your entire organization.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
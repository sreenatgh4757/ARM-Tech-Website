import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar, Users, Zap } from 'lucide-react';

const RecentProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "TheGigSearch",
      category: "Staffing Platform",
      description: "A comprehensive staffing platform connecting businesses with skilled professionals. Built with modern web technologies and AI-powered matching algorithms.",
      features: [
        "AI-powered candidate matching",
        "Real-time messaging system",
        "Advanced search & filtering",
        "Automated workflow management"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      status: "Live Platform",
      tech: ["React", "Node.js", "AI/ML", "Cloud Infrastructure"]
    },
    {
      title: "FinTech Automation Suite",
      category: "Financial Services",
      description: "Automated CI/CD pipeline and cloud infrastructure for a leading fintech company, reducing deployment time by 80% and improving system reliability.",
      features: [
        "Automated deployment pipeline",
        "Real-time monitoring dashboard",
        "Security compliance automation",
        "Multi-environment management"
      ],
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      status: "Completed in 10 Days",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "E-Commerce Intelligence Platform",
      category: "Retail Technology",
      description: "AI-driven analytics platform providing real-time insights and automated inventory management for e-commerce businesses.",
      features: [
        "Predictive analytics engine",
        "Automated inventory optimization",
        "Customer behavior analysis",
        "Multi-channel integration"
      ],
      image: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      status: "In Development",
      tech: ["Python", "Machine Learning", "React", "PostgreSQL"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations through 
            intelligent automation and cutting-edge technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-card/70 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-background/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors">
                  View Case Study
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
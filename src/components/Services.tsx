import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-800 ${inView ? 'fade-in-up' : 'opacity-0'}`}>
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${inView ? 'fade-in-up-delay-1' : 'opacity-0'}`}>
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="services-grid grid gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card group ${inView ? `fade-in-up-delay-${index + 1}` : 'opacity-0'}`}
            >
              <img 
                src={service.icon} 
                alt={service.title}
                className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
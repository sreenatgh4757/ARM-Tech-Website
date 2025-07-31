import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
      title: "AI Automation",
      description: "Transform your business processes with intelligent automation solutions that learn and adapt.",
      features: [
        "Custom AI workflow development",
        "Process optimization and analysis",
        "Intelligent document processing",
        "Predictive analytics integration",
        "24/7 automated operations"
      ],
      pricing: "Starting from £2,500"
    },
    {
      icon: "https://img.icons8.com/fluency/96/process.png",
      title: "Workflow Integration",
      description: "Connect your tools and systems with seamless automation using Make.com, n8n, and custom solutions.",
      features: [
        "Make.com automation setup",
        "n8n workflow development",
        "API integrations",
        "Data synchronization",
        "Custom connector development"
      ],
      pricing: "Starting from £1,500"
    },
    {
      icon: "https://img.icons8.com/fluency/96/cloud.png",
      title: "DevOps Engineering",
      description: "Build, deploy, and maintain scalable systems with modern DevOps practices and cloud infrastructure.",
      features: [
        "CI/CD pipeline setup",
        "Cloud infrastructure management",
        "Container orchestration",
        "Monitoring and logging",
        "Security implementation"
      ],
      pricing: "Starting from £3,000"
    },
    {
      icon: "https://img.icons8.com/fluency/96/consultation.png",
      title: "Startup Consulting",
      description: "Comprehensive technical guidance from concept to launch, including BRDs and requirement gathering.",
      features: [
        "Business Requirements Documents",
        "Technical feasibility analysis",
        "Architecture planning",
        "MVP development strategy",
        "Go-to-market technical support"
      ],
      pricing: "Starting from £1,000"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and accelerate your digital journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-6 mb-6">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-16 h-16 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-accent">
                    {service.pricing}
                  </div>
                  <Link 
                    to="/contact"
                    className="btn-secondary flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your specific needs and create a custom solution that drives results.
          </p>
          <Link 
            to="/contact"
            className="btn-primary bg-white text-accent hover:bg-gray-100"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
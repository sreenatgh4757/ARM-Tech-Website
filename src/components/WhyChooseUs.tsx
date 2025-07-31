import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Zap, Shield, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Zap size={32} className="text-accent" />,
      title: "⚡ Fast Delivery",
      description: "Rapid development and deployment with agile methodologies"
    },
    {
      icon: <Shield size={32} className="text-accent" />,
      title: "🔒 Scalable Solutions",
      description: "Future-proof architecture that grows with your business"
    },
    {
      icon: <Users size={32} className="text-accent" />,
      title: "🤝 Startup Friendly",
      description: "Flexible pricing and support tailored for growing companies"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-800 ${inView ? 'fade-in-up' : 'opacity-0'}`}>
            Why Choose <span className="text-gradient">ARM Technologies</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${inView ? 'fade-in-up-delay-1' : 'opacity-0'}`}>
            We're not just another tech consultancy. We're your strategic partners in digital transformation.
          </p>
        </div>

        <div className="why-us-grid grid gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`icon-card text-center ${inView ? `fade-in-up-delay-${index + 1}` : 'opacity-0'}`}
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
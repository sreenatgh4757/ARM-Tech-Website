import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "The Gig Search",
      description: "Automated staffing platform connecting international students with employers",
      status: "Live Platform",
      link: "/case-studies"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Upcoming Project",
      description: "Exciting new automation project launching soon",
      status: "Coming Soon",
      link: "/case-studies"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-16" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-800 ${inView ? 'fade-in-up' : 'opacity-0'}`}>
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${inView ? 'fade-in-up-delay-1' : 'opacity-0'}`}>
            Explore how we’ve helped businesses scale with AI automation, DevOps, and modern software solutions.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link 
              key={index}
              to={study.link}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white ${inView ? `fade-in-up-delay-${index + 1}` : 'opacity-0'}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-accent text-white text-sm font-medium px-3 py-1 rounded-full">
                  {study.status}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{study.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{study.description}</p>
                <div className="flex items-center text-accent font-medium hover:text-primary transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

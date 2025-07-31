import React from 'react';
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 'thegigsearch',
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "The Gig Search",
      subtitle: "Automated Staffing Platform",
      description: "Revolutionary platform connecting international students with employers through AI-driven matching and compliance automation.",
      challenge: "International students in the UK face complex employment regulations and limited opportunities, while employers struggle with compliance and finding qualified candidates.",
      solution: "Built an intelligent platform with automated visa compliance checking, AI-powered candidate matching, and streamlined onboarding processes.",
      results: [
        "100+ students successfully placed",
        "17 verified employers onboarded",
        "95% compliance rate maintained",
        "30% reduction in hiring time"
      ],
      technologies: ["React", "Node.js", "AI/ML", "Supabase", "Stripe"],
      status: "Live Platform",
      link: "/case-study/thegigsearch"
    },
    {
      id: 'upcoming',
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "E-commerce Automation Suite",
      subtitle: "Coming Soon",
      description: "Comprehensive automation solution for e-commerce businesses, featuring inventory management, order processing, and customer service automation.",
      challenge: "E-commerce businesses struggle with manual processes, inventory tracking, and customer service scalability.",
      solution: "Developing an integrated automation suite that handles everything from inventory alerts to customer communications.",
      results: [
        "Project in development",
        "Expected 60% efficiency gain",
        "Multi-platform integration",
        "AI-powered customer insights"
      ],
      technologies: ["Python", "FastAPI", "AI/ML", "Make.com", "Shopify API"],
      status: "In Development",
      link: "#"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Case <span className="text-gradient">Studies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how we've helped businesses transform their operations 
              with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-sm font-medium px-3 py-1 rounded-full">
                        {study.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-accent font-medium text-lg">
                        {study.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Key Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2">
                            <TrendingUp size={16} className="text-accent flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    {study.link !== '#' ? (
                      <Link 
                        to={study.link}
                        className="btn-secondary inline-flex items-center gap-2"
                      >
                        View Full Case Study
                        <ExternalLink size={16} />
                      </Link>
                    ) : (
                      <div className="text-gray-500 font-medium">
                        Full case study coming soon
                      </div>
                    )}
                  </div>
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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Link 
            to="/contact"
            className="btn-primary bg-white text-accent hover:bg-gray-100"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
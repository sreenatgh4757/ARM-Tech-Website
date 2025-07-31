import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTABanner: React.FC = () => {
  return (
    <section className="cta-banner" id="contact">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to automate your workflows?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can transform your business with AI automation and modern technology solutions.
          </p>
          <Link 
            to="/contact"
            className="btn-primary bg-white text-accent hover:bg-gray-100 text-lg px-8 py-4"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
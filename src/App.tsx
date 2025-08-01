import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ContactForm from './components/ContactForm';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';   // ✅ Add this

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0F172A]/90 via-[#1E293B]/90 to-[#38BDF8]/90 backdrop-blur-md text-white shadow-md">
        <div className="container-custom flex items-center justify-between py-4">
          <div className="text-2xl font-bold">A.R.M Technologies Ltd</div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-blue-300">Home</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-300">Services</button>
            <button onClick={() => scrollToSection('case-studies')} className="hover:text-blue-300">Case Studies</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-300">Contact</button>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="case-studies">
        <CaseStudies />
      </section>

<section id="contact" className="py-24 bg-gray-50">
  <div className="container-custom">
    <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
    <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
      We’d love to hear from you! Fill out the form and we’ll get back to you soon.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Details */}
      <div className="space-y-4">
        <p className="text-gray-700 font-medium">📧 info@armtechnologies.ltd</p>
        <p className="text-gray-700 font-medium">📞 +44 1234 567890</p>
        <p className="text-gray-700 font-medium">📍 London, United Kingdom</p>
      </div>

      {/* Contact Form */}
      <div>
        <ContactForm />
      </div>
    </div>
  </div>
</section>

      <Footer />   {/* ✅ Footer added here */}
    </div>
  );
};

export default App;

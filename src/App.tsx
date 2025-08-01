import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
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

      <section id="contact">
        <CTABanner />
      </section>

      <Footer />   {/* ✅ Footer added here */}
    </div>
  );
};

export default App;

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
<section id="contact" className="py-24 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#38BDF8] text-white">
  <div className="container-custom text-center">
    <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
    <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
      We'd love to hear from you! Fill out the form and our team will get back to you soon.
    </p>

    {/* Contact Form */}
    <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>




      <Footer />   {/* ✅ Footer added here */}
    </div>
  );
};

export default App;

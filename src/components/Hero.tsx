import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#0F172A]/95 via-[#1E293B]/95 to-[#38BDF8]/95 backdrop-blur-md text-white shadow-lg'
          : 'bg-gradient-to-r from-[#0F172A]/70 via-[#1E293B]/70 to-[#38BDF8]/70 backdrop-blur-md text-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">A.R.M</div>
            <div className="text-sm text-white font-medium">
              Technologies Ltd
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
            <Link to="/services" className="nav-link text-white">
              Services
            </Link>
            <Link to="/case-studies" className="nav-link text-white">
              Case Studies
            </Link>
            <Link to="/contact" className="nav-link text-white">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleContactClick}
            className="hidden md:block bg-white text-[#0F172A] px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-200 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-gradient-to-b from-[#0F172A]/95 via-[#1E293B]/95 to-[#38BDF8]/95 backdrop-blur-lg text-white z-40`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="text-xl font-bold text-white">
              A.R.M Technologies
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white hover:text-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <Link to="/" className="block text-xl font-medium hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" className="block text-xl font-medium hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/case-studies" className="block text-xl font-medium hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
              <Link to="/contact" className="block text-xl font-medium hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>

            <div className="mt-8">
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-white text-[#0F172A] px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get in Touch
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

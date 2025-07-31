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
    <header className={`header ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient">
              A.R.M
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Technologies Ltd
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/case-studies" className="nav-link">Case Studies</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={handleContactClick}
            className="hidden md:block btn-secondary"
          >
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <div className="text-xl font-bold text-gradient">A.R.M Technologies</div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-accent transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <Link 
                to="/" 
                className="block text-xl font-medium text-gray-800 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block text-xl font-medium text-gray-800 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/case-studies" 
                className="block text-xl font-medium text-gray-800 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="block text-xl font-medium text-gray-800 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={() => {
                  handleContactClick();
                  setIsMenuOpen(false);
                }}
                className="btn-primary w-full justify-center"
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
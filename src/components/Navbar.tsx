import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              {/* Modern ARM Logo */}
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl shadow-lg">
                <div className="text-white font-bold text-lg tracking-wider">ARM</div>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur-sm -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wide">ARM Technologies</span>
              <span className="text-gray-400 text-xs font-medium tracking-widest uppercase">Limited</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a href="#contact" className="btn-primary">Speak to Our Experts</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-gray-800">
          <div className="container-custom mx-auto py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-white px-4 py-2 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-white px-4 py-2 hover:bg-primary/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="btn-primary mx-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Speak to Our Experts
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
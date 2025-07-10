import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only track sections on home page
      if (location.pathname === '/') {
        const sections = ['about', 'services', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (sectionId: string) => {
    return location.pathname === '/' && activeSection === sectionId;
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col items-start">
              <div className="text-white font-black text-2xl tracking-[0.2em] mb-1 relative">
                A.R.M
                <div className="absolute inset-0 text-blue-400/20 blur-sm">A.R.M</div>
              </div>
              <div className="text-gray-300 text-sm font-light tracking-[0.15em] uppercase">
                Technologies Ltd
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('about')}
              className={`transition-all duration-300 relative ${
                isActive('about') 
                  ? 'text-primary font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              About
              {isActive('about') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className={`transition-all duration-300 relative ${
                isActive('services') 
                  ? 'text-primary font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
              {isActive('services') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className={`transition-all duration-300 relative ${
                isActive('projects') 
                  ? 'text-primary font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Projects
              {isActive('projects') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`transition-all duration-300 relative ${
                isActive('contact') 
                  ? 'text-primary font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
              {isActive('contact') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
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
            <button 
              onClick={() => handleNavClick('about')}
              className={`text-left px-4 py-2 rounded-md transition-all duration-300 ${
                isActive('about')
                  ? 'text-primary bg-primary/10 font-medium'
                  : 'text-white hover:bg-primary/10 hover:text-primary'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className={`text-left px-4 py-2 rounded-md transition-all duration-300 ${
                isActive('services')
                  ? 'text-primary bg-primary/10 font-medium'
                  : 'text-white hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('projects')}
              className={`text-left px-4 py-2 rounded-md transition-all duration-300 ${
                isActive('projects')
                  ? 'text-primary bg-primary/10 font-medium'
                  : 'text-white hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`text-left px-4 py-2 rounded-md transition-all duration-300 ${
                isActive('contact')
                  ? 'text-primary bg-primary/10 font-medium'
                  : 'text-white hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ModernCaseStudies from './components/ModernCaseStudies';
import ModernWhyChooseUs from './components/ModernWhyChooseUs';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-gradient">A.R.M</div>
            <p className="text-gray-600 font-medium">Loading Technologies...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <ModernCaseStudies />
              <ModernWhyChooseUs />
              <CTABanner />
            </main>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingContactButton />
      </div>
    </Router>
  );
}

export default App;
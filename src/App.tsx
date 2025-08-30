import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import RecentProjects from './components/RecentProjects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import CaseStudy from './pages/CaseStudy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import DataDeletion from './pages/Data Deletion';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-white overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutUs />
              <Services />
              <RecentProjects />
              <ContactForm />
            </>
          } />
          <Route path="/case-study/thegigsearch" element={<CaseStudy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
        <Footer />
        {/* <FloatingContactButton /> */}
      </div>
    </Router>
  );
}

export default App;
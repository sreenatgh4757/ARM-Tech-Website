import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ArchitectureDiagrams from './components/ArchitectureDiagrams';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <WhyChooseUs />
              <ArchitectureDiagrams />
              <BlogSection />
              <ContactForm />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
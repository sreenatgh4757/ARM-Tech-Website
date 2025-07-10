import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Zap, Target, CheckCircle, Smartphone, Monitor, TrendingUp, Clock, DollarSign, BarChart3, Shield, Globe, Award, BookOpen, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = '/#contact';
  };
  return (
    <div className="pt-20 pb-20 min-h-screen">
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Revolutionizing <span className="text-gradient">Ethical Gig Work Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              How ARM Technologies transformed the gig economy landscape for international students in the UK 
              through their innovative AI-driven platform, connecting 100+ students with 17 employers while 
              ensuring full legal compliance and reducing business overhead by 30%.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mb-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
                alt="TheGigSearch Platform - Connecting International Students with Ethical Employment"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute top-12 right-12">
                <span className="bg-primary/90 text-white font-medium px-4 py-2 rounded-full">
                  Live Platform
                </span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Introduction</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The UK's international student population faces a complex web of employment challenges, 
                  from navigating visa restrictions to finding legitimate work opportunities that comply 
                  with immigration laws. With over 600,000 international students in the UK, many struggle 
                  to secure part-time employment that fits within their 20-hour weekly limit while pursuing 
                  their studies.
                </p>
                <p>
                  ARM Technologies recognized this critical gap in the market and developed TheGigSearch, 
                  an innovative platform that bridges the divide between international students seeking 
                  flexible work and businesses requiring skilled, compliant workforce solutions. Our mission 
                  was clear: create a technology-driven ecosystem that ensures legal compliance while 
                  maximizing opportunities for both students and employers.
                </p>
                <p>
                  Today, TheGigSearch has successfully connected over 100 international students with 17 
                  verified employers across the UK, creating a sustainable model that benefits all stakeholders 
                  while maintaining the highest standards of legal and ethical employment practices.
                </p>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">The Challenge</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  International students in the UK face a dual challenge: strict visa regulations limiting 
                  their work hours to 20 per week, and a fragmented job market that often lacks transparency 
                  about compliance requirements. Many students unknowingly violate their visa conditions, 
                  risking their academic future and immigration status.
                </p>
                <p>
                  Simultaneously, businesses struggle with the complexity of hiring international students. 
                  The administrative burden of verifying work eligibility, tracking hours, and ensuring 
                  compliance with immigration law creates significant overhead costs and legal risks. 
                  Traditional recruitment processes are ill-equipped to handle these specialized requirements.
                </p>
                <p>
                  The existing hiring landscape presented several critical pain points: manual verification 
                  processes prone to error, lack of real-time hour tracking systems, limited visibility 
                  into student availability, and absence of automated compliance monitoring. These challenges 
                  resulted in missed opportunities, legal complications, and inefficient resource allocation 
                  for both students and employers.
                </p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Challenge Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-accent" size={20} />
                  <div>
                    <p className="text-white font-medium">Students Affected</p>
                    <p className="text-gray-400 text-sm">600,000+ in UK</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-accent" size={20} />
                  <div>
                    <p className="text-white font-medium">Work Limit</p>
                    <p className="text-gray-400 text-sm">20 hours/week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-accent" size={20} />
                  <div>
                    <p className="text-white font-medium">Compliance Risk</p>
                    <p className="text-gray-400 text-sm">High for violations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="text-accent" size={20} />
                  <div>
                    <p className="text-white font-medium">Business Overhead</p>
                    <p className="text-gray-400 text-sm">30-40% additional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Our AI-Driven Solution</h2>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-gray-300 mb-6 text-center leading-relaxed text-lg">
                TheGigSearch revolutionizes the international student employment landscape through intelligent 
                automation and predictive compliance systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Zap className="text-primary" size={20} />
                    Automated Compliance Engine
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Real-time visa status verification</li>
                    <li>• Automated hour tracking and alerts</li>
                    <li>• Compliance dashboard for employers</li>
                    <li>• Legal requirement notifications</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Target className="text-secondary" size={20} />
                    Intelligent Matching System
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• AI-powered skill and schedule matching</li>
                    <li>• Predictive availability algorithms</li>
                    <li>• Cultural and language preferences</li>
                    <li>• Academic schedule integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Shield className="text-accent" size={20} />
                  Direct Employment Model
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Our platform facilitates direct employment relationships, ensuring students receive 
                  full employment rights and benefits while maintaining compliance with UK immigration law.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Full employment contracts</li>
                  <li>• Statutory benefits inclusion</li>
                  <li>• Career development pathways</li>
                  <li>• Professional reference system</li>
                </ul>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="text-primary" size={20} />
                  Predictive Analytics Suite
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Advanced analytics provide insights into workforce planning, compliance trends, 
                  and optimization opportunities for both students and employers.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Demand forecasting algorithms</li>
                  <li>• Performance optimization insights</li>
                  <li>• Compliance risk assessment</li>
                  <li>• ROI tracking and reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Measurable Results & Impact</h2>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p className="text-white font-medium mb-2">Overhead Reduction</p>
                <p className="text-gray-400 text-sm">For participating businesses</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                <p className="text-white font-medium mb-2">Students Connected</p>
                <p className="text-gray-400 text-sm">Across UK universities</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">17</div>
                <p className="text-white font-medium mb-2">Verified Employers</p>
                <p className="text-gray-400 text-sm">Compliance-certified businesses</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-white font-medium mb-2">Compliance Rate</p>
                <p className="text-gray-400 text-sm">Zero visa violations</p>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Transformational Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">For Students</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>Streamlined onboarding process reducing time-to-employment by 60%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>Automated compliance monitoring ensuring visa requirement adherence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>AI-powered job matching increasing placement success rate to 85%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>Professional development opportunities and career pathway guidance</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4">For Employers</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                      <span>30% reduction in administrative overhead through automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                      <span>Zero compliance violations with built-in legal safeguards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                      <span>Access to pre-vetted, skilled international talent pool</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                      <span>Real-time analytics and workforce optimization insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Future Scaling */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Future Scaling & Innovation</h2>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="text-primary" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-3">National Expansion</h4>
                  <p className="text-gray-400 text-sm">
                    Scaling to cover all major UK cities and university towns, targeting 10,000+ 
                    student connections by 2026.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="text-secondary" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-3">AI Enhancement</h4>
                  <p className="text-gray-400 text-sm">
                    Advanced machine learning models for predictive career matching and 
                    personalized development recommendations.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Building className="text-accent" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Enterprise Integration</h4>
                  <p className="text-gray-400 text-sm">
                    Seamless integration with major HR systems and university career services 
                    for comprehensive ecosystem coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Conclusion */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white">Transforming the Future of Ethical Employment</h2>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                TheGigSearch represents more than a technological solution—it's a paradigm shift toward 
                ethical, compliant, and mutually beneficial employment relationships. By leveraging AI-driven 
                automation and predictive analytics, we've created a sustainable ecosystem that serves the 
                needs of international students, businesses, and the broader UK economy.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                The platform's success demonstrates the transformative power of thoughtful technology 
                implementation in addressing complex regulatory and social challenges. As we continue to 
                scale and enhance our capabilities, TheGigSearch is positioned to become the definitive 
                platform for ethical international student employment across the UK and beyond.
              </p>
            </div>
            
            <Link 
              to="/"
              onClick={handleContactClick}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              Transform Your Business Today
              <ArrowLeft className="rotate-180" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
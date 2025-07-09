import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Zap, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy: React.FC = () => {
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
              TheGigSearch – <span className="text-gradient">Project Case Study</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing the staffing industry with AI-powered matching and intelligent automation
            </p>
          </div>

          {/* Project Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
              alt="TheGigSearch Platform"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-primary/90 text-white font-medium px-4 py-2 rounded-full">
                Live Platform
              </span>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  TheGigSearch represents a paradigm shift in how businesses connect with skilled professionals. 
                  Our team was tasked with creating a comprehensive staffing platform that would leverage 
                  artificial intelligence to streamline the recruitment process while maintaining the human 
                  touch that's essential in talent acquisition.
                </p>
                <p>
                  The platform needed to handle complex matching algorithms, real-time communication, 
                  and provide detailed analytics for both employers and job seekers. We implemented 
                  cutting-edge AI technologies to create intelligent candidate matching that goes beyond 
                  simple keyword matching to understand skills, experience, and cultural fit.
                </p>
                <p>
                  Built with scalability in mind, TheGigSearch can handle thousands of concurrent users 
                  while maintaining lightning-fast response times and providing a seamless user experience 
                  across all devices.
                </p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <p className="text-white font-medium">Timeline</p>
                    <p className="text-gray-400 text-sm">6 months</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={20} />
                  <div>
                    <p className="text-white font-medium">Team Size</p>
                    <p className="text-gray-400 text-sm">8 developers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-primary" size={20} />
                  <div>
                    <p className="text-white font-medium">Industry</p>
                    <p className="text-gray-400 text-sm">Staffing & Recruitment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">The Challenge</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Traditional recruitment processes were time-consuming and inefficient
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Manual candidate screening led to missed opportunities and poor matches
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Lack of real-time communication tools hindered the hiring process
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Limited analytics made it difficult to optimize recruitment strategies
                </li>
              </ul>
            </div>

            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Our Solution</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  AI-powered matching algorithm that analyzes skills, experience, and preferences
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  Automated screening process that saves 80% of manual review time
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  Real-time messaging system with video call integration
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  Comprehensive analytics dashboard with actionable insights
                </li>
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Key Features Implemented</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Matching",
                  description: "Advanced machine learning algorithms that match candidates based on skills, experience, and cultural fit.",
                  icon: <Zap size={24} />
                },
                {
                  title: "Real-Time Messaging",
                  description: "Instant communication platform with file sharing, video calls, and notification systems.",
                  icon: <Users size={24} />
                },
                {
                  title: "Advanced Search & Filters",
                  description: "Sophisticated search capabilities with multiple filters for precise candidate discovery.",
                  icon: <Target size={24} />
                },
                {
                  title: "Automated Workflows",
                  description: "Streamlined processes that automate repetitive tasks and improve efficiency.",
                  icon: <CheckCircle size={24} />
                },
                {
                  title: "Analytics Dashboard",
                  description: "Comprehensive reporting and analytics to track performance and optimize strategies.",
                  icon: <Calendar size={24} />
                },
                {
                  title: "Mobile Responsive",
                  description: "Fully responsive design that works seamlessly across all devices and screen sizes.",
                  icon: <Zap size={24} />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-white">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Technologies Used</h2>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">Frontend</h4>
                  <div className="space-y-2">
                    {['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                      <span key={index} className="block bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Backend</h4>
                  <div className="space-y-2">
                    {['Node.js', 'Express.js', 'PostgreSQL', 'Redis'].map((tech, index) => (
                      <span key={index} className="block bg-secondary/20 text-secondary text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">AI/ML</h4>
                  <div className="space-y-2">
                    {['TensorFlow', 'Python', 'Natural Language Processing', 'Machine Learning'].map((tech, index) => (
                      <span key={index} className="block bg-accent/20 text-accent text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Infrastructure</h4>
                  <div className="space-y-2">
                    {['AWS', 'Docker', 'Kubernetes', 'CI/CD'].map((tech, index) => (
                      <span key={index} className="block bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-white font-medium mb-2">Time Reduction</p>
                <p className="text-gray-400 text-sm">In candidate screening process</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <p className="text-white font-medium mb-2">Match Accuracy</p>
                <p className="text-gray-400 text-sm">AI-powered candidate matching</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">300%</div>
                <p className="text-white font-medium mb-2">User Growth</p>
                <p className="text-gray-400 text-sm">Within first 6 months</p>
              </div>
            </div>
            
            <Link 
              to="/#contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              Start Your Project
              <ArrowLeft className="rotate-180" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
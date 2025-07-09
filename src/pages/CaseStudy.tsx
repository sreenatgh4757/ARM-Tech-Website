import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Zap, Target, CheckCircle, Smartphone, Monitor, TrendingUp, Clock, DollarSign, BarChart3 } from 'lucide-react';
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
              TheGigSearch – <span className="text-gradient">Employer Dashboard Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing the employer hiring experience through an intuitive, feature-rich dashboard 
              available on both mobile and desktop platforms with seamless integration of core functionalities.
            </p>
          </div>

          {/* Hero Image - Mobile & Desktop Interfaces */}
          <div className="relative mb-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
              <img
                src="/Demo_employer (2).png"
                alt="TheGigSearch Employer Dashboard - Mobile and Desktop Interfaces"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute top-12 right-12">
                <span className="bg-primary/90 text-white font-medium px-4 py-2 rounded-full">
                  Live Platform
                </span>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  TheGigSearch's employer dashboard transformation represents a complete reimagining of how 
                  businesses connect with skilled professionals. Our team developed a comprehensive platform 
                  that unifies the entire hiring process into a single, intuitive interface.
                </p>
                <p>
                  The solution focuses on seamless integration of core functionalities with a user-centered 
                  design approach that drives measurable results. From one-click job posting to real-time 
                  analytics, every feature was crafted to enhance the employer experience.
                </p>
                <p>
                  Built with mobile-first principles, the dashboard ensures employers can manage their hiring 
                  process effectively whether they're at their desk or on the go, maintaining full functionality 
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
                    <p className="text-gray-400 text-sm">8 months</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={20} />
                  <div>
                    <p className="text-white font-medium">Team Size</p>
                    <p className="text-gray-400 text-sm">12 specialists</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-primary" size={20} />
                  <div>
                    <p className="text-white font-medium">Focus</p>
                    <p className="text-gray-400 text-sm">Employer Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="text-primary" size={20} />
                  <div>
                    <p className="text-white font-medium">Platforms</p>
                    <p className="text-gray-400 text-sm">Mobile & Desktop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">The Challenge</h2>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-gray-300 mb-6 text-center leading-relaxed">
                The fragmented hiring landscape where employers struggled with multiple pain points:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Managing multiple job postings across platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Tracking candidate applications efficiently</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Handling billing and subscriptions</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Accessing real-time hiring analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Operating effectively on mobile devices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Our Solution</h2>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-gray-300 mb-6 text-center leading-relaxed">
                A unified dashboard that brings together all hiring functionalities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-300">One-click job posting system</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Real-time candidate tracking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Automated billing and subscription management</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Comprehensive analytics suite</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Fully responsive design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features & Implementation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Key Features & Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Intelligent Job Posting */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-primary" size={24} />
                  <h4 className="text-lg font-bold text-white">Intelligent Job Posting</h4>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Step-by-step posting wizard</li>
                  <li>• Template library</li>
                  <li>• Smart matching algorithm</li>
                  <li>• Multi-platform preview</li>
                </ul>
              </div>

              {/* Subscription Management */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-secondary" size={24} />
                  <h4 className="text-lg font-bold text-white">Subscription Management</h4>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Flexible plan options</li>
                  <li>• Usage tracking</li>
                  <li>• Upgrade/downgrade capabilities</li>
                  <li>• Automated renewals</li>
                </ul>
              </div>

              {/* Financial Tools */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="text-accent" size={24} />
                  <h4 className="text-lg font-bold text-white">Financial Tools</h4>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Automated invoicing</li>
                  <li>• Payment history</li>
                  <li>• Expense tracking</li>
                  <li>• Budget analytics</li>
                </ul>
              </div>

              {/* Analytics Dashboard */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="text-primary" size={24} />
                  <h4 className="text-lg font-bold text-white">Analytics Dashboard</h4>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Hiring metrics</li>
                  <li>• Engagement statistics</li>
                  <li>• ROI calculations</li>
                  <li>• Custom reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Design Approach</h2>
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-gray-300 mb-6 text-center leading-relaxed">
                Our user-centered methodology ensured every design decision was backed by real user needs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Employer Interviews</h4>
                  <p className="text-gray-400 text-sm">In-depth research with hiring managers</p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="text-secondary" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Usability Testing</h4>
                  <p className="text-gray-400 text-sm">Continuous validation with real users</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="text-accent" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Iterative Prototyping</h4>
                  <p className="text-gray-400 text-sm">Rapid iteration based on feedback</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Smartphone className="text-primary" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Mobile-First Design</h4>
                  <p className="text-gray-400 text-sm">Optimized for mobile usage patterns</p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="text-secondary" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Accessibility Compliance</h4>
                  <p className="text-gray-400 text-sm">WCAG 2.1 AA standards</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Monitor className="text-accent" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Cross-Platform</h4>
                  <p className="text-gray-400 text-sm">Seamless desktop and mobile experience</p>
                </div>
              </div>
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
                    {['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Native'].map((tech, index) => (
                      <span key={index} className="block bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Backend</h4>
                  <div className="space-y-2">
                    {['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'GraphQL'].map((tech, index) => (
                      <span key={index} className="block bg-secondary/20 text-secondary text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">AI/ML</h4>
                  <div className="space-y-2">
                    {['TensorFlow', 'Python', 'NLP', 'Recommendation Engine', 'Analytics'].map((tech, index) => (
                      <span key={index} className="block bg-accent/20 text-accent text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Infrastructure</h4>
                  <div className="space-y-2">
                    {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'].map((tech, index) => (
                      <span key={index} className="block bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Measurable Impact */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white">Measurable Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="text-primary" size={20} />
                  <div className="text-4xl font-bold text-primary">40%</div>
                </div>
                <p className="text-white font-medium mb-2">Faster Job Posting</p>
                <p className="text-gray-400 text-sm">Streamlined posting process</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Smartphone className="text-secondary" size={20} />
                  <div className="text-4xl font-bold text-secondary">65%</div>
                </div>
                <p className="text-white font-medium mb-2">Mobile Usage Increase</p>
                <p className="text-gray-400 text-sm">Enhanced mobile experience</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="text-accent" size={20} />
                  <div className="text-4xl font-bold text-accent">85%</div>
                </div>
                <p className="text-white font-medium mb-2">User Satisfaction</p>
                <p className="text-gray-400 text-sm">Positive user feedback</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="text-primary" size={20} />
                  <div className="text-4xl font-bold text-primary">50%</div>
                </div>
                <p className="text-white font-medium mb-2">Support Ticket Reduction</p>
                <p className="text-gray-400 text-sm">Improved user experience</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="text-secondary" size={20} />
                  <div className="text-4xl font-bold text-secondary">30%</div>
                </div>
                <p className="text-white font-medium mb-2">Higher Engagement</p>
                <p className="text-gray-400 text-sm">Increased platform activity</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BarChart3 className="text-accent" size={20} />
                  <div className="text-4xl font-bold text-accent">95%</div>
                </div>
                <p className="text-white font-medium mb-2">Feature Adoption</p>
                <p className="text-gray-400 text-sm">Core features actively used</p>
              </div>
            </div>
            
            <Link 
              to="/#contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              Transform Your Platform
              <ArrowLeft className="rotate-180" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, Clock, TrendingUp, Shield } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "ARM Technologies transformed our deployment process completely. What used to take us 3 days now happens in under 2 hours with their automated CI/CD pipeline.",
      author: "Sarah Mitchell",
      position: "CTO",
      company: "FinanceFlow Ltd",
      rating: 5,
      impact: "80% faster deployments"
    },
    {
      quote: "The AI automation solution they built for our customer service has been game-changing. We've seen a 60% reduction in response times and our team can focus on complex issues.",
      author: "James Rodriguez",
      position: "Operations Director",
      company: "TechSupport Pro",
      rating: 5,
      impact: "60% faster response times"
    },
    {
      quote: "From concept to MVP in just 8 weeks. Their startup support service is exceptional - they understood our vision and delivered exactly what we needed to secure funding.",
      author: "Emma Thompson",
      position: "Founder",
      company: "GreenTech Innovations",
      rating: 5,
      impact: "MVP delivered in 8 weeks"
    }
  ];

  const useCases = [
    {
      icon: <Clock size={32} />,
      title: "How we automated CI/CD for a fintech client in 10 days",
      description: "Reduced deployment time from 3 days to 2 hours with zero-downtime deployments and automated testing.",
      metrics: ["80% faster deployments", "99.9% uptime achieved", "Zero failed deployments"],
      industry: "Financial Services"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "AI-powered customer insights increased sales by 45%",
      description: "Implemented intelligent analytics that identified customer patterns and automated personalized recommendations.",
      metrics: ["45% sales increase", "30% better conversion", "Real-time insights"],
      industry: "E-commerce"
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise security automation for healthcare provider",
      description: "Automated compliance monitoring and threat detection, ensuring GDPR compliance and data protection.",
      metrics: ["100% compliance", "24/7 monitoring", "Automated reporting"],
      industry: "Healthcare"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how our solutions have transformed 
            businesses across various industries.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/70 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="text-primary mb-4" size={24} />
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-md">
                      {testimonial.impact}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Featured <span className="text-gradient">Use Cases</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Detailed case studies showcasing our problem-solving approach and measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {useCase.icon}
              </div>
              
              <div className="mb-3">
                <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-md">
                  {useCase.industry}
                </span>
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-white leading-tight">
                {useCase.title}
              </h4>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              
              <div>
                <h5 className="text-white font-semibold mb-3">Key Results:</h5>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
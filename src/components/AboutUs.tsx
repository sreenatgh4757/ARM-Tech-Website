import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Lightbulb } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Target size={32} />,
      title: "Mission-Driven",
      description: "We're committed to transforming businesses through intelligent automation and cutting-edge technology solutions."
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      description: "Every solution is tailored to your unique needs, ensuring maximum impact and sustainable growth."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver tomorrow's solutions today."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">ARM Technologies Ltd</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded with a vision to bridge the gap between complex technology and business success, 
            ARM Technologies Ltd is your trusted partner in digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Based in the heart of the UK's technology sector, ARM Technologies Ltd was established 
                to address the growing need for intelligent automation and scalable technology solutions 
                in today's rapidly evolving business landscape.
              </p>
              <p>
                We specialize in delivering enterprise-grade AI integrations, robust DevOps infrastructure, 
                and comprehensive software development services. Our expertise extends to supporting startups 
                through their entire journey—from initial concept and MVP development to full-scale product delivery.
              </p>
              <p>
                What sets us apart is our unique combination of technical excellence and business acumen. 
                We don't just build technology; we craft solutions that drive measurable business outcomes 
                and sustainable growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8"
          >
            <h4 className="text-2xl font-bold mb-6 text-white">Why Choose ARM Technologies?</h4>
            <ul className="space-y-4">
              {[
                "UK-based with deep understanding of local business needs",
                "Proven track record in AI, DevOps, and full-stack development",
                "End-to-end support from concept to deployment",
                "Agile methodology ensuring rapid delivery and iteration",
                "Comprehensive startup support including BRD and MVP development"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-card/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-primary mb-4 flex justify-center">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">
                {value.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
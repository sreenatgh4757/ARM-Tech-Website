import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Zap, Shield } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: <Award size={32} />,
      title: "AI + DevOps Integration",
      description: "Our team combines deep expertise in artificial intelligence with proven DevOps practices to deliver seamless, intelligent automation solutions."
    },
    {
      icon: <Zap size={32} />,
      title: "Real-World Automation Experience",
      description: "We don't just build theoretical solutions. Our automation workflows are battle-tested in production environments across various industries."
    },
    {
      icon: <Shield size={32} />,
      title: "UK Contract Ready",
      description: "Fully compliant with UK regulations and ready to provide sponsorship support for international talent joining your projects."
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
            Why Choose <span className="text-gradient">ARM Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just another tech consultancy. We're your strategic partners in digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-primary mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
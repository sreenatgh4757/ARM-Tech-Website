import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, User } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: "How Agentic AI is Changing Enterprise Automation",
      excerpt: "Explore the revolutionary impact of autonomous AI agents on modern business processes and discover how they're reshaping enterprise automation strategies.",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      author: "Dr. Sarah Chen",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "AI Innovation"
    },
    {
      title: "Top 5 DevOps Practices for 2025",
      excerpt: "Stay ahead of the curve with the latest DevOps methodologies that are driving efficiency and reliability in software development lifecycles.",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      author: "Michael Rodriguez",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "DevOps"
    },
    {
      title: "Using AI to Simplify Complex Business Workflows",
      excerpt: "Learn practical strategies for implementing AI-driven workflow optimization that reduces complexity while increasing operational efficiency.",
      imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      author: "Emma Thompson",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "Automation"
    }
  ];

  return (
    <section className="py-20 bg-card/20">
      <div className="container-custom mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Insights in <span className="text-gradient">AI & DevOps</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest trends, best practices, and innovations 
            in artificial intelligence and DevOps automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-card/70 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                  <button className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large-scale React applications using TypeScript, including advanced patterns and performance optimization techniques.',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      tags: ['React', 'TypeScript', 'Architecture']
    },
    {
      id: 2,
      title: 'Microservices Architecture with Node.js and Docker',
      excerpt: 'A comprehensive guide to building and deploying microservices using Node.js, Docker containers, and orchestration with Kubernetes.',
      date: '2024-01-08',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=250&fit=crop',
      tags: ['Node.js', 'Docker', 'Microservices']
    },
    {
      id: 3,
      title: 'Modern CSS Techniques for Better User Interfaces',
      excerpt: 'Explore advanced CSS features including Grid, Flexbox, custom properties, and modern layout techniques for creating stunning user interfaces.',
      date: '2024-01-01',
      readTime: '6 min read',
      image: 'https://www.figma.com/community/resource/19b8fd1f-bf7e-4db9-afab-6baf03bd6e6c/thumbnail',
      tags: ['CSS', 'UI/UX', 'Frontend']
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, technology trends, and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200">
                  Read More
                  <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            View All Posts
          </button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Subscribe to my newsletter for the latest articles, tutorials, and insights about web development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
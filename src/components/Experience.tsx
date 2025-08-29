import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences: ExperienceType[] = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2023 - Present',
      description: 'Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable cloud solutions. Increased team productivity by 40% through implementation of modern development practices.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects, implemented CI/CD pipelines, and collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2021 - 2022',
      description: 'Built responsive web applications, optimized performance, and implemented modern UI/UX designs. Contributed to a 60% increase in user engagement through improved user interface.',
      technologies: ['React', 'JavaScript', 'SASS', 'Webpack', 'Jest']
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: 'CodeCraft Agency',
      period: '2020 - 2021',
      description: 'Started professional career developing websites and web applications. Gained experience in full-stack development and agile methodologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development, from junior developer to senior technical roles
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full z-10"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="text-sm text-emerald-600 font-medium">{exp.period}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-emerald-600 mb-3">{exp.company}</h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-blue-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
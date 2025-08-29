import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Skill } from '../types';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'AWS/Cloud', level: 82, category: 'DevOps' },
    { name: 'MongoDB', level: 87, category: 'Database' }
  ];

  const achievements = [
    { year: '2024', title: 'Senior Full Stack Developer', description: 'Leading development teams and architecting scalable solutions' },
    { year: '2023', title: 'AWS Certified', description: 'Achieved AWS Solutions Architect certification' },
    { year: '2022', title: 'Tech Lead', description: 'Promoted to technical leadership role' },
    { year: '2021', title: 'Full Stack Developer', description: 'Started professional development career' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Developer & Problem Solver</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with over 3 years of experience creating innovative digital solutions. 
              My passion lies in transforming complex problems into elegant, user-friendly applications that make a real impact.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe in continuous learning, clean code, and collaborative development. When I'm not coding, 
              you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>
            
            {/* Achievement Timeline */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Milestones</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {achievement.year}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{achievement.title}</h5>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Categories */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Frontend', 'Backend', 'DevOps', 'Database'].map((category) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-semibold text-gray-900">{category}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {skills.filter(s => s.category === category).length} skills
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
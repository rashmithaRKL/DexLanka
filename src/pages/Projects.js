import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Modern web application with cutting-edge features",
      image: "https://via.placeholder.com/400x300",
      category: "Web Development"
    },
    {
      title: "Project 2",
      description: "Mobile-first responsive design",
      image: "https://via.placeholder.com/400x300",
      category: "UI/UX Design"
    },
    {
      title: "Project 3",
      description: "E-commerce platform with advanced features",
      image: "https://via.placeholder.com/400x300",
      category: "E-commerce"
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-16 px-4 max-w-7xl mx-auto"
    >
      <motion.h2
        variants={fadeIn('up', 0.2)}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.3 + index * 0.1)}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-blue-600 font-semibold">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mt-2">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';
import { FiMonitor, FiSmartphone, FiLayout } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "DexChat Mobile App",
      description: "A real-time messaging application with voice and video call features",
      image: "https://via.placeholder.com/400x800",
      category: "mobile",
      screens: ["https://via.placeholder.com/400x800"]
    },
    {
      title: "DexHealth Mobile App",
      description: "Healthcare appointment booking and telemedicine platform",
      image: "https://via.placeholder.com/400x800",
      category: "mobile",
      screens: ["https://via.placeholder.com/400x800"]
    },
    {
      title: "DexFood Mobile App",
      description: "Food delivery application with real-time order tracking",
      image: "https://via.placeholder.com/400x800",
      category: "mobile",
      screens: ["https://via.placeholder.com/400x800"]
    },
    {
      title: "DexFitness Mobile App",
      description: "Fitness tracking and workout planning application",
      image: "https://via.placeholder.com/400x800",
      category: "mobile",
      screens: ["https://via.placeholder.com/400x800"]
    },
    {
      title: "DexCommerce Platform",
      description: "Full-featured e-commerce platform with responsive design",
      image: "https://via.placeholder.com/1200x800",
      category: "web",
      screens: [
        "https://via.placeholder.com/1200x800",
        "https://via.placeholder.com/400x800"
      ]
    },
    {
      title: "DexLearn LMS",
      description: "Learning management system with interactive features",
      image: "https://via.placeholder.com/1200x800",
      category: "web",
      screens: [
        "https://via.placeholder.com/1200x800",
        "https://via.placeholder.com/400x800"
      ]
    },
    {
      title: "DexBlog Platform",
      description: "Modern blogging platform with rich text editing",
      image: "https://via.placeholder.com/1200x800",
      category: "web",
      screens: [
        "https://via.placeholder.com/1200x800",
        "https://via.placeholder.com/400x800"
      ]
    },
    {
      title: "DexAnalytics Dashboard",
      description: "Real-time analytics and reporting dashboard",
      image: "https://via.placeholder.com/1200x800",
      category: "web",
      screens: [
        "https://via.placeholder.com/1200x800",
        "https://via.placeholder.com/400x800"
      ]
    },
    {
      title: "DexOffice Suite",
      description: "Comprehensive office productivity software",
      image: "https://via.placeholder.com/1200x800",
      category: "desktop",
      screens: ["https://via.placeholder.com/1200x800"]
    },
    {
      title: "DexVideo Editor",
      description: "Professional video editing software",
      image: "https://via.placeholder.com/1200x800",
      category: "desktop",
      screens: ["https://via.placeholder.com/1200x800"]
    },
    {
      title: "DexCode IDE",
      description: "Integrated development environment for developers",
      image: "https://via.placeholder.com/1200x800",
      category: "desktop",
      screens: ["https://via.placeholder.com/1200x800"]
    },
    {
      title: "DexBackup Pro",
      description: "Advanced backup and recovery software",
      image: "https://via.placeholder.com/1200x800",
      category: "desktop",
      screens: ["https://via.placeholder.com/1200x800"]
    },
    {
      title: "DexBank App Design",
      description: "Modern banking application UI/UX design",
      image: "https://via.placeholder.com/1200x800",
      category: "uiux",
      screens: ["https://via.placeholder.com/1200x800"]
    },
    {
      title: "DexTravel Platform Design",
      description: "Travel booking platform interface design",
      image: "https://via.placeholder.com/1200x800",
      category: "uiux",
      screens: ["https://via.placeholder.com/1200x800"]
    },
    {
      title: "DexMusic App Design",
      description: "Music streaming application interface design",
      image: "https://via.placeholder.com/1200x800",
      category: "uiux",
      screens: ["https://via.placeholder.com/1200x800"]
    },
    {
      title: "DexSocial Network Design",
      description: "Social media platform UI/UX design",
      image: "https://via.placeholder.com/1200x800",
      category: "uiux",
      screens: ["https://via.placeholder.com/1200x800"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'mobile', label: 'Mobile Apps', icon: <FiSmartphone /> },
    { id: 'web', label: 'Web Apps', icon: <FiMonitor /> },
    { id: 'desktop', label: 'Desktop Apps', icon: <FiMonitor /> },
    { id: 'uiux', label: 'UI/UX Design', icon: <FiLayout /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const DeviceFrame = ({ project }) => {
    switch (project.category) {
      case 'mobile':
        return (
          <div className="relative w-64 h-[500px] mx-auto">
            <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl"></div>
              <img 
                src={project.screens[0]} 
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        );
      case 'web':
        return (
          <div className="space-y-4">
            <div className="relative w-full h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gray-900 rounded-lg p-2 pt-6">
                <div className="absolute top-2 left-2 flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <img 
                  src={project.screens[0]} 
                  alt={`${project.title} desktop`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <div className="relative w-64 h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gray-900 rounded-[2rem] p-3">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-black rounded-b-xl"></div>
                <img 
                  src={project.screens[1]} 
                  alt={`${project.title} mobile`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        );
      case 'desktop':
        return (
          <div className="relative w-full h-[400px] mx-auto">
            <div className="absolute inset-0 bg-gray-900 rounded-lg p-2 pt-6">
              <div className="absolute top-2 left-2 flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <img 
                src={project.screens[0]} 
                alt={project.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        );
      case 'uiux':
        return (
          <div className="relative w-full h-[400px] mx-auto bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4">
            <img 
              src={project.screens[0]} 
              alt={project.title}
              className="w-full h-full object-cover rounded shadow-lg"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-16 px-4 max-w-7xl mx-auto"
    >
      <motion.div
        variants={fadeIn('up', 0.2)}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of mobile, web, and desktop applications, along with our UI/UX designs.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {filters.map((filterItem) => (
          <button
            key={filterItem.id}
            onClick={() => setFilter(filterItem.id)}
            className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
              filter === filterItem.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterItem.icon && <span className="mr-2">{filterItem.icon}</span>}
            {filterItem.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <DeviceFrame project={project} />
                <div className="mt-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;

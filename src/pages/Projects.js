import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileView from '../components/MobileView';
import WebView from '../components/WebView';
import DesktopView from '../components/DesktopView';
import placeholderImage from '../assets/images/projects/placeholder.svg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = {
    mobile: [
      {
        id: 1,
        title: "Fitness Tracker App",
        description: "A comprehensive fitness tracking application with workout plans and progress monitoring",
        image: placeholderImage
      },
      {
        id: 2,
        title: "Food Delivery App",
        description: "Real-time food ordering and delivery tracking application",
        image: placeholderImage
      },
      {
        id: 3,
        title: "Social Media App",
        description: "Connect with friends and share moments instantly",
        image: placeholderImage
      },
      {
        id: 4,
        title: "Task Management App",
        description: "Stay organized with this intuitive task management solution",
        image: placeholderImage
      }
    ],
    web: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-featured online shopping platform with cart and payment integration",
        desktopImage: placeholderImage,
        mobileImage: placeholderImage
      },
      {
        id: 2,
        title: "Learning Management System",
        description: "Educational platform for online courses and student management",
        desktopImage: placeholderImage,
        mobileImage: placeholderImage
      },
      {
        id: 3,
        title: "Real Estate Portal",
        description: "Property listing and management platform with virtual tours",
        desktopImage: placeholderImage,
        mobileImage: placeholderImage
      },
      {
        id: 4,
        title: "Business Analytics Dashboard",
        description: "Interactive data visualization and reporting platform",
        desktopImage: placeholderImage,
        mobileImage: placeholderImage
      }
    ],
    desktop: [
      {
        id: 1,
        title: "Video Editing Software",
        description: "Professional-grade video editing with advanced features",
        image: placeholderImage
      },
      {
        id: 2,
        title: "3D Modeling Application",
        description: "Create and manipulate 3D models with precision",
        image: placeholderImage
      },
      {
        id: 3,
        title: "Code IDE",
        description: "Feature-rich integrated development environment",
        image: placeholderImage
      },
      {
        id: 4,
        title: "Database Management Tool",
        description: "Comprehensive database administration and optimization tool",
        image: placeholderImage
      }
    ]
  };

  const filterButtons = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Applications' },
    { id: 'web', label: 'Web Applications' },
    { id: 'desktop', label: 'Desktop Applications' }
  ];

  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return {
        mobile: projectsData.mobile,
        web: projectsData.web,
        desktop: projectsData.desktop
      };
    }
    return {
      [activeFilter]: projectsData[activeFilter]
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of mobile, web, and desktop applications
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(button.id)}
              className={`
                px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300
                ${activeFilter === button.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-500/25'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-gray-200/50'}
              `}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-12"
          >
            {/* Mobile Projects */}
            {getFilteredProjects().mobile && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {getFilteredProjects().mobile.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    custom={index}
                  >
                    <MobileView {...project} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Web Projects */}
            {getFilteredProjects().web && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {getFilteredProjects().web.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    custom={index}
                  >
                    <WebView {...project} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Desktop Projects */}
            {getFilteredProjects().desktop && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {getFilteredProjects().desktop.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    custom={index}
                  >
                    <DesktopView {...project} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;

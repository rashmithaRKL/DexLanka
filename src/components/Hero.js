import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer, float, rotate3d } from '../utils/animations';

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={float}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          variants={float}
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={fadeIn('right', 0.2)} className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Transform Your 
              <span className="text-blue-600"> Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              We create innovative digital solutions that help businesses grow and succeed in the modern world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* 3D Illustration */}
          <motion.div
            variants={rotate3d(0.5)}
            className="relative"
          >
            <div className="relative w-full h-[500px] perspective-1000">
              <motion.div
                animate={{
                  rotateY: [0, 10, 0],
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                {/* Modern Abstract Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 shadow-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform -rotate-6 shadow-2xl" />
                    <div className="absolute inset-0 bg-white rounded-3xl transform hover:scale-105 transition-transform duration-300 shadow-xl">
                      <div className="p-8 h-full flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="w-12 h-2 bg-blue-500 rounded-full" />
                          <div className="w-20 h-2 bg-purple-500 rounded-full" />
                          <div className="w-16 h-2 bg-blue-400 rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-16 bg-gray-100 rounded-xl" />
                          <div className="h-16 bg-gray-100 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

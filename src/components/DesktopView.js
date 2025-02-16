import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DesktopView = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative max-w-3xl mx-auto perspective">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Monitor Assembly */}
        <motion.div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered ? "rotateY(-15deg) rotateX(5deg)" : "rotateY(0) rotateX(0)",
            transition: "transform 0.5s ease"
          }}
        >
          {/* Monitor Frame */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl transform-gpu transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            {/* Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl backdrop-blur-sm"></div>
            
            {/* Monitor Screen */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden shadow-inner">
              {/* Monitor Controls */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-100 to-gray-50 flex items-center px-4 space-x-2 border-b border-gray-200">
                <div className="flex space-x-1.5">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="flex-1 ml-4">
                  <div className="w-full max-w-sm h-5 bg-white rounded-full shadow-inner"></div>
                </div>
              </div>
              
              {/* Screen Content */}
              <motion.div 
                className="w-full h-[400px] pt-8"
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {image ? (
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transform-gpu transition-transform duration-500 hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                    <span className="text-gray-400">Desktop Preview</span>
                  </div>
                )}
              </motion.div>

              {/* Screen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 pointer-events-none"></div>
            </div>

            {/* Monitor Stand */}
            <div className="relative mt-2">
              <div className="mx-auto w-20 h-8 bg-gradient-to-b from-gray-800 to-gray-700 rounded-t-lg shadow-lg"></div>
              <div className="mx-auto w-48 h-4 bg-gradient-to-b from-gray-700 to-gray-600 rounded-b-lg shadow-xl"></div>
            </div>

            {/* Reflective Edge */}
            <div className="absolute inset-x-4 bottom-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent rounded-b-lg pointer-events-none"></div>
          </div>

          {/* 3D Edges */}
          <div 
            className="absolute inset-y-0 -right-2 w-2 bg-gradient-to-b from-gray-800 to-gray-900"
            style={{
              transformOrigin: "right",
              transform: "translateZ(-2px) rotateY(-90deg)",
            }}
          ></div>
          <div 
            className="absolute inset-x-0 -bottom-2 h-2 bg-gradient-to-b from-gray-800 to-gray-900"
            style={{
              transformOrigin: "bottom",
              transform: "translateZ(-2px) rotateX(-90deg)",
            }}
          ></div>
        </motion.div>

        {/* Keyboard */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            rotateX: isHovered ? -10 : 0
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 mx-auto"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative w-96 h-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl">
            {/* Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl backdrop-blur-sm"></div>
            
            {/* Keyboard Details */}
            <div className="absolute inset-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-3">
              {/* Key Rows */}
              <div className="space-y-2">
                <div className="flex justify-center space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-6 h-1.5 bg-gray-700 rounded-sm"></div>
                  ))}
                </div>
                <div className="flex justify-center space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-7 h-1.5 bg-gray-700 rounded-sm"></div>
                  ))}
                </div>
              </div>
              
              {/* Touchpad */}
              <div className="mt-4 mx-auto w-20 h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full"></div>
            </div>

            {/* Keyboard Reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 rounded-2xl pointer-events-none"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Info */}
      <motion.div 
        className="mt-8 text-center"
        animate={{
          y: isHovered ? 5 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 opacity-80">{description}</p>
      </motion.div>
    </div>
  );
};

export default DesktopView;

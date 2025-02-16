import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MobileView = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-64 mx-auto group perspective">
      {/* 3D Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(-10deg) rotateX(5deg)" : "rotateY(0) rotateX(0)",
          transition: "transform 0.5s ease"
        }}
        className="relative w-full"
      >
        {/* Mobile Frame */}
        <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[40px] p-3 shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          {/* Glass Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[40px] backdrop-blur-sm"></div>
          
          {/* Screen */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-[32px] overflow-hidden shadow-inner">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-gray-900 rounded-b-2xl flex items-center justify-center z-10">
              <div className="w-16 h-2 bg-gray-800 rounded-full"></div>
              {/* Camera */}
              <div className="absolute right-6 w-2 h-2 bg-gray-700 rounded-full"></div>
            </div>
            
            {/* Status Bar */}
            <div className="absolute top-0 w-full h-6 bg-gradient-to-r from-gray-900/5 to-gray-900/10 backdrop-blur-sm z-[1]"></div>
            
            {/* Content */}
            <motion.div 
              className="w-full h-full pt-8 px-2"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover rounded-lg shadow-lg transform-gpu transition-transform duration-500 group-hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Preview</span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Reflective Edge */}
          <div className="absolute inset-x-3 bottom-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent rounded-b-[32px] pointer-events-none"></div>
        </div>

        {/* Side Edge Effect */}
        <div 
          className="absolute inset-y-0 -right-1 w-2 bg-gray-800 transform-gpu transition-all duration-500"
          style={{
            transformOrigin: "right",
            transform: "translateZ(-1px) rotateY(-90deg)",
          }}
        ></div>

        {/* Bottom Edge Effect */}
        <div 
          className="absolute inset-x-0 -bottom-1 h-2 bg-gray-800 transform-gpu transition-all duration-500"
          style={{
            transformOrigin: "bottom",
            transform: "translateZ(-1px) rotateX(-90deg)",
          }}
        ></div>
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
        <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 opacity-80">{description}</p>
      </motion.div>
    </div>
  );
};

export default MobileView;

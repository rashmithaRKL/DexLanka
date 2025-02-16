import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WebView = ({ desktopImage, mobileImage, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative max-w-2xl mx-auto perspective">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Desktop Monitor */}
        <motion.div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered ? "rotateY(-12deg) rotateX(5deg)" : "rotateY(0) rotateX(0)",
            transition: "transform 0.5s ease"
          }}
        >
          {/* Monitor Frame */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 shadow-2xl transform-gpu transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            {/* Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl backdrop-blur-sm"></div>
            
            {/* Screen */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden shadow-inner">
              {/* Browser Controls */}
              <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 ml-4">
                  <div className="w-full max-w-sm h-5 bg-white rounded-full shadow-inner"></div>
                </div>
              </div>

              {/* Monitor Content */}
              <motion.div 
                className="relative w-full h-[300px]"
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {desktopImage ? (
                  <img 
                    src={desktopImage} 
                    alt={`${title} desktop view`} 
                    className="w-full h-full object-cover transform-gpu transition-transform duration-500 hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                    <span className="text-gray-400">Desktop Preview</span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Monitor Stand */}
            <div className="relative mt-2">
              <div className="mx-auto w-20 h-6 bg-gradient-to-b from-gray-800 to-gray-700 rounded-t-lg"></div>
              <div className="mx-auto w-48 h-3 bg-gradient-to-b from-gray-700 to-gray-600 rounded-b-lg shadow-lg"></div>
            </div>

            {/* Reflective Edge */}
            <div className="absolute inset-x-4 bottom-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent rounded-b-lg pointer-events-none"></div>
          </div>

          {/* 3D Edges */}
          <div 
            className="absolute inset-y-0 -right-2 w-2 bg-gray-800"
            style={{
              transformOrigin: "right",
              transform: "translateZ(-2px) rotateY(-90deg)",
            }}
          ></div>
          <div 
            className="absolute inset-x-0 -bottom-2 h-2 bg-gray-800"
            style={{
              transformOrigin: "bottom",
              transform: "translateZ(-2px) rotateX(-90deg)",
            }}
          ></div>
        </motion.div>

        {/* Mobile View */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            rotateY: isHovered ? -25 : -15,
            rotateX: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -right-10 bottom-0 w-48 transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[24px] p-2 shadow-xl">
            <div className="relative bg-white rounded-[20px] overflow-hidden">
              {/* Mobile Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-xl z-10"></div>
              
              {/* Mobile Content */}
              <motion.div 
                className="relative w-full h-[200px]"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {mobileImage ? (
                  <img 
                    src={mobileImage} 
                    alt={`${title} mobile view`} 
                    className="w-full h-full object-cover transform-gpu transition-transform duration-500 hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Mobile Preview</span>
                  </div>
                )}
              </motion.div>
            </div>
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

export default WebView;

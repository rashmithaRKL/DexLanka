import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, float, tiltHover, perspective3d } from '../utils/animations';
import { FiMonitor, FiSmartphone, FiLayout, FiTrendingUp, FiServer, FiShield } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiMonitor size={32} className="text-current" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      color: "blue"
    },
    {
      icon: <FiSmartphone size={32} className="text-current" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      color: "purple"
    },
    {
      icon: <FiLayout size={32} className="text-current" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement.",
      color: "pink"
    },
    {
      icon: <FiTrendingUp size={32} className="text-current" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to grow your online presence.",
      color: "green"
    },
    {
      icon: <FiServer size={32} className="text-current" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      color: "indigo"
    },
    {
      icon: <FiShield size={32} className="text-current" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      color: "red"
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={float}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
        <motion.div
          variants={float}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={fadeIn('up', 0.2)}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={perspective3d(0.2 + index * 0.1)}
              className="relative group perspective-1000"
              whileHover="hover"
              initial="rest"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform opacity-0 group-hover:opacity-10"
                variants={tiltHover}
              />
              <motion.div 
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 preserve-3d"
                variants={tiltHover}
              >
                <div className="relative w-16 h-16 mb-6">
                  <div 
                    className="absolute inset-0 rounded-lg"
                    style={{
                      backgroundColor: service.color === 'blue' ? '#EBF5FF' :
                                     service.color === 'purple' ? '#F3E8FF' :
                                     service.color === 'pink' ? '#FCE7F3' :
                                     service.color === 'green' ? '#DCFCE7' :
                                     service.color === 'indigo' ? '#E0E7FF' :
                                     '#FEE2E2'
                    }}
                  />
                  <div 
                    className="relative w-full h-full flex items-center justify-center"
                    style={{
                      color: service.color === 'blue' ? '#2563EB' :
                             service.color === 'purple' ? '#9333EA' :
                             service.color === 'pink' ? '#DB2777' :
                             service.color === 'green' ? '#16A34A' :
                             service.color === 'indigo' ? '#4F46E5' :
                             '#DC2626'
                    }}
                  >
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.div
                  className="mt-6 transform-style-3d"
                  whileHover={{ scale: 1.05, z: 20 }}
                  whileTap={{ scale: 0.95, z: -10 }}
                >
                  <button 
                    className="font-semibold flex items-center group"
                    style={{
                      color: service.color === 'blue' ? '#2563EB' :
                             service.color === 'purple' ? '#9333EA' :
                             service.color === 'pink' ? '#DB2777' :
                             service.color === 'green' ? '#16A34A' :
                             service.color === 'indigo' ? '#4F46E5' :
                             '#DC2626'
                    }}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;

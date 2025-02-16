import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn, float } from '../utils/animations';
import { FiMonitor, FiSmartphone, FiLayout, FiTrendingUp, FiServer, FiShield } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      color: "blue"
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      color: "purple"
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement.",
      color: "pink"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to grow your online presence.",
      color: "green"
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      color: "indigo"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
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
              variants={zoomIn(0.2 + index * 0.1, 0.6)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300 opacity-0 group-hover:opacity-10" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-6 text-${service.color}-600 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <button className={`text-${service.color}-600 font-semibold flex items-center group`}>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;

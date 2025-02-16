import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, rotate3d, float } from '../utils/animations';
import { FiUsers, FiAward, FiCode, FiSmile } from 'react-icons/fi';

const About = () => {
  const stats = [
    { label: 'Happy Clients', value: '200+', icon: <FiSmile /> },
    { label: 'Projects Completed', value: '500+', icon: <FiCode /> },
    { label: 'Team Members', value: '50+', icon: <FiUsers /> },
    { label: 'Awards Won', value: '25+', icon: <FiAward /> }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions.',
    },
    {
      title: 'Quality',
      description: 'We deliver excellence in every project we undertake.',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to achieve the best results.',
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-20 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={float}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
        <motion.div
          variants={float}
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={fadeIn('right', 0.2)} className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">About DexLanka</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a team of passionate developers, designers, and digital innovators dedicated to transforming businesses through technology. With years of experience and a commitment to excellence, we deliver cutting-edge solutions that drive success.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to empower businesses with innovative digital solutions that drive growth and success in the modern world. We combine creativity, technology, and strategy to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            variants={rotate3d(0.3)}
            className="relative"
          >
            <div className="relative w-full h-[400px] perspective-1000">
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
                className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-8 text-white"
              >
                <div className="absolute inset-2 bg-white/10 rounded-xl backdrop-blur-sm p-6">
                  <div className="space-y-4">
                    <div className="w-20 h-2 bg-white/20 rounded-full" />
                    <div className="w-32 h-2 bg-white/20 rounded-full" />
                    <div className="w-16 h-2 bg-white/20 rounded-full" />
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="h-20 bg-white/10 rounded-lg" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div variants={fadeIn('up', 0.4)} className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

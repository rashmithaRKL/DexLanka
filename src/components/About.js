import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, rotate3d, perspective3d, tiltHover, floatRotate, cardFlip3D, counterAnimation } from '../utils/animations';
import { FiUsers, FiAward, FiCode, FiSmile } from 'react-icons/fi';

const CounterComponent = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef);
  const valueNum = parseInt(value);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(valueNum);
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, valueNum, duration]);

  return (
    <motion.span
      ref={countRef}
      variants={counterAnimation}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    >
      {count}+
    </motion.span>
  );
};

const About = () => {
  const stats = [
    { label: 'Happy Clients', value: '200', icon: <FiSmile /> },
    { label: 'Projects Completed', value: '500', icon: <FiCode /> },
    { label: 'Team Members', value: '50', icon: <FiUsers /> },
    { label: 'Awards Won', value: '25', icon: <FiAward /> }
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
          variants={floatRotate}
          animate="show"
          className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform-gpu"
        />
        <motion.div
          variants={floatRotate}
          animate="show"
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform-gpu"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            variants={perspective3d(0.2)} 
            className="space-y-6 perspective-1000"
          >
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
            className="relative perspective-1000"
            whileHover="hover"
            initial="rest"
          >
            <motion.div
              className="relative w-full h-[400px]"
              variants={tiltHover}
            >
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
                className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-8 text-white transform-style-3d"
              >
                <motion.div 
                  className="absolute inset-2 bg-white/10 rounded-xl backdrop-blur-sm p-6"
                  variants={floatRotate}
                >
                  <div className="space-y-4">
                    <div className="w-20 h-2 bg-white/20 rounded-full" />
                    <div className="w-32 h-2 bg-white/20 rounded-full" />
                    <div className="w-16 h-2 bg-white/20 rounded-full" />
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <motion.div 
                        key={item} 
                        className="h-20 bg-white/10 rounded-lg"
                        whileHover={{ scale: 1.05, translateZ: 20 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={perspective3d(0.3)}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 perspective-1000"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg transform-style-3d"
              whileHover="hover"
              initial="rest"
              variants={tiltHover}
            >
              <motion.div 
                className="text-blue-600 mb-6 flex justify-center items-center h-16 relative"
                variants={floatRotate}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl bg-blue-50 p-4 rounded-xl">
                  {React.cloneElement(stat.icon, { 
                    size: 40, 
                    className: "text-blue-600" 
                  })}
                </div>
              </motion.div>
              <CounterComponent value={stat.value} />
              <motion.div 
                className="text-gray-600 mt-3 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div 
          variants={perspective3d(0.4)} 
          className="text-center mb-12 perspective-1000"
        >
          <h3 className="text-3xl font-bold mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg transform-style-3d"
                whileHover="hover"
                initial="rest"
                variants={cardFlip3D}
              >
                <motion.div className="backface-hidden">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

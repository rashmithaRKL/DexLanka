import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-20 bg-gray-50 relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={fadeIn('down', 0.2)}
          className="text-center mb-16"
        >
          <motion.h2
            variants={zoomIn(0.2, 1)}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get in touch with us to discuss how we can help transform your business
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form className="space-y-6">
              <motion.div
                variants={fadeIn('up', 0.4)}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.5)}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.6)}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                ></motion.textarea>
              </motion.div>
              <motion.button
                variants={fadeIn('up', 0.7)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            className="bg-blue-600 rounded-lg shadow-lg p-8 text-white relative overflow-hidden"
          >
            <motion.h3
              variants={fadeIn('down', 0.4)}
              className="text-2xl font-bold mb-6 relative z-10"
            >
              Get in Touch
            </motion.h3>
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              className="space-y-6 relative z-10"
            >
              <motion.div
                variants={fadeIn('left', 0.5)}
                className="flex items-start space-x-4"
              >
                <motion.svg
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-6 h-6 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </motion.svg>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-blue-100">123 Business Avenue<br />Colombo, Sri Lanka</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn('left', 0.6)}
                className="flex items-start space-x-4"
              >
                <motion.svg
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-6 h-6 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-blue-100">info@dexlanka.com</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn('left', 0.7)}
                className="flex items-start space-x-4"
              >
                <motion.svg
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-6 h-6 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </motion.svg>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-blue-100">+94 123 456 789</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.8)}
              className="mt-8 relative z-10"
            >
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <motion.div
                variants={staggerContainer(0.1, 0.2)}
                className="flex space-x-4"
              >
                {[
                  { href: "https://facebook.com/dexlanka", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { href: "https://twitter.com/dexlanka", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                  { href: "https://linkedin.com/company/dexlanka", icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.158c0-.674-.616-1.842-2-1.842s-2 1.168-2 1.842V16h-2v-6h2v1.183c.391-.443 1.364-1.183 2.5-1.183 2.781 0 3.5 1.688 3.5 3.875V16z" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    variants={fadeIn('up', 0.3 + index * 0.1)}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-32 h-32 bg-white/10 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    x: [0, Math.random() * 50 - 25],
                    y: [0, Math.random() * 50 - 25],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

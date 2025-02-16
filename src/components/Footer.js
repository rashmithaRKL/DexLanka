import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services" },
        { name: "Mobile Apps", path: "/services" },
        { name: "UI/UX Design", path: "/services" },
        { name: "Consulting", path: "/services" },
        { name: "Digital Marketing", path: "/services" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: "#" },
    { icon: <FiTwitter />, url: "#" },
    { icon: <FiInstagram />, url: "#" },
    { icon: <FiLinkedin />, url: "#" }
  ];

  const contactInfo = [
    { icon: <FiPhone />, text: "+1 (555) 123-4567" },
    { icon: <FiMail />, text: "contact@example.com" },
    { icon: <FiMapPin />, text: "123 Business Street, City, Country" }
  ];

  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-300 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={fadeIn('right', 0.2)} className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">DexLanka</h3>
            <p className="text-gray-400">
              Transforming ideas into digital reality with innovative solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={fadeIn('left', 0.2)} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-400">
                  <span className="text-blue-500">{info.icon}</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} DexLanka. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

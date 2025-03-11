import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+94 78 5488 789",
      link: "tel:+94 78 5488 789"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      content: "dexlanka@gmail.com",
      link: "dexlanka@gmail.com"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      content: "Homagama, Colombo, Sri Lanka",
      link: "#map"
    }
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-16 px-4 max-w-7xl mx-auto"
    >
      <motion.div
        variants={fadeIn('up', 0.2)}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for any inquiries or support. We're here to help you succeed.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={fadeIn('up', 0.4 + index * 0.1)}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600 text-center">{info.content}</p>
              </motion.a>
            ))}
          </div>

          <motion.form
            variants={fadeIn('up', 0.5)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>

        <motion.div
          variants={zoomIn(0.3, 1)}
          className="relative h-[600px] rounded-xl overflow-hidden shadow-xl"
          id="map"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAyNmMtNC40MTEgMC04LTMuNTg5LTgtOHMzLjU4OS04IDgtOCA4IDMuNTg5IDggOC0zLjU4OSA4LTggOHoiIGZpbGw9IiMxZDRlZDgiIG9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
                <p className="text-gray-600 mt-2">123 Business Street</p>
                <p className="text-gray-600">City, Country</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;

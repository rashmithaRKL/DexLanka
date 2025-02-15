import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to DexLanka
            </h1>
            <p className="text-xl mb-8">
              Your trusted software partner in delivering innovative solutions that drive business success.
            </p>
            <Link
              to="/contact"
              className="bg-red hover:bg-red-600 text-white px-8 py-3 rounded-lg inline-block transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-navy-blue text-white rounded-lg p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Delivering Excellence
              </h3>
              <p className="text-gray-300">
                Cutting-edge solutions tailored to your business needs with the highest quality standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-red text-white rounded-lg p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Expert Team
              </h3>
              <p className="text-gray-100">
                Skilled professionals committed to delivering innovative solutions and exceptional service.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-navy-blue text-white rounded-lg p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-300">
                Round-the-clock assistance to ensure your business runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-blue mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-navy-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-red hover:text-red-600 font-medium inline-flex items-center transition duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies.",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions.",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure.",
  },
  {
    title: "Consulting",
    description: "Expert guidance for your digital transformation.",
  },
];

export default Home;

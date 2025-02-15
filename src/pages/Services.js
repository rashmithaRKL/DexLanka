import React from 'react';

function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            We offer comprehensive software solutions tailored to your needs, helping businesses transform and thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Web Development */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-navy-blue p-6">
              <h2 className="text-2xl font-bold text-white">Web Development</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Custom Web Applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Progressive Web Apps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Content Management Systems</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                We create scalable and responsive web applications using cutting-edge technologies and best practices.
              </p>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-navy-blue p-6">
              <h2 className="text-2xl font-bold text-white">Mobile Development</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>iOS Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Android Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Cross-platform Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Mobile App Maintenance</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                We develop high-performance mobile applications that provide seamless user experiences across all platforms.
              </p>
            </div>
          </div>

          {/* Cloud Solutions */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-navy-blue p-6">
              <h2 className="text-2xl font-bold text-white">Cloud Solutions</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Cloud Migration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Cloud Infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>DevOps Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>24/7 Monitoring</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                We provide secure and scalable cloud solutions to help your business operate efficiently in the digital space.
              </p>
            </div>
          </div>

          {/* Consulting */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-navy-blue p-6">
              <h2 className="text-2xl font-bold text-white">Consulting</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Digital Strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Technology Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Process Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red mr-2">✓</span>
                  <span>Security Consulting</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                Our expert consultants help you make informed decisions about your technology investments and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your digital goals.
          </p>
          <button className="bg-white text-red hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;

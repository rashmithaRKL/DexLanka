import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with us. We'd love to hear from you and discuss how we can help with your project.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-navy-blue mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-navy-blue"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-red hover:bg-red-600 text-white px-8 py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-navy-blue text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>123 Business Avenue</p>
                    <p>Colombo 03</p>
                    <p>Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+94 11 234 5678</p>
                    <p>+94 77 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@dexlanka.com</p>
                    <p>support@dexlanka.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
              <iframe
                title="DexLanka Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385539傻!2d79.8473!3d6.9101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1625764789012!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-blue mb-8 text-center">Business Hours</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">Monday - Friday</div>
              <div className="text-navy-blue font-semibold">9:00 AM - 6:00 PM</div>
              <div className="text-gray-600">Saturday</div>
              <div className="text-navy-blue font-semibold">9:00 AM - 1:00 PM</div>
              <div className="text-gray-600">Sunday</div>
              <div className="text-navy-blue font-semibold">Closed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

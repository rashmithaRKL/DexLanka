import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About DexLanka</h1>
          <p className="text-xl max-w-3xl">
            We are a leading software development company committed to delivering innovative solutions that drive business success.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, DexLanka has grown from a small team of passionate developers to a full-service software development company serving clients worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey is marked by continuous innovation, dedication to quality, and a commitment to helping businesses thrive in the digital age.
            </p>
            <p className="text-gray-600">
              Today, we pride ourselves on delivering cutting-edge solutions that combine technical excellence with practical business value.
            </p>
          </div>
          <div className="bg-navy-blue rounded-lg p-8 text-white">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-blue mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-red text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy-blue mb-12 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-navy-blue h-48 flex items-center justify-center">
                <span className="text-white text-6xl">👤</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-blue mb-1">{member.name}</h3>
                <p className="text-red mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <button className="bg-white text-red hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
            View Careers
          </button>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client service.'
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and transparency in all our dealings.'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We constantly explore new technologies and approaches to solve complex challenges.'
  }
];

const team = [
  {
    name: 'David Chen',
    position: 'Chief Executive Officer',
    description: 'With 15+ years of experience in technology leadership, David drives our strategic vision and growth.'
  },
  {
    name: 'Sarah Williams',
    position: 'Chief Technology Officer',
    description: 'Sarah leads our technical initiatives and ensures we stay at the forefront of technology.'
  },
  {
    name: 'Michael Kumar',
    position: 'Head of Operations',
    description: 'Michael ensures smooth delivery of projects and maintains our high quality standards.'
  }
];

export default AboutUs;

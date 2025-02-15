import React from 'react';

function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of successful projects that demonstrate our expertise in delivering innovative solutions.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="bg-navy-blue h-48 flex items-center justify-center">
                <span className="text-white text-6xl">{project.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-blue mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-red bg-opacity-10 text-red px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Success Stories */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-blue mb-12 text-center">
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    icon: '🌐',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    icon: '📱',
    title: 'Healthcare App',
    description: 'Mobile application for healthcare providers to manage patient records and appointments efficiently.',
    technologies: ['React Native', 'Firebase', 'Express']
  },
  {
    icon: '☁️',
    title: 'Cloud Migration',
    description: 'Successful migration of legacy systems to cloud infrastructure for improved scalability.',
    technologies: ['AWS', 'Docker', 'Kubernetes']
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard for monitoring business metrics and performance indicators.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL']
  },
  {
    icon: '🤖',
    title: 'AI Chatbot',
    description: 'Intelligent customer service chatbot with natural language processing capabilities.',
    technologies: ['Python', 'TensorFlow', 'NLP']
  },
  {
    icon: '🔒',
    title: 'Security System',
    description: 'Enterprise-level security system with biometric authentication and access control.',
    technologies: ['Java', 'Spring Boot', 'OAuth2']
  }
];

const testimonials = [
  {
    initial: 'J',
    name: 'John Smith',
    position: 'CTO, Tech Innovations',
    quote: 'DexLanka delivered our project on time and exceeded our expectations. Their team\'s expertise and professionalism were outstanding.'
  },
  {
    initial: 'S',
    name: 'Sarah Johnson',
    position: 'CEO, Digital Solutions',
    quote: 'Working with DexLanka was a game-changer for our business. They helped us modernize our systems and improve efficiency.'
  },
  {
    initial: 'M',
    name: 'Michael Chen',
    position: 'Director, Global Systems',
    quote: 'The team at DexLanka showed exceptional technical knowledge and commitment to quality throughout our project.'
  }
];

export default Projects;

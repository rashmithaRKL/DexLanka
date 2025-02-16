import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Business with Digital Solutions
            </h1>
            <p className="text-xl text-blue-100">
              We help businesses embrace digital transformation with cutting-edge technology solutions and expert consulting.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl">
                {/* Placeholder for hero image or animation */}
                <div className="flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

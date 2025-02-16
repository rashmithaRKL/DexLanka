import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "29",
      features: [
        "Basic website development",
        "1 page design",
        "Mobile responsive",
        "2 revisions",
        "5 days delivery"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Standard",
      price: "49",
      features: [
        "Advanced website development",
        "3 page design",
        "Mobile responsive",
        "5 revisions",
        "7 days delivery",
        "SEO optimization"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Premium",
      price: "99",
      features: [
        "Professional website development",
        "5 page design",
        "Mobile responsive",
        "Unlimited revisions",
        "10 days delivery",
        "SEO optimization",
        "Social media integration"
      ],
      popular: false,
      color: "indigo"
    },
    {
      name: "Enterprise",
      price: "199",
      features: [
        "Full-stack development",
        "10 page design",
        "Custom features",
        "Priority support",
        "15 days delivery",
        "Advanced SEO",
        "Analytics dashboard"
      ],
      popular: false,
      color: "pink"
    },
    {
      name: "E-commerce",
      price: "299",
      features: [
        "E-commerce website",
        "Product management",
        "Payment integration",
        "Inventory system",
        "20 days delivery",
        "Marketing tools",
        "24/7 support"
      ],
      popular: false,
      color: "green"
    },
    {
      name: "Custom",
      price: "Custom",
      features: [
        "Custom development",
        "Unlimited pages",
        "Custom features",
        "Dedicated support",
        "Custom timeline",
        "Enterprise solutions",
        "Training included"
      ],
      popular: false,
      color: "red"
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
        <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include our core features with different levels of support and customization.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.3 + index * 0.1)}
            className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
              plan.popular ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                Popular
              </div>
            )}
            <div className={`p-8 bg-${plan.color}-50`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-500 ml-1">/project</span>
                )}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FiCheck className={`text-${plan.color}-500 mr-2`} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full bg-${plan.color}-500 text-white py-3 px-6 rounded-lg hover:bg-${plan.color}-600 transition-colors`}>
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Pricing;

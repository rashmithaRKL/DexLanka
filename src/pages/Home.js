import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/animations';

const Home = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <Hero />
      <Services />
    </motion.div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion'; // For animations

// Placeholder background image (replace with actual path)
import heroImage from '../../images/about_hero.jpg'; // e.g., youth working in a field

const HeroSection = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div
      className="w-full h-[40vh] flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-green-800/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold text-white font-Poppins mb-4"
        >
          About YARDO-SL
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-100"
        >
          Empowering Sierra Leone’s Youth Since 2014
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;

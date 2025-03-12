import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom';

// Background image (replace with actual path)
import youthRallyImg from '../images/youth-rally.jpg';

const CallToAction = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${youthRallyImg})` }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-green-700/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[80rem] w-full px-4">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white font-Poppins mb-4"
        >
          Be the Change
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-100 mb-8"
        >
          Join over 300 youth making a difference today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            to="/youth-opportunities"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Volunteer Now
          </Link>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-md hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Donate Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;

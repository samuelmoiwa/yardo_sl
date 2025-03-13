import React from 'react';
import { motion, Variants } from 'framer-motion'; // Import Variants type
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faStar } from '@fortawesome/free-solid-svg-icons';

const MissionVision: React.FC = () => {
  // Define Variants with TypeScript compatibility
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 }, // Static initial value; we'll adjust dynamically with custom
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: custom * 0.3 },
    }),
    hover: (custom: number) => ({
      rotate: custom === 0 ? 2 : -2, // Use custom prop to determine direction
      scale: 1.05,
      transition: { duration: 0.3 },
    }),
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.5 } },
    pulse: { scale: [1, 1.1, 1], transition: { duration: 1.5, repeat: Infinity } },
  };

  return (
    <div className="w-full py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-900 dark:to-green-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[80rem] w-full mx-auto px-4">
        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-200 font-Poppins text-center mb-16 relative"
        >
          Our Purpose
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
        </motion.h2>

        {/* Mission and Vision Blocks */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0">
          {/* Mission */}
          <motion.div
            custom={0} // Pass index as custom prop
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-500/90 to-blue-700/70 dark:from-blue-700 dark:to-blue-900 backdrop-blur-md rounded-xl p-8 w-full md:w-2/3 shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover="pulse"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full p-4 shadow-lg"
            >
              <FontAwesomeIcon icon={faHandshake} className="text-3xl text-white" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-white mt-12 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-gray-100 leading-relaxed text-center">
              We empower young people to overcome poverty by creating platforms for collaboration, capacity building, and sustainable solutions in agriculture, environmental protection, governance, and public health.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            custom={1} // Pass index as custom prop
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-green-500/90 to-green-700/70 dark:from-green-700 dark:to-green-900 backdrop-blur-md rounded-xl p-8 w-full md:w-2/3 shadow-xl hover:shadow-2xl transition-all duration-300 md:-ml-24 z-0"
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover="pulse"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 rounded-full p-4 shadow-lg"
            >
              <FontAwesomeIcon icon={faStar} className="text-3xl text-white" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-white mt-12 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-gray-100 leading-relaxed text-center">
              A just and inclusive Sierra Leone—free from poverty, hunger, environmental degradation, and inequality.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;

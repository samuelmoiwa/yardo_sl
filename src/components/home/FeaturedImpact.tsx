import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTractor, faTree, faHeart } from '@fortawesome/free-solid-svg-icons'; // Icons for each item

const FeaturedImpact = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-16 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-[80rem] w-full px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-400 font-Poppins">
            Our Impact in Action
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            See the difference we’re making across Sierra Leone.
          </p>
        </motion.div>

        {/* Impact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {/* Card 1: Farmers Trained */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4">
              <FontAwesomeIcon icon={faTractor} className="text-3xl text-white" />
            </div>
            <motion.h3
              variants={numberVariants}
              className="text-5xl font-bold text-green-600 dark:text-green-400 mt-12"
            >
              500+
            </motion.h3>
            <p className="text-xl font-semibold text-blue-900 dark:text-blue-300 mt-2">
              Farmers Trained
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Youth-led agriculture programs boosting livelihoods.
            </p>
          </motion.div>

          {/* Card 2: Communities Greener */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4">
              <FontAwesomeIcon icon={faTree} className="text-3xl text-white" />
            </div>
            <motion.h3
              variants={numberVariants}
              className="text-5xl font-bold text-green-600 dark:text-green-400 mt-12"
            >
              10
            </motion.h3>
            <p className="text-xl font-semibold text-blue-900 dark:text-blue-300 mt-2">
              Communities Greener
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Environmental projects restoring local ecosystems.
            </p>
          </motion.div>

          {/* Card 3: Lives Touched */}
          <motion.div
            variants={cardVariants}
            className="relative bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4">
              <FontAwesomeIcon icon={faHeart} className="text-3xl text-white" />
            </div>
            <motion.h3
              variants={numberVariants}
              className="text-5xl font-bold text-green-600 dark:text-green-400 mt-12"
            >
              1,000+
            </motion.h3>
            <p className="text-xl font-semibold text-blue-900 dark:text-blue-300 mt-2">
              Lives Touched
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Health initiatives improving community wellness.
            </p>
          </motion.div>
        </motion.div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/success-stories"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImpact;

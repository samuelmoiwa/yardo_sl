import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom';

const LatestNews = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-white dark:bg-gray-800">
      <div className="max-w-[80rem] w-full px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300 font-Poppins">
            What’s Happening Now
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Stay updated with YARDO-SL’s latest efforts.
          </p>
        </motion.div>

        {/* News Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {/* News Item 1 */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-5 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm font-semibold px-3 py-1 rounded-br-lg">
              March 15, 2025
            </div>
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mt-8 mb-2">
              Youth Climate Workshop
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join us in Freetown!
            </p>
          </motion.div>

          {/* News Item 2 */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-5 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm font-semibold px-3 py-1 rounded-br-lg">
              April 1 Deadline
            </div>
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mt-8 mb-2">
              New Volunteer Cohort Starts
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Applications open until April 1.
            </p>
          </motion.div>

          {/* News Item 3 */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-5 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm font-semibold px-3 py-1 rounded-br-lg">
              New
            </div>
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mt-8 mb-2">
              Partnership Spotlight: Bosch Alumni
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Expanding our reach.
            </p>
          </motion.div>
        </motion.div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            to="/public-notices"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Notices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faMap, faHeart } from '@fortawesome/free-solid-svg-icons'; // Icons for stats

const stats = [
  { icon: faCalendar, label: 'Founded', value: '2014' },
  { icon: faUsers, label: 'Volunteers', value: '300+' },
  { icon: faMap, label: 'Regions', value: 'All of Sierra Leone' },
  { icon: faHeart, label: 'Lives Impacted', value: 'Thousands' },
];

const QuickStats = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-[80rem] w-full px-4">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-900 dark:text-blue-300 font-Poppins text-center mb-10"
        >
          YARDO-SL by the Numbers
        </motion.h1>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-3 mb-4">
                <FontAwesomeIcon icon={stat.icon} className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default QuickStats;

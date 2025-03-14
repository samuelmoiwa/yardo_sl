import React from 'react';
import { motion } from 'framer-motion'; // For animations

const stats = [
  { number: '300+', label: 'Volunteers', color: 'blue' },
  { number: '1000s', label: 'Lives Impacted', color: 'green' },
  { number: 'All', label: 'Regions of Sierra Leone', color: 'purple' },
];

const ImpactStats: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { y: -2, transition: { duration: 0.3 } }, // Subtle lift
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-[80rem] w-full mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 text-center mb-12"
        >
          Our Reach
        </motion.h2>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover="hover"
              className="flex flex-col items-center text-center px-4 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 w-full md:w-auto"
            >
              {/* Number */}
              <span
                className={`text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100`}
              >
                {stat.number}
              </span>

              {/* Label */}
              <span className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-2">
                {stat.label}
              </span>

              {/* Divider (except for last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-gray-300 dark:bg-gray-600 mx-4 self-center"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImpactStats;

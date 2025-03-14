import React from 'react';
import { motion } from 'framer-motion'; // For animations

const NoticesHeader: React.FC = () => {
  // Animation Variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: '80px', transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="w-full h-[200px] md:h-[300px] bg-blue-900 dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/70 to-blue-500 dark:from-gray-800/50 dark:to-gray-900"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Heading */}
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 font-Poppins"
        >
          Public Notices
          {/* Animated Underline */}
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
            className="w-20 h-1 bg-blue-900 dark:bg-blue-300 rounded-full mx-auto mt-2"
          ></motion.div>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-white dark:text-gray-400 mt-2 font-Poppins"
        >
          Stay Informed with YARDO-SL
        </motion.h2>
      </div>
    </div>
  );
};

export default NoticesHeader;

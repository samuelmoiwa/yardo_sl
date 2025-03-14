import React from 'react';
import { motion } from 'framer-motion'; // For animations

const OpportunitiesHeader: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: '120px', transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { scale: 1 },
    visible: { scale: 1.05, transition: { duration: 5, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' as const } },
  };

  return (
    <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-600 dark:to-teal-800">
      {/* Background Image */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`, // Example youth volunteering image
          opacity: 0.7, // Subtle overlay effect
        }}
      >
        <div className="absolute inset-0 bg-gray-900/30 dark:bg-gray-900/40"></div> {/* Overlay */}
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={headingVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-100 dark:text-teal-200 tracking-wide"
        >
          Youth Opportunities
          {/* Animated Underline */}
          <motion.div
            variants={underlineVariants}
            className="w-32 h-1 bg-teal-100 dark:bg-teal-200 rounded-full mx-auto mt-2"
          />
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={subheadingVariants}
          className="text-lg md:text-xl text-gray-100 dark:text-gray-200 mt-4 max-w-2xl"
        >
          Your Chance to Make a Difference
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OpportunitiesHeader;

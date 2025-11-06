import React from 'react';
import { motion } from 'framer-motion';
import i1 from '../../images/i1.jpg'; // Ensure this path is correct relative to the component file

const ContactUsHeader: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
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
    <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800">
      {/* Background Image */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${i1})`, // Correctly reference the imported image
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-blue-100 tracking-wide"
        >
          Get in Touch
          {/* Animated Underline */}
          <motion.div
            variants={underlineVariants}
            className="w-32 h-1 bg-white dark:bg-blue-200 rounded-full mx-auto mt-3"
          />
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={subheadingVariants}
          className="text-lg md:text-xl text-gray-100 dark:text-gray-200 mt-4 max-w-2xl"
        >
          We’re here to listen, support, and connect with you. Reach out today!
        </motion.p>
      </motion.div>
    </div>
  );
};






export default ContactUsHeader;

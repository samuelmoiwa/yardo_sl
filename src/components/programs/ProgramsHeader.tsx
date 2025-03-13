import React from 'react';
import { motion } from 'framer-motion'; // For animations

// Placeholder image (replace with actual asset path)
import heroImage from '../../images/programs_hero.jpg'; // Example: youth working in a field

const ProgramsHeader: React.FC = () => {
  // Animation Variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
  };

  const introVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Heading */}
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-white dark:text-blue-300 font-Poppins"
        >
          Our Programs
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl italic text-gray-300 mt-2"
        >
          Building Solutions Through Youth Action
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          variants={introVariants}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-white mt-6 max-w-2xl drop-shadow-md"
        >
          YARDO-SL empowers Sierra Leonean youth to drive change through innovative programs in agriculture, environmental protection, public health, and governance.
        </motion.p>
      </div>

      {/* Optional Parallax Effect (CSS-based) */}
      <style>{`
        .parallax {
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
        }
        @media (max-width: 768px) {
          .parallax {
            background-attachment: scroll; /* Disable parallax on mobile for performance */
          }
        }
      `}</style>
    </div>
  );
};

export default ProgramsHeader;

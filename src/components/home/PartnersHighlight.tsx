import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom';

// Placeholder logos (replace with actual paths)
import ministryLogo from '../../images/ministry-agriculture.png';
import undpLogo from '../../images/undp-gef-sgp.png';
import goalLogo from '../../images/goal.png';
import civicusLogo from '../../images/civicus.png';

const partners = [
  { name: 'Ministry of Agriculture', logo: ministryLogo },
  { name: 'UNDP GEF SGP', logo: undpLogo },
  { name: 'GOAL', logo: goalLogo },
  { name: 'Civicus', logo: civicusLogo },
];

const PartnersHighlight = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-white dark:bg-gray-800">
      <div className="max-w-[80rem] w-full px-4">
        {/* Heading Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300 font-Poppins">
            Powered by Partnership
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Together, we achieve more.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            We’re proud to work with the Ministry of Agriculture, UNDP GEF SGP, GOAL, and more to amplify our impact.
          </p>
        </motion.div>

        {/* Partners Logos - Horizontal Scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-row gap-8 justify-center items-center py-4"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={logoVariants}
                className="flex-shrink-0 w-40 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:filter-none transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            to="/about#partners"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Meet Our Partners
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnersHighlight;

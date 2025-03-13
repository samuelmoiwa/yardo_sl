import React from 'react';
import { motion } from 'framer-motion'; // For animations

// Placeholder logos (replace with actual paths)
import ministryLogo from '../../images/ministry-agriculture.png';
import epaLogo from '../../images/epa.png';
import goalLogo from '../../images/goal.png';
import civicusLogo from '../../images/civicus.png';
import undpLogo from '../../images/undp-gef-sgp.png';

const partners = [
  { name: 'Ministry of Agriculture', logo: ministryLogo },
  { name: 'Environmental Protection Agency', logo: epaLogo },
  { name: 'GOAL', logo: goalLogo },
  { name: 'Civicus', logo: civicusLogo },
  { name: 'UNDP GEF SGP', logo: undpLogo },
];

const Partners: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-[80rem] w-full mx-auto px-4">
        {/* Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 font-Poppins">
            Our Allies
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mt-4 max-w-2xl mx-auto">
            We collaborate with trusted institutions like the Ministry of Agriculture, Environmental Protection Agency, GOAL, and Civicus to amplify our impact.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain filter grayscale hover:filter-none transition-all duration-300"
              />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mt-2 text-center">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;

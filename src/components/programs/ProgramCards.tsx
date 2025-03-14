import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTractor, faLeaf, faHeart, faHandshake } from '@fortawesome/free-solid-svg-icons'; // Icons
import { Link } from 'react-router-dom'; // For optional sub-page links

const programs = [
  {
    title: 'Agriculture',
    description: 'Training youth in sustainable farming to boost food security and livelihoods.',
    icon: faTractor,
    color: 'green',
    hexColor: '#10B981',
    direction: 'left',
  },
  {
    title: 'Environmental Protection',
    description: 'Leading climate action with youth-driven sustainability projects.',
    icon: faLeaf,
    color: 'teal',
    hexColor: '#14B8A6',
    direction: 'right',
  },
  {
    title: 'Public Health',
    description: 'Promoting wellness and access to care in underserved areas.',
    icon: faHeart,
    color: 'red',
    hexColor: '#EF4444',
    direction: 'right',
  },
  {
    title: 'Governance',
    description: 'Fostering leadership and civic engagement among young Sierra Leoneans.',
    icon: faHandshake,
    color: 'purple',
    hexColor: '#8B5CF6',
    direction: 'left',
  },
];

const ProgramCards: React.FC = () => {
  // Animation Variants
  const cardVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === 'left' ? -30 : 30, // Reduced movement for subtlety
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.2 },
    }),
    hover: {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow lift
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="max-w-[80rem] w-full mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              custom={index} // For staggered animation
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-shadow duration-300"
            >
              {/* Accent Bar */}
              <div
                className={`h-2 bg-${program.color}-500`}
                style={{ backgroundColor: program.hexColor }}
              ></div>

              {/* Content */}
              <div className="p-6">
                {/* Icon and Heading Row */}
                <div className="flex items-center space-x-4">
                  <div
                    className={`text-3xl text-${program.color}-500 dark:text-${program.color}-400`}
                  >
                    <FontAwesomeIcon icon={program.icon} />
                  </div>
                  <h3
                    className={`text-xl font-semibold text-gray-900 dark:text-gray-100`}
                  >
                    {program.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-base mt-3">
                  {program.description}
                </p>

                {/* Learn More Link */}
                <Link
                  to={`/programs/${program.title.toLowerCase().replace(' ', '-')}`}
                  className={`mt-4 inline-block text-${program.color}-600 dark:text-${program.color}-400 hover:text-${program.color}-800 dark:hover:text-${program.color}-300 text-sm font-medium transition-colors duration-300`}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCards;

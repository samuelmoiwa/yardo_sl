import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom'; // For sub-page links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGraduationCap, faBullhorn } from '@fortawesome/free-solid-svg-icons'; // Icons

// Opportunity data
const opportunities = [
  {
    title: 'Volunteer',
    description: 'Join our 300+ strong team to lead change in your community.',
    icon: faHeart,
    slug: 'volunteer',
  },
  {
    title: 'Training',
    description: 'Gain skills in agriculture, leadership, and more through our workshops.',
    icon: faGraduationCap,
    slug: 'training',
  },
  {
    title: 'Advocacy',
    description: 'Become a youth ambassador and shape Sierra Leone’s future.',
    icon: faBullhorn,
    slug: 'advocacy',
  },
];

const OpportunityCards: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-800/50 p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-teal-600 dark:text-teal-400 text-4xl mb-4">
                <FontAwesomeIcon icon={opportunity.icon} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-3">
                {opportunity.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                {opportunity.description}
              </p>

              {/* Link */}
              {/* <Link
                to={`/opportunities/${opportunity.slug}`}
                className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-200 font-medium text-sm transition-colors duration-300"
              >
                Learn More
              </Link> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


export default OpportunityCards;

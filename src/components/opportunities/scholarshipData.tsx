import React from 'react';
import { motion } from 'framer-motion';

// Dummy scholarship data
const scholarshipData = [
  {
    title: 'Future Leaders Scholarship',
    provider: 'EduFund',
    source: 'Scholarship.com',
    amount: '$5,000',
    description: 'Support for students in STEM fields.',
    applyLink: 'https://scholarship.com/future-leaders',
  },
  {
    title: 'Global Excellence Award',
    provider: 'WorldEdu',
    source: 'Fastweb',
    amount: '$3,000',
    description: 'For international students excelling academically.',
    applyLink: 'https://fastweb.com/global-excellence',
  },
  {
    title: 'Community Impact Grant',
    provider: 'LocalTrust',
    source: 'Cappex',
    amount: '$2,500',
    description: 'For students committed to community service.',
    applyLink: 'https://cappex.com/community-impact',
  },
];

const Scholarships: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { y: -4, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 dark:text-teal-300 text-center mb-12">
          Scholarships
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {scholarshipData.map((scholarship, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-800/50 p-6 flex flex-col transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-2">
                {scholarship.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-1">
                {scholarship.provider} - {scholarship.amount}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {scholarship.description}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
                Source: {scholarship.source}
              </p>
              <a
                href={scholarship.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 bg-teal-600 dark:bg-teal-500 text-white rounded-md font-medium hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors duration-300 text-center"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};



export default Scholarships;

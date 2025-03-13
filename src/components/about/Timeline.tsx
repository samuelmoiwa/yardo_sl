import React from 'react';
import { motion, Variants } from 'framer-motion'; // Import Variants type

const milestones = [
  { year: '2014', title: 'YARDO-SL Founded', description: 'A vision for youth empowerment begins.', color: 'blue' },
  { year: '2016', title: 'First Agriculture Program', description: 'Training 50 farmers in sustainable practices.', color: 'green' },
  { year: '2019', title: 'UNDP Partnership', description: 'Expanding reach with global support.', color: 'yellow' },
  { year: '2024', title: '10th Anniversary', description: 'Celebrating a decade of change.', color: 'purple' },
];

const Timeline: React.FC = () => {
  // Animation Variants with custom prop
  const stepVariants: Variants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50, // Dynamic x based on index
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.3 }, // Staggered delay
    }),
    hover: {
      y: -5,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Central Spine */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 rounded-full shadow-inner"></div>

      <div className="max-w-[80rem] w-full mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 font-Poppins text-center mb-16 relative z-10"
        >
          Milestones of Impact
        </motion.h2>

        {/* Ladder Timeline */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center gap-12"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              custom={index} // Pass index to variants
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`flex items-center w-full max-w-3xl ${
                index % 2 === 0 ? 'flex-row justify-start' : 'flex-row-reverse justify-end'
              }`}
            >
              {/* Year Badge */}
              <div
                className={`flex-shrink-0 w-20 h-20 rounded-full bg-${milestone.color}-500/90 dark:bg-${milestone.color}-600/90 flex items-center justify-center shadow-md z-10`}
              >
                <span className="text-lg md:text-xl font-semibold dark:text-white text-gray-700">
                  {milestone.year}
                </span>
              </div>

              {/* Connecting Line */}
              <div
                className={`h-1 bg-${milestone.color}-500/50 dark:bg-${milestone.color}-400/50 ${
                  index % 2 === 0 ? 'left-full' : 'right-full'
                } w-16 md:w-24`}
              ></div>

              {/* Milestone Content */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? 'ml-8 text-left' : 'mr-8 text-right'
                } bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300`}
              >
                <h3 className={`text-lg font-semibold text-${milestone.color}-600 dark:text-${milestone.color}-300`}>
                  {milestone.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-200 mt-1">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;

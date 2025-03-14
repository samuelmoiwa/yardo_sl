import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

// Filter categories with counts
const filters = [
  { name: 'All', count: 10, value: 'all' },
  { name: 'Events', count: 4, value: 'events' },
  { name: 'Recruitment', count: 3, value: 'recruitment' },
  { name: 'Partnerships', count: 3, value: 'partnerships' },
];

interface FilterBarProps {
  onFilterChange: (filter: string) => void; // Callback to update NoticeList
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Animation Variants
  const barVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.2, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    active: { scale: 1, backgroundColor: '#1E3A8A', color: '#FFFFFF' },
  };

  const handleFilterClick = (filterValue: string) => {
    setActiveFilter(filterValue);
    onFilterChange(filterValue); // Notify parent component (e.g., NoticeList)
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 sticky top-0 z-10 shadow-sm">
      <div className="max-w-[800px] w-full mx-auto px-4 py-4">
        <motion.div
          variants={barVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          {/* Label */}
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
            Filter Notices
          </h3>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.value}
                custom={index}
                variants={buttonVariants}
                initial="hidden"
                animate={activeFilter === filter.value ? 'active' : 'visible'}
                whileHover="hover"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-blue-900 dark:bg-blue-700 text-white shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => handleFilterClick(filter.value)}
              >
                {filter.name}{' '}
                <span className="ml-1 text-gray-600 dark:text-gray-400">
                  ({filter.count})
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FilterBar;

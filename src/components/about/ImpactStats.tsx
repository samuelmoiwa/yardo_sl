import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // For animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTractor, faTree, faHeart } from '@fortawesome/free-solid-svg-icons'; // Icons

const stats = [
  { value: 300, label: 'Volunteers Engaged', icon: faUsers, suffix: '+' },
  { value: 500, label: 'Farmers Trained', icon: faTractor, suffix: '+' },
  { value: 10, label: 'Environmental Projects Launched', icon: faTree, suffix: '+' },
  { value: 'Thousands', label: 'Lives Impacted', icon: faHeart, suffix: '' },
];

const ImpactStats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-16 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-[80rem] w-full mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 font-Poppins text-center mb-12"
        >
          Our Achievements
        </motion.h2>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-4 mb-4">
                <FontAwesomeIcon icon={stat.icon} className="text-2xl text-white" />
              </div>
              <motion.h3
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                className="text-3xl font-bold text-blue-900 dark:text-blue-200"
              >
                {typeof stat.value === 'number' ? `${stat.value}${stat.suffix}` : `${stat.value}${stat.suffix}`}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImpactStats;

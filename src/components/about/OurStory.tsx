import React from 'react';
import { motion } from 'framer-motion'; // For animations

// Placeholder image (replace with actual path)
import storyImage from '../../images/our_story.jpg'; // e.g., early volunteers

const OurStory: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="w-full py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-[80rem] w-full mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Text Block */}
          <motion.div variants={textVariants} className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 font-Poppins mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Founded in 2014, YARDO-SL began as a vision to harness the potential of Sierra Leonean youth. Today, with over 300 volunteers and partnerships with the Ministry of Youth Affairs, UNDP GEF SGP, and more, we’ve grown into a force for sustainable change, impacting thousands across all regions.
            </p>
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </motion.div>

          {/* Image */}
          <motion.div variants={imageVariants} className="relative">
            <img
              src={storyImage}
              alt="Our Story"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Optional Timeline */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {[
              { year: '2014', text: 'YARDO-SL Founded' },
              { year: '2016', text: 'First Program Launched' },
              { year: '2019', text: 'UNDP Partnership' },
              { year: '2024', text: '10th Anniversary' },
            ].map((milestone, index) => (
              <motion.div
                key={index} // Fixed: Single key prop with index
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <span className="block text-xl font-semibold text-blue-900 dark:text-blue-300">{milestone.year}</span>
                <p className="text-gray-700 dark:text-gray-200">{milestone.text}</p>
                {index < 3 && <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded-full"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;

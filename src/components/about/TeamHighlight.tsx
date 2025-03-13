import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom';

// Placeholder images (replace with actual paths)
import johnDoeImg from '../../images/user.jpg';
import janeSmithImg from '../../images/user.jpg';
import mohamedKamaraImg from '../../images/user.jpg';

const teamMembers = [
  { name: 'John Doe', title: 'Founder', bio: 'Visionary leader with a passion for youth empowerment.', img: johnDoeImg },
  { name: 'Jane Smith', title: 'Program Director', bio: 'Expert in sustainable development initiatives.', img: janeSmithImg },
  { name: 'Mohamed Kamara', title: 'Volunteer Coordinator', bio: 'Dedicated to mobilizing community action.', img: mohamedKamaraImg },
];

const TeamHighlight: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900">
      <div className="max-w-[80rem] w-full mx-auto px-4">
        {/* Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 font-Poppins">
            Our Leadership
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Meet the faces driving YARDO-SL’s mission.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {member.title}
                </p>
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-gray-700 dark:text-gray-200 mt-4"
                >
                  {member.bio}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/team"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Meet the Full Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamHighlight;

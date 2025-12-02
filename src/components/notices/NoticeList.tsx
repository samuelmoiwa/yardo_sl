import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserPlus, faHandshake, faTimes } from '@fortawesome/free-solid-svg-icons'; // Icons

// Notice data with additional details for popup
const notices = [
  {
    title: 'Upcoming Event: Youth Climate Summit',
    date: 'March 20, 2025',
    teaser: 'Join us to discuss innovative climate solutions for Sierra Leone.',
    details: 'The Youth Climate Summit is a landmark event bringing together young leaders, policymakers, and experts to address climate challenges in Sierra Leone. Expect workshops, panel discussions, and networking opportunities.',
    slug: 'youth-climate-summit',
    icon: faCalendarAlt,
    color: 'blue',
  },
  {
    title: 'Volunteer Recruitment Open',
    date: 'Apply by April 1, 2025',
    teaser: 'Become a catalyst for change in your community.',
    details: 'We’re seeking passionate volunteers to support our programs in agriculture, health, and governance. No experience required—just a commitment to making a difference. Apply now to join our team!',
    slug: 'volunteer-recruitment',
    icon: faUserPlus,
    color: 'green',
  },
  {
    title: 'New Partnership with Acumen Announced',
    date: 'Details Inside',
    teaser: 'A collaboration to amplify our impact across the region.',
    details: 'YARDO-SL has partnered with Acumen to expand our reach and resources, focusing on sustainable development and youth empowerment. This collaboration will launch new initiatives in 2025.',
    slug: 'acumen-partnership',
    icon: faHandshake,
    color: 'purple',
  },
];

const NoticeList: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<typeof notices[0] | null>(null);

  // Animation Variants for NoticeList
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const noticeVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Animation Variants for Popup
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <div className="w-full py-16 ">
      <div className="max-w-[900px] w-full mx-auto px-4">
        {/* Notices List */}
        <motion.div variants={listVariants} initial="hidden" animate="visible" className="space-y-8">
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              variants={noticeVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-900 border-l-4 border-gray-200 dark:border-gray-700 rounded-r-lg shadow-md dark:shadow-gray-800/50 p-6 transition-transform duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`text-2xl text-${notice.color}-600 dark:text-${notice.color}-400 flex-shrink-0`}>
                  <FontAwesomeIcon icon={notice.icon} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{notice.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{notice.date}</span>
                  </div>
                  <p className="text-base text-gray-700 dark:text-gray-300 mt-2">{notice.teaser}</p>
                  <button
                    onClick={() => setSelectedNotice(notice)}
                    className={`mt-3 inline-block text-${notice.color}-600 dark:text-${notice.color}-400 hover:text-${notice.color}-800 dark:hover:text-${notice.color}-300 text-sm font-medium transition-colors duration-300`}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Popup Modal */}
        {selectedNotice && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedNotice(null)} // Close on backdrop click
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-lg w-full p-6 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>

              {/* Icon */}
              <div
                className={`text-3xl text-${selectedNotice.color}-600 dark:text-${selectedNotice.color}-400 mb-4`}
              >
                <FontAwesomeIcon icon={selectedNotice.icon} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {selectedNotice.title}
              </h3>

              {/* Date */}
              <span className="text-sm text-gray-500 dark:text-gray-400">{selectedNotice.date}</span>

              {/* Teaser */}
              <p className="text-base text-gray-700 dark:text-gray-300 mt-3">{selectedNotice.teaser}</p>

              {/* Details */}
              <p className="text-base text-gray-600 dark:text-gray-200 mt-4">{selectedNotice.details}</p>

              {/* Optional Action Button */}
              {/* <button
                className={`mt-6 px-4 py-2 bg-${selectedNotice.color}-600 text-white rounded-md hover:bg-${selectedNotice.color}-700 dark:bg-${selectedNotice.color}-500 dark:hover:bg-${selectedNotice.color}-600 transition-colors duration-300`}
              >
                Take Action
              </button> */}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NoticeList;

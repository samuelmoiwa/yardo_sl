import React from 'react';
import { motion } from 'framer-motion'; // For animations

// Placeholder images (replace with actual paths or live feed data)
import post1Img from '../../images/post1.jpg'; // e.g., youth event
import post2Img from '../../images/post2.jpg'; // e.g., volunteer selfie
import post3Img from '../../images/post3.jpg'; // e.g., project update
import { Link } from 'react-router-dom';

const socialPosts = [
  {
    text: 'Our youth volunteers just planted 100 trees in Freetown! #YouthForChange',
    img: post1Img,
    date: 'March 10, 2025',
  },
  {
    text: 'Meet Aminata, leading health workshops in her community. #YARDOPride',
    img: post2Img,
    date: 'March 8, 2025',
  },
  {
    text: 'Excited for our Youth Climate Summit this weekend! Join us! #SierraLeone',
    img: post3Img,
    date: 'March 12, 2025',
  },
];

const SocialMediaFeed = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-gradient-to-b from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-[80rem] w-full px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300 font-Poppins">
            Join the Conversation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Follow us for updates and inspiration.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4" >
            Live feed from <Link  to={'https://www.facebook.com/yardosl'} target="_blank"
                className="text-blue-500 hover:underline hover:text-blue-600" rel="noreferrer">@YARDOSL</Link> on facebook: Latest posts about our work and youth voices.
          </p>
        </motion.div>

        {/* Social Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.img}
                alt="Social Post"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  {post.text}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                  {post.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow Button */}
        <div className="text-center mt-10">
          <a
            href="https://x.com/YARDOSL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Follow @YARDOSL
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFeed;

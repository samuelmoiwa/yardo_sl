import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'; // Social icons

// Social media share data
const socialLinks = [
  {
    name: 'Twitter',
    icon: faTwitter,
    color: '#1DA1F2',
    url: 'https://twitter.com/intent/tweet?text=Check out the latest updates from YARDO-SL!&url=https://yardo-sl.org/notices',
  },
  {
    name: 'Facebook',
    icon: faFacebookF,
    color: '#4267B2',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https://yardo-sl.org/notices',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    color: '#0077B5',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https://yardo-sl.org/notices&title=YARDO-SL Updates',
  },
  {
    name: 'Email',
    icon: faGoogle,
    color: '#4B5563',
    url: 'mailto:?subject=YARDO-SL Updates&body=Check out the latest notices from YARDO-SL: https://yardo-sl.org/notices',
  },
];

const SocialShare: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full py-8">
      <div className="max-w-[800px] w-full mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-800/50 p-6 border-t-2 border-gray-200 dark:border-gray-700"
        >
          {/* Heading */}
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">
            Share Updates
          </h3>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 text-2xl transition-colors duration-300"
                style={{ color: social.color }}
              >
                <FontAwesomeIcon icon={social.icon} />

                {/* Tooltip */}
                <span className="absolute bottom-14 px-3 py-1 text-sm text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Share on {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialShare;

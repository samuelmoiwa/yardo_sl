import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Social icons

const Footer = () => {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 to-green-800 text-white py-12">
      <div className="max-w-[80rem] w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-2xl font-bold font-Poppins">YARDO-SL</h2>
          <p className="text-sm mt-2 text-gray-200">
            Empowering Sierra Leone’s Youth Since 2014
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Our Programs', 'Success Stories', 'Youth Opportunities', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-green-300 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm">Email: <a href="mailto:info@yardo-sl.org" className="hover:text-green-300 transition-colors duration-300">info@yardo-sl.org</a></p>
          <p className="text-sm mt-2">Phone: <a href="tel:+2321234567" className="hover:text-green-300 transition-colors duration-300">+232 123 4567</a></p>
          <p className="text-sm mt-2">Address: 123 Youth Empowerment Lane, Freetown, Sierra Leone</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://x.com/YARDOSL" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a href="https://facebook.com/YARDOSL" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="https://instagram.com/YARDOSL" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
        </motion.div>

        {/* Subscription Form */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form className="w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300 mb-4"
            />
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-300 border-t border-gray-700 pt-4">
        © 2025 YARDO-SL. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

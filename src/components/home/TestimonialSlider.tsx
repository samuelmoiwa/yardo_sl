import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom';

// Placeholder images (replace with actual paths)
import fatimaImg from '../../images/user.jpg';
import mohamedImg from '../../images/user.jpg';
import isatuImg from '../../images/user.jpg';

const testimonials = [
  { name: 'Fatima', role: 'Farmer', quote: 'YARDO-SL gave me the tools to grow my farm and feed my family.', img: fatimaImg },
  { name: 'Mohamed', role: 'Volunteer', quote: 'I found purpose leading environmental cleanups.', img: mohamedImg },
  { name: 'Isatu', role: 'Youth Leader', quote: 'Now I’m shaping policies in my district.', img: isatuImg },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-16 bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-[80rem] w-full px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300 font-Poppins">
            Voices of Change
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Hear from those we’ve empowered.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full max-w-3xl mx-auto">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center"
            >
              {/* Image */}
              <img
                src={testimonials[currentIndex].img}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-500 dark:border-blue-400 mb-4 md:mb-0 md:mr-6"
              />
              {/* Testimonial Text */}
              <div className="text-center md:text-left">
                <p className="text-gray-700 dark:text-gray-200 italic text-lg mb-4">
                  "{testimonials[currentIndex].quote}"
                </p>
                <p className="text-blue-900 dark:text-blue-300 font-semibold">
                  {testimonials[currentIndex].name},{' '}
                  <span className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-400 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            to="/success-stories"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md"
          >
            Read Their Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

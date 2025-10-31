import React, { useState, Suspense, lazy, useRef } from 'react';
import { motion } from 'framer-motion'; // For animations
import team from '../../lottie/phone.json'; // Lottie animation file

const Lottie = lazy(() => import('lottie-react'));

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lottieRef = useRef<any>(null);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#1E40AF', transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const lottieVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
      if (lottieRef.current) {
        lottieRef.current.play(); // Play Lottie on submission
      }
      setTimeout(() => {
        setIsSubmitted(false);
        if (lottieRef.current) {
          lottieRef.current.stop(); // Stop after 3s
        }
      }, 3000);
    }, 500);
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 dark:opacity-20">
        <div className="w-[600px] h-[600px] bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1000px] w-full mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-800/70 p-8 border-t-4 border-blue-600 dark:border-blue-500"
        >
          {/* Form Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Heading */}
            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-300 mb-4 tracking-tight"
            >
              Get Updates
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 dark:text-gray-200 mb-6 font-medium"
            >
              Sign up for our newsletter to never miss a notice.
            </motion.p>

            {/* Form */}
            <motion.form
              variants={childVariants}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300 shadow-sm"
                required
              />
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-blue-900 dark:bg-blue-700 text-white rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center">
                    Subscribed! <span className="ml-2">✓</span>
                  </span>
                ) : (
                  'Subscribe'
                )}
              </motion.button>
            </motion.form>

            {/* Disclaimer */}
            <motion.p
              variants={childVariants}
              className="text-sm text-gray-500 dark:text-gray-400 mt-6 italic"
            >
              We respect your privacy.
            </motion.p>
          </div>

          {/* Lottie Animation Section */}
          <motion.div
            variants={lottieVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
          >
            <Suspense fallback={<div className="text-gray-500">Loading animation...</div>}>
              <Lottie
                lottieRef={lottieRef}
                animationData={team}
                loop={true} // Play only on submission
                className="max-w-[250px] w-full"
              />
            </Suspense>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};


export default Subscribe;

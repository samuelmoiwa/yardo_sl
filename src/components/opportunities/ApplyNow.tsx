import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Form management
import * as Yup from 'yup'; // Validation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Close icon

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?\d{9,15}$/, 'Phone number must be 9-15 digits')
    .required('Phone number is required'),
});

const ApplyNow: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 } },
    hover: { y: -2, backgroundColor: '#0B8277', boxShadow: '0 4px 14px rgba(11, 130, 119, 0.3)', transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-[800px] w-full mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-800/50 p-8 text-center border-t-2 border-teal-200 dark:border-teal-700"
        >
          {/* Heading */}
          <motion.h2
            variants={childVariants}
            className="text-2xl md:text-3xl font-bold text-teal-800 dark:text-teal-300 mb-4"
          >
            Ready to Start?
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={childVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6"
          >
            Take the first step toward creating impact.
          </motion.p>

          {/* Button */}
          <motion.div variants={childVariants}>
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsPopupOpen(true)}
              className="px-8 py-3 bg-teal-600 dark:bg-teal-500 text-white text-lg font-semibold rounded-md shadow-md transition-all duration-300"
            >
              Apply Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Popup Form */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setIsPopupOpen(false)} // Close on backdrop click
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>

              {/* Form Heading */}
              <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-4">
                Apply Now
              </h3>

              {/* Formik Form */}
              <Formik
                initialValues={{ name: '', email: '', phone: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log('Form submitted:', values); // Replace with API call
                  setTimeout(() => {
                    setSubmitting(false);
                    resetForm();
                    setIsPopupOpen(false); // Close popup on success
                  }, 500);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors duration-300"
                      />
                      <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Email Field */}
                    <div>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors duration-300"
                      />
                      <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <Field
                        name="phone"
                        type="text"
                        placeholder="Your Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors duration-300"
                      />
                      <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-2 bg-teal-600 dark:bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors duration-300"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default ApplyNow;

import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .required('Subject is required')
    .min(5, 'Subject must be at least 5 characters'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

const ContactUsForm: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#1E40AF', transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-gray-700/50 overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Left Section: Contact Details */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-8 text-white flex flex-col justify-between">
            <div>
              <motion.h2
                variants={childVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Let’s Connect
              </motion.h2>
              <motion.p
                variants={childVariants}
                className="text-lg mb-8"
              >
                Reach out to us for support, inquiries, or collaboration!
              </motion.p>
            </div>
            <div className="space-y-6">
              <motion.div variants={childVariants} className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mr-4 mt-1" />
                <p>
                  123 Youth Avenue, <br /> Freetown, Sierra Leone
                </p>
              </motion.div>
              <motion.div variants={childVariants} className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-xl mr-4" />
                <p>+232 123 456 789</p>
              </motion.div>
              <motion.div variants={childVariants} className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-4" />
                <p>info@yardo-sl.org</p>
              </motion.div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="p-8">
            <motion.h3
              variants={childVariants}
              className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-6"
            >
              Send Us a Message
            </motion.h3>
            <Formik
              initialValues={{ name: '', email: '', subject: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log('Form submitted:', values); // Replace with API call
                setTimeout(() => {
                  setSubmitting(false);
                  resetForm();
                  alert('Thank you for your message! We’ll get back to you soon.');
                }, 500);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Name Field */}
                  <motion.div variants={childVariants}>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 shadow-sm"
                    />
                    <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={childVariants}>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 shadow-sm"
                    />
                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div variants={childVariants}>
                    <Field
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 shadow-sm"
                    />
                    <ErrorMessage name="subject" component="p" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={childVariants}>
                    <Field
                      name="message"
                      as="textarea"
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 shadow-sm resize-y"
                    />
                    <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={childVariants}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </motion.div>
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
      </div>
    </div>
  );
};




export default ContactUsForm;

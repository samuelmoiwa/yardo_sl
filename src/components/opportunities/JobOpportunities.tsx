import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dummy job data
const jobData = [
  {
    title: 'Frontend Developer',
    company: 'TechCorp',
    source: 'LinkedIn',
    location: 'Remote',
    description: 'Build stunning UIs with React and Tailwind.',
    applyLink: 'https://linkedin.com/jobs/view/12345',
  },
  {
    title: 'UI/UX Designer',
    company: 'CreativeLabs',
    source: 'Indeed',
    location: 'New York, NY',
    description: 'Design user-friendly interfaces for web apps.',
    applyLink: 'https://indeed.com/jobs/view/67890',
  },
  {
    title: 'Software Engineer',
    company: 'InnoSoft',
    source: 'Glassdoor',
    location: 'San Francisco, CA',
    description: 'Develop scalable backend systems.',
    applyLink: 'https://glassdoor.com/jobs/view/54321',
  },
];

const JobOpportunities: React.FC = () => {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { y: -4, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', transition: { duration: 0.3 } },
  };

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-[70rem] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-300 text-center mb-12">
          Job Opportunities
        </h2>
        <Slider {...settings}>
          {jobData.map((job, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-800/50 p-6 flex flex-col transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-1">
                {job.company} - {job.location}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {job.description}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
                Source: {job.source}
              </p>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md
                font-medium hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors duration-300 text-center"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default JobOpportunities;

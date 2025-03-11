import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandsHelping, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import back_1 from '../../assets/back_1.png';

const Card = ({ icon, heading, details }) => (
  <div className="flex flex-col items-center text-center p-6 shadow-xl shadow-blue-200 dark:shadow-blue-900 rounded-br-[5rem] dark:bg-gray-700 bg-white m-4">
    {icon}
    <h2 className="text-xl font-bold text-blue-900 dark:text-blue-500 mt-2">{heading}</h2>
    <p className="text-gray-700 dark:text-gray-300 mt-2">{details}</p>
  </div>
);

const OurPrinciples = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex lg:flex-row flex-col lg:mt-10 mt-0 max-w-[80rem]">
        <div className="lg:w-1/2 w-full grid sm:grid-cols-2 sm:grid-rows-2 lg:px-0 px-4">
          <div className="flex flex-col justify-start">
            <h1 className="text-start text-blue-950 dark:text-blue-500 sm:pt-[10rem] font-poppins font-bold sm:text-3xl text-xl">
              What We Stand For
            </h1>
            <p className="text-gray-700 dark:text-gray-300 lg:text-base text-sm text-start sm:py-0 py-6">
              Our core values guide every action we take, ensuring a sustainable and inclusive future for Sierra Leone.
            </p>
          </div>

          <Card
            icon={<FontAwesomeIcon icon={faLeaf} className="text-5xl text-green-600 mb-4" />}
            heading="Sustainability"
            details="We champion eco-friendly solutions that protect our planet and secure prosperity for generations to come."
          />
          <Card
            icon={<FontAwesomeIcon icon={faHandsHelping} className="text-5xl text-blue-600 mb-4" />}
            heading="Empowerment"
            details="We uplift youth and communities by fostering skills, confidence, and opportunities for growth."
          />
          <Card
            icon={<FontAwesomeIcon icon={faLightbulb} className="text-5xl text-yellow-500 mb-4" />}
            heading="Collaboration"
            details="We believe in the power of working together—uniting voices and efforts for lasting impact."
          />
        </div>

        <div className="lg:w-1/2 bg-cover bg-center bg-no-repeat sm:px-0 px-3 lg:py-0 py-10" style={{ backgroundImage: `url(${back_1})` }}>
          <h1 className="text-center text-blue-950 dark:text-blue-500 py-10 font-poppins font-bold sm:text-3xl text-xl">
            Why Join Us?
          </h1>
          <p className="sm:px-10 text-gray-600 font-Poppins text-xl dark:text-gray-300">
            Partner with YARDO-SL to drive real change—rooted in sustainability, empowerment, and collective action.
          </p>

          {[
            {
              title: "Sustainable Growth",
              description: "Support initiatives that balance environmental care with community development.",
            },
            {
              title: "Youth Leadership",
              description: "Invest in the next generation of Sierra Leonean changemakers.",
            },
            {
              title: "Shared Success",
              description: "Collaborate with us to amplify impact across the nation.",
            },
          ].map((item, index) => (
            <p key={index} className="flex flex-row mt-5 ml-7">
              <svg
                className="w-14 h-14 text-blue-900 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="sm:px-5 text-gray-500 dark:text-gray-300 font-Poppins text-lg">
                <span className="text-blue-950 dark:text-blue-500 font-medium">{item.title}</span> <br />
                {item.description}
              </p>
            </p>
          ))}

          <div className="ml-16">
            <Link
              to="/initiatives"
              className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-10"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm px-5 hover:bg-gray-800 bg-gray-50 py-1 text-sm font-medium hover:text-white text-gray-700 backdrop-blur-3xl">
                Discover Our Work
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrinciples;

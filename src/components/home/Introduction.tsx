import React, { useEffect, lazy, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandsHelping, faUsers } from '@fortawesome/free-solid-svg-icons';
import bgImage from '../../images/yardo1.jpg';

const Lottie = lazy(() => import('lottie-react'));

interface CardProps {
  icon: React.ReactNode;
  heading: string;
  details: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, details }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm w-full overflow-hidden mt-5 p-4 dark:bg-gray-700
      bg-white rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer py-8"
    >
      <div className="flex justify-center">{icon}</div>
      <div className="flex flex-col justify-center items-start px-6 py-4">
        <div className="font-bold lg:text-xl text-sm mb-2 text-start dark:text-blue-200 text-blue-900">{heading}</div>
        <p className="text-gray-700 dark:text-gray-200 lg:text-base text-sm text-start">{details}</p>
      </div>
    </div>
  );
};

const Introduction = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="lg:w-3/4 w-full max-w-[60rem] grid sm:grid-cols-3 lg:px-0 px-4 pt-16 gap-6 relative z-10 lg:mb-16">
        {/* Left Column */}
        <div className="mt-0 w-full gap-5">
          <div className="flex flex-col justify-start">
            <h1 className="text-start dark:text-blue-600 text-blue-900 sm:pt-[8rem] font-poppins font-bold
              sm:text-4xl text-2xl"
            >
              <span className="text-orange-500 font-mono text-lg">WELCOME TO</span> <br />
              YARDO-SL
            </h1>
            <p className="text-gray-700 dark:text-gray-300 lg:text-base text-sm text-start sm:py-6 py-4">
              Since 2014, we’ve been empowering Sierra Leone’s youth to break barriers and build a brighter future.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mt-6">
              Backed by <strong className="text-blue-600">300+ volunteers</strong>
              and partners like GOAL and the Environmental Protection Agency, we’re creating sustainable
              solutions nationwide.
            </p>
            <a
              href="/get-involved"
              className="inline-block dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-gray-200 bg-blue-600
              text-white px-8 py-3 rounded-sm font-semibold hover:bg-blue-700 transition duration-300 text-center"
            >
              Get Involved
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="mt-5 gap-5">
          <Card
            icon={<FontAwesomeIcon icon={faLeaf} className="text-5xl text-green-600 mb-4" />}
            heading="Agriculture"
            details="We equip young farmers with skills and resources to boost food security and
              economic growth through sustainable farming and agro-processing."
          />
          <Card
            icon={<FontAwesomeIcon icon={faHandsHelping} className="text-5xl text-yellow-600 mb-4" />}
            heading="Public Health"
            details="Our youth-led health initiatives promote wellness, combat disease, and improve access to care in
            underserved communities."
          />
        </div>

        {/* Right Column */}
        <div className="mt-14 gap-5">
          <Card
            icon={<FontAwesomeIcon icon={faUsers} className="text-5xl text-red-600 mb-4" />}
            heading="Environmental Protection"
            details="We inspire youth to lead climate action—tackling hazards and fostering sustainability through
            community-driven projects."
          />
          <div className="flex justify-center mt-5">
            <img
              src={bgImage}
              alt="Youth Empowerment"
              className="w-[90%] max-w-md rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};






export default Introduction;

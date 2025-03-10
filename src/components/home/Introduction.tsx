import React, { useEffect, lazy, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandsHelping, faUsers } from '@fortawesome/free-solid-svg-icons';
import bgImage from "../../images/yardo1.jpg";

const Lottie = lazy(() => import('lottie-react'));

interface CardProps {
  icon: React.ReactNode;
  heading: string;
  details: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, details }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm w-full overflow-hidden mt-5 p-4 dark:bg-gray-700
    bg-white rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer py-8">
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
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-50
      dark:from-gray-900 dark:to-indigo-950 bg-center bg-cover bg-no-repeat lg:pb-0 pb-10 relative overflow-hidden">
      <div className="lg:w-3/4 w-full max-w-[70rem] grid sm:grid-cols-3 lg:px-0 px-4 pt-16 gap-6 relative z-10 lg:mb-16">
        {/* Left Column */}
        <div className="mt-0 w-full gap-5">
          <div className="flex flex-col justify-start">
            <h1 className="text-start text-blue-900 sm:pt-[8rem] font-poppins font-bold sm:text-4xl text-2xl">
              <span className="text-orange-500 font-mono text-lg">WELCOME TO</span> <br />
              YARDO-SL
            </h1>
            <p className="text-gray-700 dark:text-gray-300 lg:text-base text-sm text-start sm:py-6 py-4">
              Founded in 2014, YARDO-SL is a registered youth empowerment agency dedicated to breaking the cycle of poverty in Sierra Leone.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mt-6">
              With over <strong className="text-blue-600">300 active volunteers</strong> and partnerships with the Ministry of Agriculture, UNDP GEF SGP, and more, we’re driving sustainable change at the grassroots level.
            </p>
            <a
              href="/get-involved"
              className="inline-block dark:bg-blue-900 dark:text-gray-200 bg-blue-600 text-white px-8 py-3 rounded-sm font-semibold hover:bg-blue-700 transition duration-300 text-center"
            >
              Join the Movement
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="mt-5 gap-5">
          <Card
            icon={<FontAwesomeIcon icon={faLeaf} className="text-5xl text-green-600 mb-4" />}
            heading="Agriculture"
            details="YARDO-SL is committed to sustainable agricultural practices that empower youth and local farmers.
            Through training programs, funding opportunities, and modernized farming techniques, we aim to enhance food
            security and economic stability. Our initiatives include organic farming, agro-processing, and providing
            access to market resources for young entrepreneurs in the agriculture sector."
          />
          <Card
            icon={<FontAwesomeIcon icon={faHandsHelping} className="text-5xl text-yellow-600 mb-4" />}
            heading="Governance"
            details="Our governance programs focus on leadership development, civic education, and advocacy for policy
            reforms that benefit young people. We work closely with government institutions and civil society
            organizations to promote transparency, accountability, and inclusive decision-making."
          />
        </div>

        {/* Right Column */}
        <div className="mt-14 gap-5">
          <Card
            icon={<FontAwesomeIcon icon={faUsers} className="text-5xl text-red-600 mb-4" />}
            heading="Community Impact"
            details="At the heart of YARDO-SL's mission is community transformation. We organize youth-led initiatives
            that address local challenges such as education, healthcare, and climate change. Our programs include skill
            development workshops, environmental sustainability projects, and social welfare programs that uplift
            underprivileged communities. By fostering a spirit of volunteerism and collaboration, we create lasting
            positive change."
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

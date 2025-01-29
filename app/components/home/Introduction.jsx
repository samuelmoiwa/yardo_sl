import { FaLeaf, FaHandsHelping, FaUsers } from "react-icons/fa";
import bgImage from "../../images/yardo1.jpg"; // Ensure this image is available

const Introduction = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-20 px-6 md:px-16 overflow-hidden">

      {/* Top Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-400 rounded-full opacity-30 blur-2xl"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-blue-500 dark:text-blue-400">YARDO-SL</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            YARDO-SL is a registered youth empowerment agency founded in 2014.
            We empower young people across Sierra Leone to overcome poverty
            and create sustainable solutions for their communities.
          </p>

          {/* Icon Highlights */}
          <div className="flex justify-center md:justify-start space-x-6 text-lg">
            <div className="flex items-center space-x-2 transition-all hover:scale-105">
              <FaLeaf className="text-green-500 text-3xl animate-pulse" />
              <span className="font-medium">Agriculture</span>
            </div>
            <div className="flex items-center space-x-2 transition-all hover:scale-105">
              <FaHandsHelping className="text-yellow-500 text-3xl animate-pulse" />
              <span className="font-medium">Governance</span>
            </div>
            <div className="flex items-center space-x-2 transition-all hover:scale-105">
              <FaUsers className="text-red-500 text-3xl animate-pulse" />
              <span className="font-medium">Community Impact</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300">
            With over <strong className="text-blue-600 dark:text-blue-400">300 active volunteers</strong> and partnerships with institutions like
            the Ministry of Agriculture and Forestry, Ministry of Youth Affairs, UNDP GEF SGP, and others,
            we are committed to driving change at the grassroots level.
          </p>

          {/* Call-to-Action Button */}
          {/* <button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 font-bold text-lg rounded-lg shadow-lg transition-all transform hover:scale-105">
            Our Mission
          </button> */}
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={bgImage}
            alt="Youth Empowerment"
            className="w-[90%] md:w-[100%] max-w-md rounded-lg shadow-2xl hover:shadow-lg transition-all"
          />
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,192L120,170.7C240,149,480,107,720,117.3C960,128,1200,192,1320,224L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            fill="rgba(255,255,255,0.9)"
            className="dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Introduction;

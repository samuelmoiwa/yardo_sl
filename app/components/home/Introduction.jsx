import { FaLeaf, FaHandsHelping, FaUsers } from "react-icons/fa";
import bgImage from "../../images/yardo1.jpg"; // Ensure you have an image in the `public` folder

const Introduction = () => {
  return (
    <section className="relative bg-gray-50 dark:text-gray-100 text-gray-700 py-20 px-6 md:px-16 overflow-hidden">

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-green-400">YARDO-SL</span>
          </h2>
          <p className="text-lg">
            YARDO-SL is a registered youth empowerment agency founded in 2014.
            We empower young people across Sierra Leone to overcome poverty
            and create sustainable solutions for their communities.
          </p>

          {/* Icon Highlights */}
          <div className="flex justify-center md:justify-start space-x-6 text-lg">
            <div className="flex items-center space-x-2">
              <FaLeaf className="text-green-400 text-3xl" />
              <span>Agriculture</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHandsHelping className="text-yellow-400 text-3xl" />
              <span>Governance</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUsers className="text-red-400 text-3xl" />
              <span>Community Impact</span>
            </div>
          </div>

          <p className="text-lg">
            With over <strong>300 active volunteers</strong> and partnerships with institutions like
            the Ministry of Agriculture and Forestry, Ministry of Youth Affairs, UNDP GEF SGP, and others,
            we are committed to driving change at the grassroots level.
          </p>

          {/* Call-to-Action Button */}
          <button className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 font-bold text-lg rounded-lg transition-all shadow-lg">
            Our Mission
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={bgImage} // Change to an actual image in your `public` folder
            alt="Youth Empowerment"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;

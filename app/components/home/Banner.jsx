import React, { Suspense, lazy } from 'react';
import { FaSeedling, FaChartLine } from "react-icons/fa";
import team from '../../lottie/team_lottie.json';

// Dynamically import Lottie to ensure it only runs on the client side
const Lottie = lazy(() => import('lottie-react'));

const Banner = () => {
  return (
    <section className="w-full flex justify-center items-center py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-8 h-[30rem] max-w-[90rem]">
        {/* Text Section */}
        <div className="space-y-6 md:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
            Our Mission & Vision
          </h2>
          <div className="space-y-4">
            {/* Mission */}
            <div className="flex items-start gap-4">
              <FaSeedling className="text-green-700 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mission</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  To establish a resilient and sustainable seed sector that ensures seed sufficiency,
                  drives agricultural innovation, and contributes to Sierra Leone’s food security,
                  economic growth, and rural development.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-4">
              <FaChartLine className="text-green-700 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  To cultivate a thriving agricultural ecosystem powered by a sustainable seed system
                  that attracts private sector investment, minimizes reliance on imported seeds, and fosters
                  self-reliance, prosperity, and food security for all Sierra Leoneans.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="flex justify-center md:w-1/2">
          <Suspense fallback={<div>Loading animation...</div>}>
            <Lottie
              animationData={team}
              width={300}
              height={300}
              loop={true}
              className="max-w-[25rem]"
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Banner;

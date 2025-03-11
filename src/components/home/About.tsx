import React, { useEffect } from 'react';
import amied_1 from '../../images/amied_1.png';
import home_img_figure from '../../images/home_img_figure.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    const initAOS = () => {
      setTimeout(() => {
        AOS.init({
          delay: 400,
          duration: 1000,
          once: true,
          offset: 100,
        });
      }, 1000);
    };
    initAOS();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex sm:flex-row flex-col justify-center items-center w-full sm:py-0 py-12 lg:px-3 px-3 max-w-[80rem]">
        <div className="relative flex justify-center sm:w-1/2 w-full lg:h-[40rem] h-[37rem]">
          <img
            src={amied_1}
            alt="yardo"
            className="h-[25rem] object-cover rounded-tl-2xl rounded-br-2xl mt-[6rem] rounded-tr-[6rem] rounded-bl-[6rem] absolute top-0 left-0"
            style={{ zIndex: 1 }}
          />
          <img
            src={home_img_figure}
            alt="home_img_figure"
            className="h-full w-full opacity-50"
            data-aos="fade-right"
            style={{ zIndex: 0 }}
          />
        </div>

        <div className="sm:w-1/2 w-full px-3 font-Poppins sm:mt-0 mt-2">
          <h1 className="text-orange-500 font-mono">WHO WE ARE</h1>
          <h2 className="lg:py-10 py-5 text-blue-950 dark:text-blue-500 font-bold text-2xl">
            YARDO-SL: A Youth-Led Vision
          </h2>
          <p className="pb-10 text-gray-700 dark:text-gray-300 font-semibold text-xl">
            Championing change since 2014.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-Archivo max-w-[30rem]">
            YARDO-SL is a registered youth empowerment agency born in 2014, dedicated to breaking barriers of poverty and inequality in Sierra Leone. With a vibrant network of over 300 volunteers, we’re shaping a future where every young person can thrive.
          </p>
          <Link
            to="/about"
            className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-10"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm px-5 hover:bg-gray-800 bg-gray-50 py-1 text-sm font-medium hover:text-white text-gray-700 backdrop-blur-3xl">
              Discover Our Story
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

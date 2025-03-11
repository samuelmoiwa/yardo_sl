import React, {useEffect} from 'react'

import amied_1 from '../../images/amied_1.png'
import home_img_figure from '../../images/home_img_figure.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom'

const About =()=> {
        useEffect(() => {
          const initAOS = () => {
            setTimeout(() => {
              AOS.init({
                delay: 400, // Delay before animations start (in milliseconds)
                duration: 1000, // Duration of the animation (in milliseconds)
                once: true, // Repeats animation when scrolling back up
                offset: 100 // Offset (in pixels) from the original trigger point
              });
            }, 1000); // Delay before initializing AOS (in milliseconds)
          };

          initAOS();
        }, []);

    return(
        <div className='w-full flex flex-col justify-center items-center'>

            <div className='flex sm:flex-row flex-col justify-center items-center w-full sm:py-0 py-12 lg:px-3 px-3 max-w-[80rem]'>
                <div className='relative flex justify-center sm:w-1/2 w-full lg:h-[40rem] h-[37rem]'>
                  <img src={amied_1} alt="sia" className='h-[25rem] object-cover rounded-tl-2xl rounded-br-2xl mt-[6rem]
                    rounded-tr-[6rem] rounded-bl-[6rem] absolute top-0 left-0' style={{ zIndex: 1 }}
                  />
                  <img src={home_img_figure} alt="home_img_figure"
                    className='h-full w-full opacity-50' data-aos="fade-right"
                    style={{ zIndex: 0 }}
                  />
                </div>

                <div className='sm:w-1/2 w-full px-3 font-Poppins sm:mt-0 mt-2'>
                  <h1 className='text-orange-500 font-mono'>ABOUT US</h1>
                  <h2 className='lg:py-10 py-5 text-blue-950 dark:text-blue-500 font-bold text-2xl'>Welcome to IMO-Technology</h2>
                  <p className='pb-10 text-gray-700 dark:text-gray-300 font-semibold text-xl'>
                    Where innovation meets excellence in software <br/> solutions.
                  </p>

                  <p className='text-lg text-gray-700 dark:text-gray-300 font-Archivo max-w-[30rem] '>
                    We are a passionate team of tech enthusiasts dedicated to transforming ideas into
                    impactful digital experiences. At IMO-Tech, we believe in pushing the boundaries
                    of what’s possible, delivering cutting-edge solutions tailored to meet the unique
                    needs of our clients.
                  </p>

                  <Link to='/about'
                    className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none
                    focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-10 ">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm px-5 hover:bg-gray-800 bg-gray-50 py-1 text-sm font-medium hover:text-white text-gray-700 backdrop-blur-3xl">
                      More About Us
                    </span>
                  </Link>

                </div>
            </div>

        </div>

    );
}

export default About;

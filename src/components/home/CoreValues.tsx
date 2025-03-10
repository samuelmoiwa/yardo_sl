import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandsHelping, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import back_1 from '../../assets/back_1.png';

const Card = ({ icon, heading, details }) => (
  <div className="flex flex-col items-center text-center p-6 shadow-xl shadow-blue-200 rounded-br-[5rem] bg-white m-4 ">
    {icon}
    <h2 className="text-xl font-bold text-blue-900 mt-2">{heading}</h2>
    <p className="text-gray-700 mt-2">{details}</p>
  </div>
);

const OurPrinciples = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full flex lg:flex-row flex-col lg:mt-10 mt-0 max-w-[90rem]'>
        <div className="lg:w-1/2 w-full grid sm:grid-cols-2 sm:grid-rows-2 lg:px-0 px-4">
            <div className="flex flex-col justify-start">
            <h1 className='text-start text-blue-950 sm:pt-[10rem] font-poppins font-bold sm:text-3xl text-xl'>
                Our Guiding Principles
            </h1>
            <p className="text-gray-700 lg:text-base text-sm text-start sm:py-0 py-6">
                At Yardo, our principles drive us forward, ensuring sustainability, integrity, and innovation in every step we take.
            </p>
            </div>

            <Card
            icon={<FontAwesomeIcon icon={faLeaf} className="text-5xl text-green-600 mb-4" />}
            heading="Sustainability"
            details="We commit to sustainable practices that benefit both the environment and our communities, fostering long-term growth."
            />
            <Card
            icon={<FontAwesomeIcon icon={faHandsHelping} className="text-5xl text-blue-600 mb-4" />}
            heading="Community Engagement"
            details="Building strong connections and empowering local communities through collaboration and shared success."
            />
            <Card
            icon={<FontAwesomeIcon icon={faLightbulb} className="text-5xl text-yellow-500 mb-4" />}
            heading="Innovation"
            details="Continuously evolving with creative solutions to address the challenges of today and the opportunities of tomorrow."
            />
        </div>

        <div className='lg:w-1/2 bg-cover bg-center bg-no-repeat sm:px-0 px-3 lg:py-0 py-10' style={{ backgroundImage: `url(${back_1})` }}>
            <h1 className='text-center text-blue-950 py-10 font-poppins font-bold sm:text-3xl text-xl'>
            Why Partner with Yardo?
            </h1>
            <p className='sm:px-10 text-gray-600 font-Poppins text-xl'>
            Join Yardo for sustainable impact, community-driven initiatives, and a commitment to innovation that drives meaningful change.
            </p>

            {[{
            title: "Sustainability",
            description: "We prioritize eco-friendly solutions that contribute to a greener and more sustainable future."
            }, {
            title: "Collaboration",
            description: "By working together, we create stronger, more resilient communities and drive impactful change."
            }, {
            title: "Innovation",
            description: "We embrace new ideas and technologies to create sustainable and lasting solutions."
            }].map((item, index) => (
            <p key={index} className='flex flex-row mt-5 ml-7'>
                <svg className="w-14 h-14 text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z" clipRule="evenodd"/>
                </svg>
                <p className='sm:px-5 text-gray-500 font-Poppins text-lg'>
                <span className='text-blue-950 font-medium'>{item.title}</span> <br/>
                {item.description}
                </p>
            </p>
            ))}

            <div className='ml-16'>
            <Link to='/initiatives' className="relative inline-flex h-12 overflow-hidden rounded-sm p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-10">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm px-5 hover:bg-gray-800 bg-gray-50 py-1 text-sm font-medium hover:text-white text-gray-700 backdrop-blur-3xl">
                Explore our initiatives
                </span>
            </Link>
            </div>
        </div>
        </div>
    </div>
  );
};

export default OurPrinciples;

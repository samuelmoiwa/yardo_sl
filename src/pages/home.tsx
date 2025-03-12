import React from 'react';
import Banner from '../components/home/Banner';
import Introduction from '../components/home/Introduction';
import OurPrinciples from '../components/home/OurPrinciples';
import About from '../components/home/About'
import Donate from '../components/Donate';
import FeaturedImpact from '../components/home/FeaturedImpact';
import LatestNews from '../components/home/LatestNews';
import TestimonialSlider from '../components/home/TestimonialSlider';
import CallToAction from '../components/CallToAction';
import PartnersHighlight from '../components/home/PartnersHighlight';
import QuickStats from '../components/home/QuickStats';
import SocialMediaFeed from '../components/home/SocialMediaFeed';

export default function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-white dark:bg-slate-900'>
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-50
      dark:from-gray-900 dark:to-indigo-950 bg-center bg-cover bg-no-repeat lg:pb-0 pb-10 relative overflow-hidden
      max-w-[110rem]">
        <Banner />
        <Introduction/>
        <About />
        <Donate />
        <OurPrinciples />
        <FeaturedImpact />
        <LatestNews />
        <TestimonialSlider />
        <CallToAction />
        <PartnersHighlight />
        <QuickStats />
        <SocialMediaFeed />
      </div>
    </div>

  );
}

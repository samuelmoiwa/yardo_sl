import React from 'react'
import Sub from '../components/Sub'
import HeroSection from '../components/about/HeroSection'
import OurStory from '../components/about/OurStory'
import MissionVision from '../components/about/MissionVision'
import Partners from '../components/about/Partners'
import TeamHighlight from '../components/about/TeamHighlight'
import ImpactStats from '../components/about/ImpactStats'
import Timeline from '../components/about/Timeline'
import Donate from '../components/Donate'
import TestimonialSlider from '../components/home/TestimonialSlider'
import CallToAction from '../components/CallToAction'

const About = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-white dark:bg-slate-900'>
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-50
        dark:from-gray-900 dark:to-indigo-950 bg-center bg-cover bg-no-repeat lg:pb-0 pb-10 relative overflow-hidden
        max-w-[110rem]"
      >
        <HeroSection />
        <OurStory />
        <MissionVision />
        <Partners />
        <TeamHighlight />
        <CallToAction />
        <ImpactStats />
        <Timeline />
        <Donate />
        <TestimonialSlider />
      </div>
    </div>
  )
}

export default About

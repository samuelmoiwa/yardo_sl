import React from 'react';
import Banner from '../components/home/Banner';
import Introduction from '../components/home/Introduction';
import CoreValues from '../components/home/CoreValues';
import About from '../components/home/About'
export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-50
    dark:from-gray-900 dark:to-indigo-950 bg-center bg-cover bg-no-repeat lg:pb-0 pb-10 relative overflow-hidden">
    <Banner />
    <Introduction/>
    <About />
    <CoreValues />
  </div>
  );
}

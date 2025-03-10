import React from 'react';
import Banner from '../components/home/Banner';
import Introduction from '../components/home/Introduction';
import CoreValues from '../components/home/CoreValues';
import OurImpactNumbers from '../components/home/OurImpactNumbers';

export default function Home() {
  return <>
    <Banner />
    <Introduction/>
    <CoreValues />
    <OurImpactNumbers/>
  </>
}

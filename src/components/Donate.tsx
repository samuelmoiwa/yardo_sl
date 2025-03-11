"use client";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React from 'react'

const Donate = () => {
 const words = [
     {
       text: "Make a donation to Youths Action for Relentless Development Organization",
     },
   ];
   return (
     (<div className="flex flex-col items-center justify-center bg-blue-900 dark:bg-gray-900 w-full py-10">

       <TypewriterEffectSmooth words={words} className={undefined} cursorClassName={undefined} />
       <Link
       to='#'
       className="bg-white text-blue-900 px-12 py-2 rounded-sm hover:font-bold hover:cursor-pointer"
       >
        Donate
       </Link>

     </div>)
   );
}

export default Donate

import React, { Suspense, lazy, useRef } from "react";
import team from "../lottie/EmojiSmile.json";
// Dynamically import Lottie to ensure it only runs on the client side
const Lottie = lazy(() => import("lottie-react"));

const Sub = () => {
    const lottieRef = useRef(null);
  return (
    <div className='w-full h-full min-h-[50rem] flex flex-col justify-center items-center'>

        <Suspense fallback={<div>Loading animation...</div>}>
            <Lottie
                lottieRef={lottieRef} // Assign ref
                animationData={team}

                loop={true} // Set loop to false initially
                className="max-w-[20rem] w-full transition-transform duration-300 hover:scale-105 "
            />
        </Suspense>

        <p> subscribe to premium</p>
        <p> $500,000 to view rest of the pages..</p>
    </div>
  )
}

export default Sub

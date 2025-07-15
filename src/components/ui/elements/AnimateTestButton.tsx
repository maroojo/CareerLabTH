
"use client";

import React, { useState } from 'react';

const AnimatedTestButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`flex items-center justify-center
        relative
        transition-all duration-400 ease-out-quint
        ${isHovered ? 'w-[calc(260px+40px)]' : 'w-[260px]'} 
        h-10`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Original Button */}
            <button
                className={`
          absolute top-0 left-0
          w-full h-full
          bg-[linear-gradient(-8deg,#3b82f6_0%,#ef4444_60%)] text-white max-w-[260px] text-xs sm:text-base md:text-base py-2 px-5 whitespace-nowrap rounded-full font-normal hover:bg-red-700 transition-color uppercase
          transition-transform duration-400 ease-in-out
          ${isHovered ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}
        `}
            >
                take the test
            </button>

            {/* Hovered Button (Color Swapped) and Arrow Button */}
            <div
                className={`
          absolute top-0 left-0
          w-full h-full max-w-[300px]
          flex items-center justify-center
          transition-transform duration-800 ease-in-out
          ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
        `}
            >
                <button
                    className="
            bg-white text-[linear-gradient(-8deg,var(--tw-colors-custom-gradient-start)_0%,var(--tw-colors-custom-gradient-end)_60%)]
            w-[calc(100%-30px)] h-full 
            text-xs sm:text-base md:text-base py-2 px-5 whitespace-nowrap rounded-full font-normal uppercase mr-2
            border border-solid border-[linear-gradient(-8deg,var(--tw-colors-custom-gradient-start)_0%,var(--tw-colors-custom-gradient-end)_60%)]
          "
                    style={{
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundImage: 'linear-gradient(-8deg, #3b82f6 0%, #ef4444 60%)'
                    }}
                >
                    take the test
                </button>

                {/* Arrow Button */}
                <button
                    className="
            w-[80px] h-full px-3
            bg-[linear-gradient(-8deg,var(--tw-colors-custom-gradient-start)_0%,var(--tw-colors-custom-gradient-end)_60%)]
            text-white
            rounded-full flex items-center justify-center border border-solid
          "
                >
                    {/* Arrow Icon (You can replace this with an SVG icon if you have one) */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AnimatedTestButton;
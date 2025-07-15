
"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';

const HoverImageFade = ({ defaultSrc, hoverSrc, alt, width, height, className }: { defaultSrc: string, hoverSrc: string, alt: string, width: number, height: number, className: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative cursor-pointer ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: width, height: height }}
        >
            <Image
                src={defaultSrc}
                alt={alt}
                width={width}
                height={height}
                objectFit="cover"
                className={`absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'
                    } rounded-lg`}
            />

            <Image
                src={hoverSrc}
                alt={`${alt} hover`}
                width={width}
                height={height}
                objectFit="cover"
                className={`absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'
                    } rounded-lg`}
            />
        </div>
    );
};

export default HoverImageFade;
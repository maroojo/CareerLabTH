import React from 'react'
import { FaFacebook, FaYoutube, FaLine } from "react-icons/fa";

const style = "flex w-44 text-center content-center mr-4 mb-5 md:mb-0"
const icon = "text-2xl mr-4"

const Footer = () => {
    return (
        <section className='flex flex-col xl:flex-row md:justify-around items-center gap-8 bg-[linear-gradient(-4deg,#3b82f6_0%,#3b82f6_30%,#ef4444_80%,#ef4444_100%)] w-full h-auto text-white'>
            <p className='mt-5 xl:mt-0 '>
                &copy;Career Lab Thailand 2025. All rights reserved.
            </p>
            <div className='flex flex-col md:flex-row mb-5 md:mb-5 xl:mt-5'>
                <div className={style}>
                    <FaLine className={icon} />
                    <p>@CareerLabTH</p>
                </div>
                <div className={style}>
                    <FaFacebook className={icon} />
                    <p>@CareerLabTH</p>
                </div>
                <div className={style}>
                    <FaYoutube className={icon} />
                    <p>@CareerLabTH</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
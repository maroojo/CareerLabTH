import React from 'react'
import { FaFacebook, FaYoutube, FaLine } from "react-icons/fa";
import Breadcrumb from './Breadcrumb';

const style = "flex w-44 text-center justify-center items-center mr-4 mb-5 md:mb-0"
const icon = "text-2xl mr-4"

const Footer = () => {
    return (
        <footer className='w-full'>
            <div className='flex items-center justify-between my-20'>
                <Breadcrumb />
            </div>
            <section className='flex flex-col xl:flex-row md:justify-around items-center gap-8 bg-[linear-gradient(-4deg,#3b82f6_0%,#3b82f6_30%,#ef4444_80%,#ef4444_100%)] w-full h-auto text-white'>
                <p className='mt-5 xl:mt-0 w-full sm:xl:w-1/2 text-center'>
                    &copy;Career Lab Thailand 2025. All rights reserved.
                </p>
                <div className='sm:flex flex-col w-full sm:xl:w-1/2 md:flex-row mb-14 mt-2 md:mb-5 xl:mt-5 hidden items-center justify-center'>
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
                <div className='flex flex-col items-center justify-center sm:hidden'>
                    <div className={`${style} gap-4`}>
                        <FaLine className={icon} />
                        <FaFacebook className={icon} />
                        <FaYoutube className={icon} />
                    </div>
                    <div className={style}>
                        <p>@CareerLabTH</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
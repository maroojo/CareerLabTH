"use client"

import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image';


const flagStyle = "w-3 h-3 rounded-full object-cover";
const dropLink = "flex items-center gap-2 justify-start"
const dropList = "pl-4 py-2 hover:bg-light-gray group"

const lineHover = "absolute left-0 -bottom-2 w-full h-[2px] underline-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-800"

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    return (
        <nav className={`pt-3 mx-0 lg:px-16 xl:px-32 2xl:px-40 z-50 bg-transparent absolute w-full max-w-screen
        ${mobileMenuOpen ? "bg-white" : "bg-transparent"}
        `}>
            <div className="flex justify-between lg:justify-around items-center mx-auto object-contain relative ">
                <Link href="/" className={`ml-3 md:ml-0 ${mobileMenuOpen ? "opacity-0 lg:opacity-100" : "opacity-100"}`}>
                    <Image src="Logo+typo.svg" alt='logo' height={20} width={145} className='h-14 w-32 ' />
                </Link>
                <ul className="hidden lg:flex gap-10 mt-1 items-center uppercase text-small font-medium text-gray-text">
                    <li><Link href="/" className='text-gradient-hover'>Home</Link></li>
                    <li><Link href="/pricing" className='text-gradient-hover'>Pricing</Link></li>
                    <li><Link href="/about-us" className='text-gradient-hover'>About Us</Link></li>
                    <li><Link href="/contact" className='text-gradient-hover'>Contact</Link></li>
                </ul>
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="hidden lg:flex items-center gap-3 uppercase cursor-pointe group"
                    >
                        <Image src={"asset/Flag-en.svg"} alt='flag' height={23} width={23} />
                        <span className='text-small text-gray-text group-hover:text-primary'>
                            EN
                        </span>
                    </button>
                    <ul className={`absolute top-7 left-3/4 -translate-x-1/2 bg-white shadow-xl rounded-3xl w-26 py-2 z-50 text-center text-gray-text overflow-hidden transform transition-all duration-300 origin-top 
                        ${dropdownOpen ? "opacity-0 lg:opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
                        `}>
                        <li className={dropList}>
                            <button className={dropLink}>
                                <Image src={"asset/Flag-en.svg"} alt='flag' height={23} width={23} className={flagStyle} />
                                <span className='text-small text-gray-text group-hover:text-primary'>
                                    English
                                </span>
                            </button>
                        </li>
                        <li className={dropList}>
                            <button className={dropLink}>
                                <Image src={"asset/Flags-th.svg"} alt='flag' height={23} width={23} className={flagStyle} />
                                <span className='text-small text-gray-text group-hover:text-primary'>
                                    ภาษาไทย
                                </span>
                            </button>
                        </li>
                        <li className={dropList}>
                            <button className={dropLink}>
                                <Image src={"asset/Flags-cn.svg"} alt='flag' height={23} width={23} className={flagStyle} />
                                <span className='text-small text-gray-text group-hover:text-primary'>
                                    中文
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>


                <div className="lg:hidden mr-3">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <Image src={"asset/close.svg"} alt='flag' height={35} width={35} /> : <Image src={"asset/menu.svg"} alt='flag' height={35} width={35} />}
                    </button>
                    {mobileMenuOpen && (
                        <div className='absolute top-full left-0 w-full bg-white z-50 shadow-md'>
                            <ul className="flex flex-col items-center text-center gap-4 pb-6 uppercase text-xs font-medium text-gray-text">
                                <hr className='w-11/12 h-1 text-gray-200' />
                                <li><Link href="/" className='text-gradient-hover'>Home</Link></li>
                                <li><Link href="/pricing" className='text-gradient-hover'>Pricing</Link></li>
                                <li><Link href="/about-us" className='text-gradient-hover'>About Us</Link></li>
                                <li><Link href="/contact" className='text-gradient-hover'>Contact</Link></li>
                                <hr className='w-11/12 h-1 text-gray-200' />

                                <div className='flex gap-5 mb-1'>
                                    <button className={`relative group px-2 py-1 flex items-center gap-2`}>
                                        <Image src={"asset/Flag-en.svg"} alt='flag' height={23} width={23} className={`h-3 w-4`} />
                                        <span className='text-small text-gray-text group-hover:text-primary'>
                                            EN
                                        </span>
                                        <span className={`absolute left-0 -bottom-2 w-full h-[2px] underline-gradient opacity-100`}></span>
                                    </button>
                                    <button className={`relative group px-2 py-1 flex items-center gap-2`}>
                                        <Image src={"asset/Flags-th.svg"} alt='flag' height={23} width={23} className={`h-3 w-4`} />
                                        <span className='text-small text-gray-text group-hover:text-primary'>
                                            ไทย
                                        </span>
                                        <span className={`${lineHover}`}></span>
                                    </button>
                                    <button className={`relative group px-2 py-1 flex items-center gap-2`}>
                                        <Image src={"asset/Flags-cn.svg"} alt='flag' height={23} width={23} className={`h-3 w-4`} />
                                        <span className='text-small text-gray-text group-hover:text-primary'>
                                            中文
                                        </span>
                                        <span className={`${lineHover}`}></span>
                                    </button>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </nav>
    )
}

export default NavBar
import React from 'react'
import Image from 'next/image'


const AboutUsPage = () => {
    return (
        <div className="font-sans bg-white text-gray-800 mt-20">
            <div className="container mx-auto px-4 py-8 md:py-16">
                <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mb-2 text-gradient">
                    Career Lab Thailand
                </h2>
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 md:mb-12">
                    Who We Are
                </h1>

                {/* Our Vision Section */}
                <div className='flex flex-col items-center justify-center'>
                    <div className="relative bg-gradient-to-br from-indigo-900 to-purple-800 rounded-3xl lg:h-144 lg:w-9/12 p-6 md:p-10 lg:p-16 mb-12 md:mb-20 overflow-hidden shadow-xl">
                        <div className="absolute inset-0 z-0">
                            {/* Background images for vision section */}
                            <Image
                                src="asset/about-us/bg-banner.svg"
                                alt="Vision Background 1"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-80"
                            />

                        </div>
                        <div className="relative z-10 text-white text-center flex flex-col items-center justify-center h-full">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                                Our Vision
                            </h3>
                            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                                A future where every Thai talent thrive in their careers in the AI era.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12 md:mb-20">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-gradient">
                        Our Purpose
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
                        To empower the next generation to define careers that match who they are,
                        so they can succeed without stress, lead with passion, and rise above AI disruption.
                    </p>
                </div>

                {/* Our Mission Section */}
                <div className="p-6 md:p-10 lg:p-16 mb-12 md:mb-20">
                    <h3 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8 md:mb-12 text-gradient">
                        Our Mission
                    </h3>
                    <div className="flex flex-row gap-0 justify-center">
                        {/* Mission Item 1 */}
                        <div className="flex flex-col items-center justify-start text-start border-1 border-gray-100 w-94">
                            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold mb-4">
                                1
                            </div>
                            <p className="text-base md:text-lg text-gray-700">
                                Deliver the world’s
                                <br />
                                most scientifically
                                <br />
                                validated career assessments.
                            </p>
                        </div>
                        {/* Mission Item 2 */}
                        <div className="flex flex-col items-center border-1 border-gray-100 w-94 text-start">
                            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-purple-500 text-white text-2xl font-bold mb-4">
                                2
                            </div>
                            <p className="text-base md:text-lg text-gray-700">
                                Discover your personalized
                                <br />
                                career based on skills,
                                <br />
                                interests, and so much more.
                            </p>
                        </div>
                        {/* Mission Item 3 */}
                        <div className="flex flex-col items-center border-1 border-gray-100 w-94 text-start">
                            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl font-bold mb-4">
                                3
                            </div>
                            <p className="text-base md:text-lg text-gray-700">
                                Future proof your education
                                <br />
                                and skills directly to meet
                                <br />
                                real-world opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Core Values Section */}
                <div className="bg-gray-50 rounded-3xl p-6 md:p-10 lg:p-16 shadow-lg flex flex-col items-center justify-center">
                    <h3 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8 md:mb-12 text-gradient">
                        Our Core Values
                    </h3>
                    <div className='w-1/2'>
                        <div className="space-y-8">
                            {/* Core Value 1: Self-Discovery First */}
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                                    <Image
                                        src="asset/about-us/lens.svg" // Replace with actual icon path
                                        alt="Self-Discovery Icon"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
                                        Self-Discovery First
                                    </h4>
                                    <p className="text-base md:text-lg text-gray-600">
                                        Success is built on your unique talent
                                    </p>
                                </div>
                            </div>
                            {/* Core Value 2: Happy Success */}
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                                    <Image
                                        src="asset/about-us/emotion.svg"
                                        alt="Happy Success Icon"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
                                        Happy Success
                                    </h4>
                                    <p className="text-base md:text-lg text-gray-600">
                                        Success should feel good.
                                    </p>
                                </div>
                            </div>
                            {/* Core Value 3: Built to Outlast AI */}
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                                    <Image
                                        src="asset/about-us/trophy.svg" // Replace with actual icon path
                                        alt="Built to Outlast AI Icon"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
                                        Built to Outlast AI
                                    </h4>
                                    <p className="text-base md:text-lg text-gray-600">
                                        Success must be future-ready.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage
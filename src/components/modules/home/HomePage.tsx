
import Image from 'next/image';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <section className="bg-white w-full overflow-hidden text-gray-900">
            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 pt-10 pb-16 relative">
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Unlock Your Top 30 <br />
                        <span className="text-pink-600">Career Matches</span>
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-600">
                        Discover your true potential with our AI-powered career test and get a detailed, personalized career path.
                    </p>
                    <button className="mt-6 px-6 py-3 rounded-md font-semibold text-white">
                        Take the Test
                    </button>
                </div>

                <div className="relative w-full max-w-md mb-10 md:mb-0">
                    <Image src={"asset/home/banner-1.svg"} alt='banner' width={50} height={50} className=''/>
                </div>
            </div>

            {/* Icon Row */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 border-t border-gray-200">
                <div className="flex flex-col items-center">
                    <Image src={"asset/home/partner-1.svg"} alt='banner' width={50} height={50} className=''/>
                    <p className="mt-2 text-sm text-gray-600">Personality</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={"asset/home/partner-2.svg"} alt='banner' width={50} height={50} className=''/>
                    <p className="mt-2 text-sm text-gray-600">Career Match</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={"asset/home/partner-3.svg"} alt='banner' width={50} height={50} className=''/>
                    <p className="mt-2 text-sm text-gray-600">Life Purpose</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={"asset/home/partner-4.svg"} alt='banner' width={50} height={50} className=''/>
                    <p className="mt-2 text-sm text-gray-600">Life Purpose</p>
                </div>
            </div>

            {/* Future Section */}
            <div className="bg-[#1E0E23] text-white py-10 px-6 text-center">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Serious About Your Future?</h2>
                <p className="max-w-2xl mx-auto">
                    Use our clinical-grade assessment built by experts to identify your strengths and discover ideal career paths.
                </p>
            </div>

            {/* Happy Talents Section */}
            <div className="px-6 py-10 text-center">
                <h2 className="text-2xl font-bold mb-6">
                    Our Happy <span className="text-purple-500">Talents</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <Image src={"asset/home/Property -1Default.svg"} alt='banner' width={50} height={50} className=''/>
                            <p className="mt-2 text-sm">Student #{i + 1}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Career Test Features */}
            <div className="px-6 py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">World’s Best Career Test</h2>
                <p className="max-w-xl mx-auto mb-6">
                    Gain insights from psychology, neuroscience, and AI to discover careers that fit your strengths and passion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="p-4 rounded-xl border bg-gradient-to-r from-pink-500 to-blue-500 text-white">
                            <p>Feature {i + 1}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="px-6 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm">
                <div><p>30+ Million</p><p>Career Matches</p></div>
                <div><p>5,000+</p><p>Validated Professionals</p></div>
                <div><p>2,600+</p><p>Career Possibilities</p></div>
                <div><p>Instant</p><p>Results</p></div>
                <div><p>100%</p><p>Online</p></div>
                <div><p>10+</p><p>Years of Research</p></div>
            </div>

            {/* Sample Report Button */}
            <div className="px-6 py-12 text-center">
                <p className="mb-4 font-medium">Download Sample Report of:</p>
                <div className="flex justify-center gap-4">
                    <button className="px-4 py-2 rounded">Student</button>
                    <button className="px-4 py-2 rounded">Adult</button>
                </div>
            </div>

            {/* Who Is It For Section */}
            <div className="px-6 py-10 grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                    <h3 className="font-bold mb-2">Which Career For Me (WCFM) is perfect for:</h3>
                    <ul className="list-disc ml-4 text-sm text-gray-700">
                        <li>High school or college students</li>
                        <li>New graduates</li>
                        <li>Working professionals</li>
                        <li>Career switchers</li>
                        <li>Anyone unsure about their path</li>
                    </ul>
                </div>
                <div className="border rounded-lg p-6">
                    <h3 className="font-bold mb-2">WCFM helps you:</h3>
                    <ul className="list-disc ml-4 text-sm text-gray-700">
                        <li>Understand your strengths</li>
                        <li>Explore aligned careers</li>
                        <li>Build confidence in decisions</li>
                        <li>Plan long-term goals</li>
                        <li>Get recommendations based on science</li>
                    </ul>
                </div>
            </div>

            {/* Personalized Insights Section */}
            <div className="bg-[#1E0E23] text-white py-12 px-6 text-center">
                <h2 className="text-2xl font-bold mb-6">Instant <span className="text-purple-400">Personalized Insights</span> You Will Get:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div>
                        <h3 className="font-semibold mb-2">Top 30 Career Matches</h3>
                        <p className="text-sm">Tailored to your personality and potential.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Current & Potential Strengths</h3>
                        <p className="text-sm">Identified through validated AI models.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Professional Interests</h3>
                        <p className="text-sm">Mapped to industries and roles.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Custom Career Exploration</h3>
                        <p className="text-sm">Based on your answers and patterns.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Custom Career Exploration</h3>
                        <p className="text-sm">Based on your answers and patterns.</p>
                    </div>
                </div>
                <div className="mt-6">
                    <Image src={"asset/home/student.svg"} alt='banner' width={50} height={50} className=''/>
                </div>
            </div>

            {/* School Image */}
            <div className="w-full py-10 px-6">
                <Image src={"asset/home/video.svg"} alt='banner' width={50} height={50} className=''/>
            </div>

            {/* FAQ Section */}
            <div className="px-6 py-10">
                <h2 className="text-xl font-bold text-center mb-6">FAQs</h2>
                <div className="space-y-4 text-sm">
                    {[...Array(5)].map((_, i) => (
                        <details key={i} className="border rounded px-4 py-2">
                            <summary className="cursor-pointer font-medium">Question #{i + 1}</summary>
                            <p className="mt-2 text-gray-600">Answer for question #{i + 1} goes here.</p>
                        </details>
                    ))}
                </div>
            </div>

            {/* Footer Quote Section */}
            <div className="bg-[#1E0E23] text-white py-10 text-center">
                <p className="max-w-xl mx-auto italic">
                    “In the age of AI, the winner isn’t the one who works hardest. It’s the one who knows themselves and the world and dares to build a life around their true gifts.”
                </p>
                <button className="mt-4 px-6 py-3 rounded-md text-white font-semibold">Take Test</button>
            </div>
        </section>
    );
};

export default HomePage;

import Image from 'next/image';
import React from 'react';
import AnimateTestButton from '@elements/AnimateTestButton';
import HoverImageFade from '@elements/HoverImageFade';

const partner = "grayscale h-auto";

const HomePage: React.FC = () => {
    return (
        <div className="text-gray-800 ">
            <section className="relative pt-22 md:pt-24 lg:pt-24 pb-82 md:pb-12 lg:pb-16 xl:pb-12 overflow-hidden h-fit flex flex-col bg-cover bg-center"
                style={{ backgroundImage: "url('/asset/home/bg-home-section1.svg')" }}
            >
                <div className="absolute top-20 right-0 w-full h-full md:w-3/5 lg:w-1/2 2xl:w-7/12 z-0">
                    <Image
                        src="asset/home/banner-1.svg"
                        alt="Students smiling"
                        width={926}
                        height={727}
                        objectFit="contain"
                        className="object-right w-full opacity-50 md:opacity-100"
                    />
                </div>
                <div className="mx-0 px-4 relative z-10 h-7/12">
                    <div className='md:pl-10 lg:pl-36 xl:pl-64 2xl:pl-80 z-20'>
                        <div className="text-center md:text-left ">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 font-grotesk">
                                Unlock
                                <br />
                                Your Top 30
                                <br />
                                <h1 className='text-gradient'>
                                    Career Matches
                                </h1>
                            </div>
                            <p className="text-es md:text-xs text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
                                Powered by Pearson’s World-Leading Clinical Career Tests
                            </p>
                        </div>
                        <div className='mt-14'>
                            <h3 className='text-sm font-semibold'>100% CLINICAL-GRADE & AI-COMPETITIVE</h3>
                            <p className='text-small'>
                                Get your personalized insights and a certificate to future-proof
                                <br />
                                your feel-good and high-income career in the AI era.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 flex flex-col justify-end items-center">
                    <div className='flex flex-col justify-center items-center mt-24 mb-10 z-40 w-full '>
                        {/* <button className="bg-[linear-gradient(-8deg,#3b82f6_0%,#ef4444_60%)] text-white w-full max-w-[260px] text-xs sm:text-base md:text-base py-2 px-5 whitespace-nowrap rounded-full font-normal hover:bg-red-700 transition-color shadow-lg uppercase">
                            take the test
                        </button> */}
                        <AnimateTestButton />
                        <p className='text-[10px]'>You won’t be charged until you confirm</p>
                    </div>
                    <div className='flex justify-evenly items-center xl:px-30 z-40 w-full'>
                        <Image src={"asset/home/partner-1.svg"} alt='partner' objectFit='contain' width={114} height={113} className={`${partner} opacity-30 w-10 md:w-16 lg:w-20 xl:w-22`} />
                        <Image src={"asset/home/partner-2.svg"} alt='partner' objectFit='contain' width={184} height={183} className={`${partner} opacity-60 w-22 md:w-28 lg:w-32 xl:w-38`} />
                        <Image src={"asset/home/partner-3.svg"} alt='partner' objectFit='contain' width={114} height={113} className={`${partner} opacity-60 w-10 md:w-16 lg:w-20 xl:w-22`} />
                        <Image src={"asset/home/partner-4.svg"} alt='partner' objectFit='contain' width={284} height={113} className={`${partner} opacity-60 w-24 md:w-40 lg:w-56 xl:w-68`} />
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="bg-gradient-to-r from-purple-900 to-red-800 text-white py-8 md:py-12 lg:py-16">
                <div className="container mx-auto px-4 text-center flex flex-col items-center">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 rounded-full bg-red-400 px-4 py-2 w-fit">
                        Serious About Your Future ?
                    </h2>
                    <p className='font-semibold text-sm md:text-base lg:text-lg w-full'>
                        Unvalidated career tests are scamming and misleading the futures of millions of people worldwide!
                    </p>
                    <p className="text-normal md:text-base max-w-4xl mx-auto">
                        Free online career tests recycle and generate generic results across. Relying on them can damage your confidence, lead to poor career decisions, and cause you to second-guess your true potential.
                    </p>
                </div>
            </section>

            <section className="bg-white w-full mb-15">
                <div className='py-12 mx-auto w-3/4'>
                    <h2 className="text-3xl md:text-4xl font-bold text-start mb-2 font-grotesk">
                        Our Happy <span className="text-red-600 text-6xl">Talents</span>
                    </h2>
                    <p className='text-sm'>
                        As Thailand’s only certified provider of Pearson Clinical Career Assessments – the Which Career For Me (MOTIVA) and the Career Assessment Inventory (CAI) – we are on a bold mission to empower <span className='text-red-500'>1,000,000 talents</span> from age 8 to thrive in careers in a world driven by AI.
                    </p>
                </div>
                <div className="relative flex gap-4 mt-0 w-full justify-end items-center">
                    <p className='origin-center -rotate-90 text-nowrap w-64 '>
                        “Choose purpose over pressure and<br />
                        happiness alongside achievement.”
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <HoverImageFade
                            defaultSrc="asset/home/Property-2Default.svg"
                            hoverSrc="/asset/home/Property-2Variant.svg"
                            alt="Student 1"
                            width={350}
                            height={500}
                            className="rounded-lg"
                        />
                        <HoverImageFade
                            defaultSrc="asset/home/Property-1Default.svg"
                            hoverSrc="/asset/home/Property-1Variant.svg"
                            alt="Student 2"
                            width={350}
                            height={500}
                            className="rounded-lg hidden lg:flex"
                        />
                        <HoverImageFade
                            defaultSrc="asset/home/Property-2Default.svg"
                            hoverSrc="/asset/home/Property-2Variant.svg"
                            alt="Student 3"
                            width={350}
                            height={500}
                            className="rounded-lg hidden xl:flex"
                        />
                        <HoverImageFade
                            defaultSrc="asset/home/Property-1Default.svg"
                            hoverSrc="/asset/home/Property-1Variant.svg"
                            alt="Student 4"
                            width={350}
                            height={500}
                            className="rounded-lg hidden 2xl:flex"
                        />
                    </div>
                </div>
            </section>

            {/* World's Best Career Test Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <div className='mb-8'>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            World’s Best <span className="text-red-600">Career Test</span>
                        </h2>
                        <p className='text-sm'>
                            Career Planning Made Easy🚀
                        </p>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 max-w-5xl mx-auto mb-10">
                        Which Career For Me (MOTIVA) is the world’s best all-in-one career test and interactive planner – trusted worldwide by psychologists,
                        <br />
                        Fortune 500 companies, universities, schools, career counselors, educators, government authorities and leading HR firms:
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row xl:mx-60'>
                    <p className='bg-red-400 text-white pt-6 pb-16 px-6 rounded-lg w-fit mx-auto mb-8 origin-center rotate-10'>
                        It’s psychometrically
                        <br />
                        designed and scientifically
                        <br />
                        tested to future-proof you
                        <br />
                        to succeed happily in a word
                        <br />
                        driven by AI and other
                        <br />
                        disruptions.
                    </p>
                    <p className='bg-red-400 text-white pt-6 pb-16 px-6 rounded-lg w-fit mx-auto mb-8 origin-center -rotate-10'>
                        It’s psychometrically
                        <br />
                        designed and scientifically
                        <br />
                        tested to future-proof you
                        <br />
                        to succeed happily in a word
                        <br />
                        driven by AI and other
                        <br />
                        disruptions.
                    </p>
                    <p className='bg-red-400 text-white pt-6 pb-16 px-6 rounded-lg w-fit mx-auto mb-8 origin-center rotate-10'>
                        It’s psychometrically
                        <br />
                        designed and scientifically
                        <br />
                        tested to future-proof you
                        <br />
                        to succeed happily in a word
                        <br />
                        driven by AI and other
                        <br />
                        disruptions.
                    </p>
                    <p className='bg-red-400 text-white pt-6 pb-16 px-6 rounded-lg w-fit mx-auto mb-8 origin-center -rotate-10'>
                        It’s psychometrically
                        <br />
                        designed and scientifically
                        <br />
                        tested to future-proof you
                        <br />
                        to succeed happily in a word
                        <br />
                        driven by AI and other
                        <br />
                        disruptions.
                    </p>
                </div>
                <div className='mx-30'>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-800">
                        <div className="flex flex-col items-start justify-center bg-gray-200 h-30 p-3">
                            <span className="text-2xl md:text-4xl font-bold text-gray-800">30+ Million</span>
                            <span className="text-sm md:text-base text-gray-600 mt-2">times administrated worldwide</span>
                        </div>
                        <div className="flex flex-col items-start justify-center bg-gray-200 h-30 p-3">
                            <span className="text-2xl md:text-4xl font-bold text-gray-800">5,000+</span>
                            <span className="text-sm md:text-base text-gray-600 mt-2">career-guide websites connected</span>
                        </div>
                        <div className="flex flex-col items-start justify-center bg-gray-200 h-30 p-3">
                            <span className="text-2xl md:text-4xl font-bold text-gray-800">2,600+</span>
                            <span className="text-sm md:text-base text-gray-600 mt-2">occupations constantly updated in the live planner</span>
                        </div>
                    </div>

                    {/* Short Info Section */}
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-700 ">
                        <div className="flex flex-col items-start justify-center text-center bg-gray-200 h-30 p-3">
                            <p className="text-lg md:text-xl font-bold text-gray-800">Instant</p>
                            <p className="text-sm md:text-base text-gray-600">Personalized results with 1-year access</p>
                        </div>
                        <div className="flex flex-col items-start justify-center text-center bg-gray-200 h-30 p-3">
                            <p className="text-lg md:text-xl font-bold text-gray-800">25</p>
                            <p className="text-sm md:text-base text-gray-600">years of psychometrical research and Validation</p>
                        </div>
                        <div className="flex flex-col items-start justify-center text-center bg-gray-200 h-30 p-3">
                            <p className="text-lg md:text-xl font-bold text-gray-800">100%</p>
                            <p className="text-sm md:text-base text-gray-600">remote, self-paced</p>
                        </div>
                        <div className="flex flex-col items-start justify-center text-center bg-gray-200 h-30 p-3">
                            <p className="text-lg md:text-xl font-bold text-gray-800">10+</p>
                            <p className="text-sm md:text-base text-gray-600">languages available</p>
                        </div>
                    </div>
                </div>

                {/* Download Sample Report Section */}
                <div className="mt-20 bg-gray-100 p-8 rounded-lg shadow-inner max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
                        Download Sample Report of:
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-200">
                            Which Career For Me
                        </button>
                        <span className="text-gray-600 font-semibold flex items-center justify-center">or</span>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-200">
                            CAI
                        </button>
                    </div>
                </div>
            </section>

            {/* What You'll Get Section */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-r from-purple-900 to-red-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/abstract-background.png" // Placeholder for abstract background
                        alt="Abstract Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
                        What You&apos;ll Get
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {[
                                "Instant, personalized insights based on your unique talents, interests, and skills.",
                                "Your top 30 matched careers and majors, ranked by compatibility.",
                                "Detailed descriptions of each matched career and major.",
                                "Essential skills needed for each career.",
                                "Projected growth and salary information.",
                                "Educational pathways and recommended courses.",
                                "In-depth analysis of your work styles.",
                                "Personalized learning resources to bridge skill gaps.",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p className="text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                        {/* Right Column */}
                        <div className="space-y-6">
                            {[
                                "Personalized career development plans.",
                                "Networking opportunities and industry connections.",
                                "Resume and interview preparation tips.",
                                "Guidance on building a strong personal brand.",
                                "Access to exclusive webinars and workshops.",
                                "Ongoing support from career counselors.",
                                "Insights into emerging job markets and trends.",
                                "Strategies for continuous learning and adaptation.",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p className="text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <button className="bg-red-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Instant Personalized Insights Section */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-r from-purple-900 to-red-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/insight-background.png" // Placeholder for background image
                        alt="Insight Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
                        Instant Personalized Insights
                        <br />
                        You Will Get:
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left side - text insights */}
                        <div className="space-y-6">
                            <div className="p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm shadow-xl">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    My Core Interests:
                                </h3>
                                <p className="text-base md:text-lg">
                                    Explore your passions, what truly motivates you, and how they align with various career paths.
                                </p>
                            </div>
                            <div className="p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm shadow-xl">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    My Work Styles:
                                </h3>
                                <p className="text-base md:text-lg">
                                    Understand your preferred working environment, communication style, and how you interact with others in a professional setting.
                                </p>
                            </div>
                            <div className="p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm shadow-xl">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    My Workplace Values:
                                </h3>
                                <p className="text-base md:text-lg">
                                    Identify what most important to you in a job or company culture, ensuring a fulfilling and sustainable career.
                                </p>
                            </div>
                        </div>
                        {/* Right side - image */}
                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src="/insight-image.png" // Placeholder for insight image
                                alt="Insight Overview"
                                width={500}
                                height={500}
                                objectFit="contain"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <button className="bg-red-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg">
                            Unlock My Career Report
                        </button>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
                        Trusted by the world&apos;s
                        <br />
                        leading institutions
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center items-center">
                        {[...Array(5)].map((_, i) => (
                            <Image
                                key={i}
                                src={`/logo-${i + 1}.png`} // Placeholder for logos
                                alt={`Company Logo ${i + 1}`}
                                width={150}
                                height={75}
                                objectFit="contain"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
                        FAQs
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            "What is Career Lab AI?",
                            "How does Career Lab AI work?",
                            "Is Career Lab AI suitable for all ages?",
                            "What kind of careers will I discover?",
                            "How long does the career test take?",
                            "Is my data private and secure?",
                            "Do I get a refund if I'm not satisfied?",
                            "Can I retake the test?",
                            "How accurate are the results?",
                            "Do you offer career counseling services?",
                        ].map((question, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                <details className="group">
                                    <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                                        {question}
                                        <span className="transform transition-transform duration-200 group-open:rotate-180">
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-2 text-gray-600">
                                        {/* Placeholder for answer. You can expand these later */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </details>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="bg-red-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg">
                            View All FAQs
                        </button>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-r from-red-800 to-purple-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/cta-background.png" // Placeholder for CTA background
                        alt="CTA Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Unlock Your Potential?
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Take the first step towards a fulfilling career. Discover your true calling today!
                    </p>
                    <button className="bg-white text-red-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                        Unlock My Career Path
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
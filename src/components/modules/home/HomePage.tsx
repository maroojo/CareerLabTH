
import Image from 'next/image';
import React from 'react';
import AnimateTestButton from '@elements/AnimateTestButton';
import HoverImageFade from '@elements/HoverImageFade';

const partner = "grayscale h-auto";

const HomePage: React.FC = () => {
    const textGradientStyle = {
        background: 'linear-gradient(to right, #E02E50, #6C4AB4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
    };

    const insightsData = [
        {
            title: "Your Top 30+ Career Matches",
            description: "Get your 30+ ultra-precise career matches from a live database of 2,600+ AI-proof careers.",
        },
        {
            title: "Your Current and Potential Strengths",
            description: "Identify both your natural talents and hidden strengths you can develop to stand competitive.",
        },
        {
            title: "Your Professional Interests and Passions",
            description: "Gain deep insights into the fields and industries where you will feel energized, motivated and engaged.",
        },
        {
            title: "Your Company Style based on Life Values and Motivations",
            description: "Find out what type of work environment and company culture align with your personal values for long-term career success and happiness.",
        },
        {
            title: "Your Personal Career Exploration Guide",
            description: "Explore, choose, and build real-time a career path and skills of the future in an interactive, constantly-updated platform.",
        },
    ];
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
                        <AnimateTestButton text='take the test' />
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
                <div className="mt-20 bg-red-950 p-8 rounded-lg shadow-inner max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl font-semibold text-center text-gray-300 mb-6">
                        Download Sample Report of:
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <AnimateTestButton text='Which Career For Me' />
                        <span className="text-gray-600 font-semibold flex items-center justify-center">or</span>
                        <AnimateTestButton text='CAI' />
                    </div>
                </div>
            </section>

            <section className="bg-[#1A1A2E] py-16 px-4 md:px-8 lg:px-16 text-white"> {/* Dark background color from image */}
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-gray-200">
                        Instant <div style={textGradientStyle}>Personalized Insights</div> You Will Get:
                    </h2>

                    {/* Grid for Insights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                        {insightsData.map((insight, index) => (
                            <div
                                key={index}
                                className={`
                bg-[#26263B] p-6 rounded-lg shadow-lg
                ${index === insightsData.length - 1 ? 'col-span-1 md:col-span-2 lg:col-span-1' : ''}
                ${index === insightsData.length - 1 ? 'hidden lg:block' : ''} // Hide last box on mobile/tablet if image takes its place
              `}
                            >
                                <h3 className="text-xl md:text-2xl font-bold mb-3" style={textGradientStyle}>
                                    {insight.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                    {insight.description}
                                </p>
                            </div>
                        ))}
                        <div className="
            relative
            col-span-1 md:col-span-2 lg:col-span-2 // On desktop, it spans 2 columns
            row-span-1 md:row-span-1 lg:row-span-2 // On desktop, it spans 2 rows
            rounded-lg overflow-hidden
            flex items-center justify-center
            min-h-[200px] md:min-h-[300px] lg:min-h-[500px] // Minimum height to ensure space
            lg:block
          ">
                            <Image
                                src="/asset/home/student.svg"
                                alt="Student with graduation cap"
                                width={400}
                                height={400}
                                objectFit="cover"
                                quality={100}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <Image src={"asset/home/video.svg"} alt='video' width={1} height={1} className='w-7/12' />
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 mt-20">
                        FAQs
                    </h2>
                    <div className="w-8/12 mx-auto space-y-4">
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
                    <div className='my-20'>
                        <p className="text-xs text-center">As Featured In:</p>
                        <div className='flex gap-20 items-center mt-4'>
                            <Image
                                src="/asset/home/theStandard.svg"
                                alt="Featured In"
                                width={200}
                                height={100}
                                className="mx-auto mt-4"
                            />
                            <Image
                                src="/asset/home/bangkokPost.svg"
                                alt="Featured In"
                                width={200}
                                height={100}
                                className="mx-auto mt-4"
                            />
                            <Image
                                src="/asset/home/themomentum.svg"
                                alt="Featured In"
                                width={200}
                                height={100}
                                className="mx-auto mt-4"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-red-800 to-purple-900 text-white overflow-hidden w-8/12 mx-auto rounded-3xl">
                <div className="container mx-auto px-4 relative z-10 text-center font-grotesk">
                    <h2 className="">
                        “In the age of AI,
                    </h2>
                    <h2>
                        the winner isn’t the one who works hardest.
                    </h2>
                    <h2>
                        It’s the one who knows themselves and the world
                    </h2>
                    <h2>
                        and dares to build a life around their true gifts.“
                    </h2>
                    <div className='flex justify-center items-center mt-8'>
                    <AnimateTestButton text='take A text' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
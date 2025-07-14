import React from 'react'
import Image from 'next/image'


const ContactPage = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row xl:h-full'>
      <section className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:ml-10'>
        <h1 className='mt-5 capitalize text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk max-w-screen-md text-center lg:text-start'>Contact</h1>
        <Image src={'asset/contact/contact.svg'} alt='operator' width={350} height={500} className='mt-10 lg:mt-16 h-auto w-3/4 md:w-8/12 lg:w-7/12 xl:w-5/12' />
      </section>
      <section className='w-full lg:w-1/2 flex flex-col justify-center lg:justify-start lg:items-start items-center mx-auto lg:mx-0'>
        <div className='mt-3 mb-3 w-full max-w-[300px] px-auto'>
          <h3>For</h3>
          <Image src={"asset/contact/insights.svg"} alt='insights' width={160} height={300} />
          <p className='my-5'>Stay future-ready in the AI-driven job market.</p>
          <div className='flex items-center gap-3'>
            <Image src={"asset/youtube-gradient.svg"} alt='youtube' width={40} height={40} />
            <h1 className='font-grotesk font-semibold text-2xl text-gray-text'>@CareerLabTH</h1>
          </div>
        </div>
        <hr className='h-1 text-gray-200 mb-4' />
        <div className='mt-3 mb-3 w-full max-w-[300px] px-auto'>
          <h3>For</h3>
          <Image src={"asset/contact/enquiries.svg"} alt='enquiries' width={160} height={300} />
          <p className='my-5 text-wrap'>Get ahead with your personal certified career coach. (Limited Availability - Selective Admission Only)</p>
          <div className='flex items-center gap-3'>
            <Image src={"asset/Line-gradient.svg"} alt='Line' width={40} height={40} />
            <h1 className='font-grotesk font-semibold text-2xl text-gray-text'>@CareerLabTH</h1>
          </div>
        </div>
        <hr className='h-1 text-gray-200 mb-4' />
        <div className='mt-3 mb-3 w-full max-w-[300px] px-auto'>
          <h3>For</h3>
          <Image src={"asset/contact/update.svg"} alt='update' width={160} height={300} />
          <p className='my-5'>Be the first to spot new opportunities.</p>
          <div className='flex items-center gap-3'>
            <Image src={"asset/facebook-gradient.svg"} alt='facebook' width={40} height={40} />
            <h1 className='font-grotesk font-semibold text-2xl text-gray-text'>@CareerLabTH</h1>
          </div>
        </div>
        <hr className='h-1 text-gray-200 mb-4' />
      </section>

    </div>
  )
}

export default ContactPage
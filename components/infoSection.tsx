import Image from 'next/image';
import React from 'react';

const InfoSection = () => {
  return (
    <>
      {/* First Section */}
      <div className='flex flex-col lg:flex-row mt-10 bg-gray-100'>
        
        {/* Image First on Small Screens */}
        <div className='lg:w-1/2 w-full'>
          <Image
            src="/jeep.jpg"
            alt='car'
            width={900}
            height={400}
            className='object-cover w-full h-full'
          />
        </div>
        
        {/* Text Next on Small Screens */}
        <div className='lg:w-1/2 w-full pt-10 space-y-8 md:space-y-4 lg:pl-28 md:pl-20 pl-8'>
          <h1 className='font-bold text-4xl text-left lg:text-left'>PURCHASE <br /><span className='font-normal'>A CAR</span></h1>
          <span className='block w-16 border-b-4 border-black mx-0 mb-4'></span>
          <p className='max-w-[500px] mx-auto lg:mx-0 md:max-w-[800px] text-left lg:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className='flex items-center justify-center lg:justify-start pb-5'>
            <button className="relative px-16 md:px-10 py-5 md:py-4 border-1 uppercase bg-black text-white group mt-6 items-start">
              VIEW DETAILS
              <span className="absolute top-0 left-0 size-full scale-0 bg-white/30 border-2 group-hover:scale-100 transition duration-700 pointer-events-none" />
              <span className="absolute inset-0 border-2 border-white group-hover:scale-x-110 group-hover:scale-y-125 group-hover:opacity-0 transition delay-300 duration-500 ease-in-out pointer-events-none" />
            </button>
          </div>
        </div>

      </div>

      {/* Second Section */}
      <div className='flex flex-col-reverse lg:flex-row bg-gray-100'>
        
        {/* Text First on Small Screens */}
        <div className='lg:w-1/2 w-full pt-10 space-y-8 md:space-y-4 lg:pl-28 md:pl-20 pl-8'>
          <h1 className='font-bold text-4xl text-left lg:text-left'>LIST <br /><span className='font-normal'>A CAR</span></h1>
          <span className='block w-16 border-b-4 border-black mx-0 mb-4'></span>
          <p className='max-w-[500px] mx-auto lg:mx-0 text-left lg:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
           <div className='flex justify-center lg:justify-start pb-5 mr-6'>
            <button className="relative px-10 md:px-10 py-5 md:py-4 border-1 uppercase bg-black text-white group mt-6">
              GET YOUR FAVIOURITE CAR
              <span className="absolute top-0 left-0 size-full scale-0 bg-white/30 border-2 group-hover:scale-100 transition duration-700 pointer-events-none" />
              <span className="absolute inset-0 border-2 border-white group-hover:scale-x-110 group-hover:scale-y-125 group-hover:opacity-0 transition delay-300 duration-500 ease-in-out pointer-events-none" />
            </button>
          </div>
        </div>

        {/* Image Last on Small Screens */}
        <div className='lg:w-1/2 w-full'>
          <Image
            src="/driver.jpg"
            alt='car'
            width={900}
            height={400}
            className='object-cover w-full h-full'
          />
        </div>
        
      </div>
    </>
  );
}

export default InfoSection;

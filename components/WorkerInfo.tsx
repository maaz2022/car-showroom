import Image from 'next/image';
import React from 'react';

const WorkerInfo = () => {
  return (
    <div className='bg-black w-full h-auto relative text-white p-8'>
      <div className='flex flex-col lg:flex-row items-center justify-between lg:max-w-6xl md:max-w-4xl mx-auto'>
        
        {/* Worker Image */}
        <div className='lg:w-1/2 w-full flex justify-center lg:justify-start'>
          <div className="relative">
            <Image
              src='/man.jpg'
              alt='worker'
              width={400}
              height={100}
              className='transform lg:scale-125 -translate-y-[0px]'
            />
          </div>
        </div>

        {/* Worker Info */}
        <div className='lg:w-1/2 w-full mt-8 lg:mt-0 flex flex-col justify-center space-y-6 text-center lg:text-left'>
          <h1 className='text-4xl font-bold'>
            ALDEN <span className='font-normal'>CASAS</span>
          </h1>
          <p className='text-lg'>LICENSED REALTOR® (# 0.547777)</p>
          
          <span className='block w-16 border-b-4 border-white mx-auto lg:mx-0 mb-4 '></span>

          <p className='leading-relaxed text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur.
          </p>

          {/* Contact Button with Animation */}
          <div className='flex justify-center lg:justify-start'>
            <button className="relative px-14 py-4 border border-white uppercase group text-white transition-all duration-500">
              Contact Me
              <span className="absolute inset-0 bg-white/30 scale-0 group-hover:scale-100 transition duration-700 pointer-events-none" />
              <span className="absolute inset-0 border border-white group-hover:opacity-0 transition-all delay-300 duration-500 pointer-events-none" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerInfo;

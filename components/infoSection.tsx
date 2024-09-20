import Image from 'next/image'
import React from 'react'

const InfoSection = () => {
  return (
    <>
    <div className='flex mt-10 bg-gray-100'>
    <div className='w-1/2'>
        <Image
            src="/jeep.jpg"
            alt='car'
            width={900}
            height={400}
            className='object-cover w-full h-full'
        />
    </div>
    <div className='w-1/2 pt-10 space-y-8 px-28'>
        <h1 className='font-bold text-4xl'>PURCHASE <br /><span className='font-normal'>A CAR</span></h1>
        <span className='block w-16 border-b-4 border-black mx-auto md:mx-0 mb-4'></span>
        <p className='max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        </p>
                <button className="relative px-16  py-5 border-1 uppercase bg-black text-white group  mt-6">
                    VIEW DETAILS
                    <span className="absolute top-0 left-0 size-full scale-0 bg-white/30  border-2 group-hover:scale-100  transition duration-700 pointer-events-none" />
                        <span className="absolute inset-0 border-2 border-white group-hover:scale-x-110 group-hover:scale-y-125 group-hover:opacity-0 transition delay-300 duration-500 ease-in-out pointer-events-none" />
                 </button>
    </div>
    
    
    </div>
        <div className='flex bg-gray-100'>

    <div className='w-1/2 pt-10 space-y-8 px-28'>
        <h1 className='font-bold text-4xl'>LIST <br /><span className='font-normal'>A CAR</span></h1>
        <span className='block w-16 border-b-4 border-black mx-auto md:mx-0 mb-4'></span>
        <p className='max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        </p>
                <button className="relative px-16  py-5 border-1 uppercase bg-black text-white group  mt-6">
                    GET YOUR FAVIOURITE CAR
                    <span className="absolute top-0 left-0 size-full scale-0 bg-white/30  border-2 group-hover:scale-100  transition duration-700 pointer-events-none" />
                        <span className="absolute inset-0 border-2 border-white group-hover:scale-x-110 group-hover:scale-y-125 group-hover:opacity-0 transition delay-300 duration-500 ease-in-out pointer-events-none" />
                 </button>
    </div>
    
        <div className='w-1/2'>
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
  )
}

export default InfoSection

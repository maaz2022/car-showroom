import Image from 'next/image'
import React from 'react'

const CarShowCase = () => {
  return (
    <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 justify-items-center'>
      <div className="w-[700px] lg:w-[400px] h-[200px]">
        <Image
          src='/mycar.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full hover:opacity-50"
        />
      </div>
      <div className="w-[700px] lg:w-[400px] h-[200px]">
        <Image
          src='/sec.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full hover:opacity-50"
        />
      </div>
      <div className="w-[700px] lg:w-[400px] h-[200px]">
        <Image
          src='/carimg.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full hover:opacity-50"
        />
      </div>
      <div className="w-[700px] lg:w-[400px] h-[200px]">
        <Image
          src='/bmw.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full hover:opacity-50"
        />
      </div>
      <div className="w-[700px] lg:w-[400px] h-[200px]">
        <Image
          src='/rover.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full hover:opacity-50"
        />
      </div>
    </div>
  )
}

export default CarShowCase

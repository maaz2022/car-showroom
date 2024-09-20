import Image from 'next/image'
import React from 'react'

const CarShowCase = () => {
  return (
    <div className='flex items-center justify-center mt-2 gap-2'>
      <div className="w-[400px] h-[200px]">
        <Image
          src='/mycar.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full  hover:opacity-50"
        />
      </div>
      <div className="w-[400px] h-[200px]">
        <Image
          src='/sec.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full  hover:opacity-50"
        />
      </div>
      <div className="w-[400px] h-[200px]">
        <Image
          src='/carimg.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full  hover:opacity-50"
        />
      </div>
      <div className="w-[400px] h-[200px]">
        <Image
          src='/bmw.jpg'
          alt='car'
          width={400}
          height={200}
          className="object-cover w-full h-full  hover:opacity-50"
        />
      </div>
      <div className="w-[400px] h-[200px]">
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

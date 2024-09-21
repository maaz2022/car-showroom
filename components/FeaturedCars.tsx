import Image from 'next/image';
import React from 'react';

const FeaturedCars = () => {
  const cars = [
    {
      id: 1,
      name: 'Mercedes Benz',
      price: '$89,990',
      imageUrl: '/sec.jpg',
    },
    {
      id: 2,
      name: 'Lamborghini',
      price: '$147,500',
      imageUrl: '/f2.jpg',
    },
    {
      id: 3,
      name: '2022 BMW',
      price: '$99,800',
      imageUrl: '/f3.jpg',
    },
  ];

  return (
    <div className='flex items-center justify-center flex-col lg:p-28  p-16'>
      {/* Centered tagline on small screens */}
      <p className='text-[17px] text-gray-500 mb-6 text-center lg:text-[20px]'>
        EXPLORE CARS IN LAS VEGAS
      </p>

      {/* Center the heading for sm screens */}
      <h1 className='relative font-bold text-3xl text-center lg:text-5xl'>
        FEATURED <span className='font-normal'>CARS FOR SALE</span>
        <span className='absolute inset-x-0 mx-auto w-20 border-b-8 border-black lg:top-20 top-[110px]'></span>
      </h1>

      {/* Car grid - Centering on small screens */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-32 justify-items-center '>
        {cars.map((car) => (
          <div
            key={car.id}
            className='shadow-lg lg:w-96  w-[300px] h-auto border border-gray-200 rounded-lg transition-transform transform hover:translate-y-[-10px] duration-300'
          >
            <div className='relative h-56'>
              <Image
                src={car.imageUrl}
                alt={car.name}
                layout='fill'
                objectFit='cover'
                className='rounded-t-lg'
              />
            </div>
            <div className='p-4 text-center'>
              <h2 className='text-lg font-semibold'>{car.name}</h2>
              <p className='text-gray-600 font-bold'>{car.price}</p>
              <button className="relative px-8 py-2 border-1 uppercase bg-black text-white group mt-6">
                VIEW DETAILS
                <span className="absolute top-0 left-0 size-full scale-0 bg-white/30 border-2 group-hover:scale-100 transition duration-700 pointer-events-none" />
                <span className="absolute inset-0 border-2 border-white group-hover:scale-x-110 group-hover:scale-y-125 group-hover:opacity-0 transition delay-300 duration-500 ease-in-out pointer-events-none" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;

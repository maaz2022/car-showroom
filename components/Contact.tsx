import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <div className='flex items-center justify-center flex-col p-12 md:p-20 '>
      <p className='text-[20px] text-gray-500 mb-6'>
        I AM AVAILABLE
      </p>
      <h1 className='relative font-bold text-4xl md:text-5xl text-center'>
        CONTACT ME<span className='font-normal'> Now</span>
        <span className='absolute inset-x-0 mx-auto w-20 border-b-8 border-black top-16 md:top-20 mb-5'></span>
      </h1>

      {/* Contact Info Section */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-28 md:mt-24'>
        {/* Phone Section */}
        <div className='flex flex-col items-center text-center space-y-2'>
          <Phone className='text-4xl mb-4 text-black hover:animate-pulse duration-500 delay-300' size={40} />
          <p className='text-gray-600 text-[16px] md:text-[18px] font-light'>DIRECT PHONE #</p>
          <p className='text-black text-2xl font-semibold md:text-[15px] lg:text-[20px]'>702-123-4567</p>
        </div>

        {/* Email Section */}
        <div className='flex flex-col items-center text-center space-y-2 mt-10 md:mt-0'>
          <Mail className='text-4xl mb-4 text-black hover:animate-ping duration-500 delay-300' size={40} />
          <p className='text-gray-600 text-[16px] md:text-[18px] font-light'>EMAIL ME</p>
          <p className='text-black text-2xl font-semibold md:text-[15px] lg:text-[20px]'>EMAIL@MAIL.COM</p>
        </div>

        {/* Office Section */}
        <div className='flex flex-col items-center text-center space-y-2 mt-10 md:mt-0'>
          <MapPin className='text-4xl mb-4 text-black hover:animate-bounce duration-500 delay-300' size={40} />
          <p className='text-gray-600 text-[16px] md:text-[15px] font-light'>SHOW ROOM</p>
          <p className='text-black text-2xl font-semibold md:text-[15px] lg:text-[20px]'>REALTY OFFICE</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

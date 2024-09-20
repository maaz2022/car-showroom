import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <div className='flex items-center justify-center flex-col p-28'>
      <p className='text-[20px] text-gray-500 mb-6'>
        I AM AVAILABLE
      </p>
      <h1 className='relative font-bold text-5xl text-center'>
        CONTACT ME<span className='font-normal'> Today</span>
        <span className='absolute inset-x-0 bottom-0 mx-auto w-20 border-b-8 border-black top-20'></span>
      </h1>

      {/* Contact Info Section */}
      <div className='flex justify-center items-center gap-40 mt-24'>
        {/* Phone Section */}
        <div className='flex flex-col items-center text-center space-y-2'>
          <Phone className='text-4xl mb-4 text-black hover:animate-pulse duration-500 delay-300'size={40} />
          <p className=' text-gray-600 text-[18px] font-light'>DIRECT PHONE #</p>
          <p className='text-black text-2xl font-semibold'>702-123-4567</p>
        </div>

        {/* Email Section */}
        <div className='flex flex-col items-center text-center space-y-2'>
          <Mail className='text-4xl mb-4 text-black hover:animate-ping duration-500 delay-300' size={40}/>
          <p className='font-light text-gray-600 text-[18px]'>EMAIL ME</p>
          <p className='text-black text-2xl font-semibold'>EMAIL@MAIL.COM</p>
        </div>

        {/* Office Section */}
        <div className='flex flex-col items-center text-center space-y-2'>
          <MapPin className='text-4xl mb-4 text-black hover:animate-bounce duration-500 delay-300' size={40} />
          <p className='font-light text-gray-600 text-[18px]'>SHOW ROOM</p>
          <p className='text-black text-2xl font-semibold'>REALTY OFFICE</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

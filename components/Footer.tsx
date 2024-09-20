import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black mt-2 px-40 py-16'>
      <div className='flex flex-col md:flex-row justify-between text-white'>
      <span className='absolute inset-x-0  mx-auto w-[90%] border-b-2 border-white top-56'></span>

        {/* Logo and Social Icons */}
        <div className='flex flex-col items-start mb-6 md:mb-0'>
          <h1 className="font-extrabold text-4xl">
            <span className="font-normal">Cars </span>Planet
          </h1>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Column 1: Links */}
        <div className="flex flex-col mb-6 md:mb-0">
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Buy or Sell</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Me</a></li>
          </ul>
        </div>

        {/* Column 2: Showroom Info */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="font-semibold">Showroom</h2>
          <p>123 Street<br />City, State 89077</p>
          <a href="/" className="text-gray-400 hover:text-white">Get Directions</a>
        </div>
      </div>
      
    
      <div className="mt-24 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Cars Planet. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

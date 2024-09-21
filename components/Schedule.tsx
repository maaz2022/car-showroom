import React from 'react';

const Schedule = () => {
  return (
    <div className='relative flex items-center justify-center flex-col p-12 md:p-28 bg-sectionbg bg-no-repeat bg-cover'>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75"></div>

      {/* Content */}
      <div className="relative z-10">
        <p className='text-[20px] text-gray-500 mb-6 text-center'>
          SCHEDULE A FREE
        </p>
        <h1 className='font-bold text-4xl md:text-5xl mb-8'>
          CAR <span className='font-normal'>CONSULTATION</span>
        </h1>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
          <input
            type="text"
            placeholder="NAME"
            className="border border-black p-3 w-full outline-none focus:border-black focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="border border-black p-3 w-full outline-none focus:border-black focus:ring-2 focus:ring-black"
          />
          <input
            type="tel"
            placeholder="PHONE"
            className="border border-black p-3 w-full outline-none focus:border-black focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="OPTION"
            className="border border-black p-3 w-full outline-none focus:border-black focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="MESSAGE"
            className="border border-black p-3 w-full outline-none col-span-1 md:col-span-2 h-32 resize-none focus:border-black focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 mx-auto bg-black text-white py-3 px-16 uppercase font-bold hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Schedule;

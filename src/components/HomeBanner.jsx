import React from 'react';
import schoolIcon from '../assets/school.avif';

function HomeBanner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[200px] md:h-[200px] lg:h-[300px] overflow-hidden">
      <img
        src={schoolIcon}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">THE BEST IN YOU</h1>
        <hr className="w-3/4 sm:w-1/2 border-t-2 border-white mb-4" />
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          APPLY NOW
        </button>
      </div>
    </div>
  );
}

export default HomeBanner;

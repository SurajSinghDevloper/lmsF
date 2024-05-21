import React from 'react'
import schoolIcon from '../assets/school.avif'

function HomeBanner() {
  return (
    <div> 
        <div className="relative w-full h-[400px] overflow-hidden">
    <img
      src={schoolIcon}
      alt="Background"
      className="absolute inset-0 w-full h-[400px] object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative flex flex-col items-center justify-center h-[400px] text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">THE BEST IN YOU</h1>
      <hr className="w-1/2 border-t-2 border-white mb-4" />
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        APPLY NOW
      </button>
    </div>
  </div>
  </div>
  )
}

export default HomeBanner
import React from 'react'
import './Mantu.css';

function Mantu() {
  return (
    <div>
      <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden  bg-cover bg-black">
      <div className="name relative z-10 text-white text-5xl md:text-7xl lg:text-9xl  bg-cover font-bold p-4 border-4 rounded-full border-transparent  shadow-lg  transition-all ">
        Your Name
      </div>
      <div className="absolute inset-0 z-0  ">
        <div className="absolute top-0 left-0 w-full h-full fire-animation bg-cover"></div>
      </div>
    </div>
    </div>
  )
}

export default Mantu

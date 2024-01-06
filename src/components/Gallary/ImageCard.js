import React from 'react'

const ImageCard = () => {
  return (
    <div className="w-full h-fit relative rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:scale-[.98] duration-300 mb-6">
      <img
        src="https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzYyNjV8MXwxfGFsbHwxNnx8fHx8fDJ8fDE3MDQ1NTE3NTl8&ixlib=rb-4.0.3&q=80&w=200"
        alt="janina"
        className="w-full h-auto "
      />
      <div className="absolute  top-0 p-6 text-gray-200 mx-auto min-h-full">
        <p className='text-xl font-semibold'>NEON</p>
        <p className='my-3 text-lg'>
          Home to kaleidoscopic-colored coral reefs and an abundance of diverse
          marine life | Islands of NEOM- NEOM, Saudi Arabia.
        </p>
        <p >2023-04-28T13:21:00Z</p>
      </div>
    </div>
  );
}

export default ImageCard
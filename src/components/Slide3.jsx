import React from 'react'

export function Slide3() {
  return (
    <div className="mt-[400px] flex h-[100vh] flex-col">
      <div className="h-full">
        <h1 className="font-thunder font-500  h-full w-full text-[600px] italic text-white">
          Events
          <div className="circle orange"></div>
          <div className="circle purple"></div>
        </h1>
      </div>
      <div className="font-satoshi font-200 flex flex-row justify-around  text-white">
        <div>
          <p>CHAKRA</p>
        </div>
        <div>
          <p>PRO SHOW</p>
        </div>
        <div>
          <p>ROBO GAMES</p>
        </div>
        <div>
          <p>ROCKET</p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h1 className="text-white text-center font-bold text-5xl animate-shine bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-400 to-white">
          Shine!
        </h1>
      </div>
    </div>
  )
}

export default Slide3
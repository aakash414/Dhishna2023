import React from 'react'

export function Slide3() {
  return (
    <div className=" flex flex-col">
      <div className="h-full  flex flex-col justify-center relative items-center">
        <p className="font-satoshi font-normal absolute top-20 text-2xl text-white ">THE BIGGEST EVENTS HAPPENING IN KERALA</p>
        <h1 className="h-full  text-center font-black leading-none font-thunder1 xl:text-[800px] lg:text-[600px] md:text-[400px] sm:text-[350px] text-[200px] italic text-white">
          Events
        </h1>
      </div>
      <div className="font-200 flex flex-row justify-around font-satoshi  text-white -mt-24">
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
    </div>
  )
}

export default Slide3

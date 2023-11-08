import React from 'react'

export function Slide3() {
  return (
    <div className=" flex flex-col ">
      <div className="h-full  flex flex-col justify-center relative items-center">
        <a>
        <p className="font-satoshi font-normal absolute lg:top-20 md:top-12 top-2 text-sm lg:text-2xl xl:text-4xl xl:top-28  md:text-base text-white ">THE BIGGEST EVENTS HAPPENING IN KERALA</p>
        <h1 className="h-full  text-center mt-6 font-black leading-none font-thunder1 xl:text-[750px] lg:text-[560px] md:text-[400px] sm:text-[350px] text-[200px] italic text-white">
          Events
        </h1>
        </a>
      </div>
      <div className="font-200 flex flex-row justify-around font-satoshi  text-white lg:-mt-24">
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

"use client"
import React,{useState, useEffect} from 'react'

export function Slide1() {
  return (
    <div className='relative text-white h-[100vh]'>
              {/*<div className="circle"></div>*/}
        {/*<div className="circle ad13b2  "></div>*/}

      <div className='absolute opacity-70'>
        <img src='/Dhishna.png' alt="Dhishna" className='hidden md:block w-[550px] lg:w-[650px] xl:w-[750px] ' />
      </div>
      <div className='absolute flex justify-center items-center h-full w-full opacity-60'>
        <p className='font-bold test italic bg-clip-text p-8 font-thunder'>20<br />&nbsp;23</p>

      </div>
      <div className='relative h-full w-full flex items-end p-10 font-bold font-satoshi'>
        <div className='flex flex-col w-full gap-2 font-medium'>
          <p className='text-gray-400'>COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</p>
          <p className='font-bold'>NOV 2023</p>
          <div className='flex flex-row items-center gap-3 w-full'>
            <p>24</p>
            <div className='h-0.5 w-10 bg-white'></div>
            <p>25</p>
            <div className='h-0.5 w-10 bg-white'></div>
            <p>26</p>
            <div className='h-0.5 w-[500px] bg-white'></div>
          </div>
        </div>
      </div>
    </div>

  )
}


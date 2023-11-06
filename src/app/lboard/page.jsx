
"use client"
import React from 'react';
import Image from 'next/image';
import AvatarIcon from "../../images/avatar.jpg"
import { motion } from 'framer-motion';


function page() {

  return (
    <div className=' items-start flex flex-col gap-2 max-w-screen h-screen justify-center '>
      <div className='w-full text-white flex justify-center items-center font-extrabold flex-col '>
        <motion.h1 className=' mt-4 pt-24  text-4xl md:text-7xl'
          whileHover={{ scale: 1.1 }}>
          LEADERBOARD
        </motion.h1>
        <div className='w-full flex justify-evenly items-center pt-8'>
          <div className='flex flex-col gap-2 items-center'>
            <Image src={AvatarIcon} width={100}
              height={100} className='rounded-full' />
            <p className=''>Second</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <Image src={AvatarIcon} width={150}
              height={150} className='rounded-full' />
            <p>First</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <Image src={AvatarIcon} width={80}
              height={80} className='rounded-full' />
            <p>Third</p>
          </div>

        </div>
      </div>
      <div className='w-full flex flex-grow py-5 justify-center px-[2rem] md:px-[12rem] '>
        <div className='bg-black rounded-lg w-full border-gray-500 border-[.15rem] px-5 py-3 gap-2 flex flex-col'>
          <motion.div whileHover={{ scale: 1.02 }} className='flex items-center justify-between gap-1 bg-slate-200 text-black  px-5 rounded-md'>
            <div className='w-1/2 flex gap-1 '>
              <p>5.</p>
              <div className='flex  flex-col '>
                <p className="font-bold font-mono">SAI</p>
                <p className='font-normal '>CUSAT</p>
              </div>
            </div>
            <div className='w-1/2 flex justify-end items-center'>
              <p>₹ 5000</p>
            </div>
          </motion.div>
        </div>
      </div>


    </div>
  )
}

export default page;
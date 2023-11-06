import React from 'react'
import line from '../images/line.png'
import Image from 'next/image'

export function Slide5() {
    return (
        <div className=' relative w-full h-full md:h-screen'>
            <div className='flex w-full'>
                <div className='flex flex- mx-auto justify-center items-center'>
                    <div></div>
                    dsg

                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex w-full md:w-1/4 h-full justify-center md:justify-end'>
                    <div className='flex items-end justify-end relative'>
                        <img src="Nikithaganfhi.jpg" alt="Nikithagandhi" className="w-full absolute top-0" />
                        <p className='relative text-7xl lh md:text-[120px] outline text-center md:text-left font-thunder tracking-wide italic leading-none'>
                            1ST <br />&nbsp;TIME
                        </p>
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-3/4 items-center py-10 px-8 md:px-24'>
                    <div className='flex flex-col w-full font-medium gap-2 flex-end '>
                        <p className='text-white text-md sm:text-2xl  font-light font-satoshi leading-none'>FOR THE FIRST TIME </p>
                        <p className='text-white text-5xl sm:text-[80px]  md: font-bold italic font-thunder leading-none'>&nbsp;NIKHITA GANDHI</p>
                        <p className='text-white text-md  sm:text-2xl text-right font-light font-satoshi leading-none md:text-center md:mr-48'>IN KERALA </p>
                    </div>
                    <div className='flex flex-row items-center gap-8 w-full font-medium font-satoshi flex-end '>
                        <div className='h-0.5  w-[300px] md:w-[600px] bg-white'></div>
                        <p className='text-white text-md sm:text-lg md:text-xl'>25th October</p>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Slide5

"use client";
import React, {Fragment, useEffect} from 'react'
import line from '../images/line.png'
import Image from 'next/image'


export function Slide4() {


    return (
        <Fragment>

            <div className=' relative w-full bg-auto flex flex-row  md:bg-no-repeat bg-center md:bg-right '>
                <div className='absolute opacity-70 bottom-10 rotate-180'>
                    <Image src={line} alt="line" className='hidden md:block w-[550px] lg:w-[650px] xl:w-[750px] '/>
                </div>
                <div className='absolute opacity-70 right-0 flip-horizontal top-10 '>
                    <Image src={line} alt="line" className='hidden md:block w-[550px] lg:w-[650px] xl:w-[750px] '/>
                </div>
                <div className='absolute h-10 w-10'>
                    {/* fix this later */}
                    <div className="circle1"></div>
                    <div className="circle1 ad13b  "></div>
                </div>
                <div
                    className='flex  flex-1 justify-center lg:justify-end items-center h-full sm:min-h-screen  py-16 md:px-24'>
                    <div className='text-white flex flex-col md:max-w-lg lg:max-w-3xl px-8 sm:px-8  md:gap-6'>
                        <p className='text-7xl  md:text-[120px] font-bold  text-center md:text-left font-thunder tracking-wide italic'>
                            CHAKRA
                        </p>
                        <p className=' text-xl md:text-2xl font-light leading-6 font-satoshi text-justify md:text-left'>
                            MECHANICAL DEPARTMENT
                        </p>
                        <p className='text-sm md:text-base font-normal leading-6 font-satoshi text-justify md:text-left py-2 md:py-6'>Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum pretium semper.
                            Suspendisse
                            potenti. Morbi quam leo, viverra sed porta vitae, elementum vel massa. Morbi sed molestie
                            velit,
                            viverra pretium lacus. Proin eu malesuada odio, id rutrum arcu. Proin condimentum, mi eget
                            pharetra porta, dui neque varius tellus, ut posuere turpis velit ut neque. Sed sed nisi id
                            arcu
                            cursus ornare in quis purus. Donec sagittis sapien et turpis vehicula, vel bibendum elit
                            accumsan.</p>
                    </div>
                </div>
                <div className='hidden lg:flex  flex-1 opacity-50  h-full sm:min-h-screen py-56 '>
                    <p className=' text-5xl sm:text-6xl  md:text-[120px] font-bold  text-center md:text-left font-thunder tracking-wide italic drop-shadow outline'>
                        CHAKRA
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Slide4

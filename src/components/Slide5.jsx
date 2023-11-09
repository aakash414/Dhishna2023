import React from 'react'
import line1 from '../images/line1.png'
import Image from 'next/image'
import realme from '../images/realme.png'
import Nikhita from '../images/Nikhita.png'

export function Slide5() {
    return (
        <div className=' relative w-full h-full'>
            <div className='flex w-full flex-col'>
                <div className='flex flex-col mx-auto justify-center items-center'>
                    <Image src={realme} alt="line" className='flex w-24 mx-auto '/>
                    <p className='text-white text-7xl sm:text-[120px] text-center font-bold italic pt-2 md:pt-8 font-thunder'>PRO
                        SHOW</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex-col md:flex-row flex w-full h-full'>
                        <div className='flex w-full md:w-1/2 h-full pt-4 justify-center md:justify-end'>
                            <div className='flex w-3/4 text-white'>
                                <p className='text-base font-normal leading-6 font-satoshi text-justify md:text-left py-2 md:py-6'>Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum pretium semper.
                                    Suspendisse potenti. Morbi quam leo, viverra sed porta vitae, elementum vel massa.
                                    Morbi sed molestie velit, viverra pretium lacus. Proin eu malesuada odio, id rutrum
                                    arcu. Proin condimentum, mi eget pharetra porta, dui neque varius tellus, ut posuere
                                    turpis velit ut neque. Sed sed nisi id arcu cursus ornare in quis purus. Donec
                                    sagittis sapien et turpis vehicula, vel bibendum elit accumsan.</p>
                            </div>

                        </div>
                        <div className='flex w-full md:w-1/2'>

                        </div>
                    </div>
                    <Image src={line1} alt="line" className='hidden md:flex w-[400px] mx-auto py-10'/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row pt-10'>
                <div className='flex w-full md:w-1/4 h-full justify-center md:justify-end'>
                    <div className='flex items-end jus md:justify-center relative w-full'>
                        <p className='relative text-7xl lh md:text-[120px] outline text-center md:text-left font-thunder tracking-wide italic leading-none'>
                            1ST <br/>&nbsp;TIME
                        </p>
                        <Image src={Nikhita} alt="Nikithagandhi"
                               className="absolute w-60 md:w-96 bottom-0 right-0 md:left-20 z-50" width={10000}/>
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-3/4 items-center py-6 md:py-10 px-2 md:px-24'>
                    <div className='flex flex-col w-full font-medium gap-2 flex-end '>
                        <p className='text-white text-md sm:text-2xl  font-light font-satoshi leading-none'>FOR THE
                            FIRST TIME </p>
                        <p className='text-white text-5xl sm:text-[80px]  md: font-bold italic font-thunder leading-none'>&nbsp;NIKHITA
                            GANDHI</p>
                        <p className='text-white text-md  sm:text-2xl text-right font-light font-satoshi leading-none md:text-center md:mr-48'>IN
                            KERALA </p>
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

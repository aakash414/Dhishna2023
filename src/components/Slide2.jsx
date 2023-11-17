import React from 'react'
import { FadeIn } from './FadeIn'

export function Slide2() {
    return (

        <div className=' relative w-full bg-auto  md:bg-no-repeat bg-center md:bg-right '
             style={{backgroundImage: "url('/D2023.png')"}}>
            <div className='flex md:w-7/12 justify-center md:justify-end items-center h-full sm:min-h-screen py-36'>
                <FadeIn className='text-white flex flex-col md:max-w-lg lg:max-w-3xl px-8 sm:px-8 '>

                    <p className=' text-5xl sm:text-6xl  md:text-7xl font-medium  text-center md:text-left font-thunder tracking-wide'>
                        THE REMARKABLE REVIVAL
                    </p>
                    <p className='text-base font-normal leading-6 font-satoshi text-left md:text-left'>Since our last
                        appearance in 2020, we&apos;ve kept a solemn silence. Now, it is 2023.
                        We rise from the ashes. Dhishna transcends being just a Tech Fest - it embodies a collective
                        spirit with a singular heartbeat.
                    </p>
                </FadeIn>
            </div>
            <div>

                <div className="hill"></div>
                <div className="hill2"></div>
            </div>


        </div>

    )
}

export default Slide2

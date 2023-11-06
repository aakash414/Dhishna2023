import React from 'react'
import line from '../images/line.png'
import Image from 'next/image'

export function Slide9() {
  return (
    <div className=' relative w-full bg-auto  md:bg-no-repeat bg-center md:bg-right '>

      <div className='absolute opacity-70 top-10 '>
        <Image src={line} alt="line" className='hidden md:block w-[550px] lg:w-[650px] xl:w-[750px] ' />
      </div>
      <div className='flex md:w-7/12 justify-center md:justify-end items-center h-full sm:min-h-screen py-36' >
        <div className='text-white flex flex-col md:max-w-lg lg:max-w-3xl px-8 sm:px-8 gap-6'>
          <p className='text-7xl  md:text-[120px] font-bold  text-center md:text-left font-thunder tracking-wide italic'>
            ROCKET
          </p>

          <p className='text-base font-normal leading-6 font-satoshi text-justify md:text-left py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum pretium semper. Suspendisse potenti. Morbi quam leo, viverra sed porta vitae, elementum vel massa. Morbi sed molestie velit, viverra pretium lacus. Proin eu malesuada odio, id rutrum arcu. Proin condimentum, mi eget pharetra porta, dui neque varius tellus, ut posuere turpis velit ut neque. Sed sed nisi id arcu cursus ornare in quis purus. Donec sagittis sapien et turpis vehicula, vel bibendum elit accumsan.</p>
        </div>
      </div>
      <div>
      </div>


    </div>
  )
}

export default Slide9

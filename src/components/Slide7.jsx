import React from 'react';
import Marquee from 'react-fast-marquee';
import Rect1 from '../images/Rectangle7.png';
import Rect2 from '../images/Rectangle8.png';
import Image from 'next/image';

export function Slide7() {
  return (
    <div className='py-8 relative h-screen overflow-hidden'>
      <div className='absolute w-full h-full flex items-center justify-center'>
        <p className='text-white text-4xl sm:text-2xl text-center text-semibold -translate-y-32 px-2  bg-[#AD13B2] font-
Satoshi'>
          WORKSHOPS
        </p>
        <div className='absolute w-full transform -skew-y-12 font-Thunder  italic font-weight-500 text-4xl font-bold whitespace-pre'>
          <Marquee
            speed={40}
            gradient={false}
            autoFill={false}
            pauseOnHover={false}
            pauseOnClick={true}
            className='text-[#020202] bg-[#FF7F08] w-screen  py-2'
          >
            CHECK OUT OUR WORKSHOPS & LECTURES     CHECK OUT OUR WORKSHOPS & LECTURES      CHECK OUT OUR WORKSHOPS & LECTURES     CHECK OUT OUR WORKSHOPS & LECTURES  
          </Marquee>
        </div>
        <div className='absolute w-full transform skew-y-12 font-Thunder font-weight-500 text-4xl font-bold whitespace-pre'>
          <Marquee
            speed={40}
            gradient={false}
            autoFill={false}
            direction='right'
            pauseOnHover={false}
            pauseOnClick={true}
            className='text-white bg-[#AD13B2] w-screen py-2'
          >
              CHECK OUT OUR WORKSHOPS & LECTURES     CHECK OUT OUR WORKSHOPS & LECTURES      CHECK OUT OUR WORKSHOPS & LECTURES     CHECK OUT OUR WORKSHOPS & LECTURES  
          
            </Marquee>
        </div>
       
      </div>
    </div>
  );
}

export default Slide7;

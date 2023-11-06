import React from 'react';
import Marquee from 'react-fast-marquee';

export function Slide7() {
  return (
    <div className='py-16 relative h-screen overflow-hidden'>
      <div className='absolute w-full h-full flex items-center justify-center'>
        <p className='text-white text-4xl sm:text-2xl text-center text-semibold -translate-y-28 px-4 py-1 bg-[#AD13B2] font-
Satoshi'>
          WORKSHOPS
        </p>
        <div className='absolute w-full transform -skew-y-12 font-Thunder  italic font-weight-500'>
          <Marquee
            speed={50}
            gradient={false}
            autoFill={true}
            pauseOnHover={false}
            pauseOnClick={true}
            className='text-[#020202] bg-[#FF7F08] w-screen  py-2'
          >
            Workshops and events
          </Marquee>
        </div>
        <div className='absolute w-full transform skew-y-12 font-Thunder  italic font-weight-500 py-8'>
          <Marquee
            speed={50}
            gradient={false}
            autoFill={true}
            direction={"right"}
            pauseOnHover={false}
            pauseOnClick={true}
            className='text-white bg-[#AD13B2] w-screen py-2'
          >
            Workshops and events
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Slide7;

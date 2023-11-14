"use client"
import React from 'react'
import line from '../images/line.png'
import Image from 'next/image'
import rocket from '../images/RocketImage.png'

export function Slide9() {
  const [animate, setAnimate] = React.useState(false)
  const componentRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
        const element = componentRef.current;

        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 600  && rect.bottom >= 0) {
                setAnimate(true)
            } else {
                setAnimate(false)
            }
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div ref={componentRef} className=' relative w-full bg-auto md:bg-no-repeat bg-center md:bg-right '>

      <div className='absolute opacity-70 top-10 '>
        <Image src={line} alt="line" className='hidden md:block w-[550px] lg:w-[650px] xl:w-[750px] ' />
      </div>
      <div className='flex flex-row'>
        <div className='flex md:w-1/2 justify-center md:justify-end items-center h-full sm:min-h-screen md:py-36 py-10  ' >
          <div className='text-white flex flex-col md:max-w-lg lg:max-w-3xl px-8 sm:px-8 gap-6 z-10'>
            <p className='text-7xl  md:text-[120px] font-bold  text-center md:text-left font-thunder tracking-wide italic'>
              ROCKET
            </p>

            <p className='text-base font-normal leading-6 font-satoshi text-justify md:text-left py-6'>Experience the marvel of our student-designed and engineered model rocket. This is a first-of-its-kind launch event in Kerala,
             presented by the students of SOE, CUSAT. Witness our mission to reach 10,000 
             feet in the air with precision-engineered solid motor rockets.</p>
          </div>
        </div>
        <div className=' absolute z-0 md:z-0 botto0 flex items-end md:relative md:block h-full my-auto' >

          <p className='hidden md:block text-5xl sm:text-6xl  md:text-[120px] font-bold font-thunder opacity-80 italic outline -rotate-90 leading-none'>
            ROCKET
          </p>
          <Image src={rocket} alt="rocket" className={` w-[550px] lg:w-[650px] xl:w-[750px] transform ${animate && 'rocketUp'}`} />
        </div>
      </div>


    </div>
  )
}

export default Slide9

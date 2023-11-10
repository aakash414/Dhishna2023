import React from 'react'
import Image from 'next/image'


export function Slide8() {
    return (
        // change font to thunder and fix size
        <div className='w-full h-full px-10 py-16'>
            <p className='text-white text-7xl sm:text-[120px] text-center font-bold italic py-8 font-thunder'>ROBO GAMES</p>
            <div className='flex flex-col sm:flex-row justify-between items-center md:items-start h-full w-full gap-y-16'>
                <div className='flex flex-1 items-end justify-end flex-col gap-16 font-satoshi'>
                    <div className='bg-[#FF7F08] w-48 h-12 -skew-x-[40deg] '>
                        <div className='bg-black w-48 h-12 -mt-[0.1rem] -ml-[0.2rem] relative hover:-translate-x-4 hover:-translate-y-1'>
                            <p className='text-white skew-x-[40deg]  italic font-bold text-2xl absolute -top-4 -left-8'>Robo War</p>
                        </div>
                    </div>
                    <div className='bg-[#AD13B2] w-48 h-12 -skew-x-[40deg] '>
                        <div className='bg-black w-48 h-12 -mt-[0.1rem] -ml-[0.2rem] relative hover:-translate-x-4 hover:-translate-y-1'>
                            <p className='text-white skew-x-[40deg]  italic font-bold text-2xl absolute -top-4 -left-8'>Robo Survival</p>
                        </div>
                    </div>
                    <div className='bg-[#FF7F08] w-48 h-12 -skew-x-[40deg] '>
                        <div className='bg-black w-48 h-12 -mt-[0.1rem] -ml-[0.2rem] relative hover:-translate-x-4 hover:-translate-y-1'>
                            <p className='text-white skew-x-[40deg]  italic font-bold text-2xl absolute -top-4 -left-8'>Robo Soccer</p>
                        </div>
                    </div>

                </div>
                <div className='md:flex w-2/5 justify-center text-white hidden '>
                <Image
                    src="../images/RoboImage.svg"
                    alt="roboimage"
                    className="bounce"
                    width={600}
                    height={300}
                    />
                </div>
                <div className='flex flex-1 justify-start flex-col gap-16'>
                    <div className='bg-[#AD13B2] w-48 h-12 -skew-x-[40deg] sm:skew-x-[40deg] '>
                        <div className='bg-black w-48 h-12 -mt-[0.1rem] -ml-[0.2rem] sm:ml-[0.2rem] relative sm:hover:translate-x-4 hover:-translate-x-4 hover:-translate-y-1'>
                            <p className='text-white skew-x-[40deg] sm:-skew-x-[40deg]  italic font-bold text-2xl absolute -top-4 -left-8 block sm:hidden'>Autonomy Race</p>
                            <p className='text-white skew-x-[40deg] sm:-skew-x-[40deg]  italic font-bold text-2xl absolute -top-4 -right-8 sm:block hidden'>Autonomy Race</p>
                        </div>
                    </div>
                    <div className='bg-[#FF7F08] w-48 h-12 -skew-x-[40deg] sm:skew-x-[40deg] '>
                        <div className='bg-black w-48 h-12 -mt-[0.1rem] -ml-[0.2rem] sm:ml-[0.2rem] relative sm:hover:translate-x-4 hover:-translate-x-4 hover:-translate-y-1'>
                            <p className='text-white skew-x-[40deg] sm:-skew-x-[40deg]  italic font-bold text-2xl absolute -top-4 -left-8 block sm:hidden'>Drag Race</p>
                            <p className='text-white skew-x-[40deg] sm:-skew-x-[40deg]  italic font-bold text-2xl absolute -top-4 -right-8 sm:block hidden'>Drag Race</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slide8
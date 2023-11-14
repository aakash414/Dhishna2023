import React from 'react'
import line from '../images/line.png'
import Image from 'next/image'
import Wheel from '../images/wheel2.png'
// import chakraImage from '../images/chakraImage.jpg'
import chakra from '../images/chakra1.png'

export function Slide4() {
    const [animate, setAnimate] = React.useState(false)
    const componentRef = React.useRef(null);

    React.useEffect(() => {
        const handleScroll = () => {
            const element = componentRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 600  && rect.bottom >= 0) {
                    setAnimate(true)
                    console.log("first")
                } else {
                    setAnimate(false)
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={componentRef}    className=' relative w-full bg-auto flex flex-row  md:bg-no-repeat bg-center md:bg-right '>
            <div className='absolute opacity-70 bottom-10 rotate-180'>
                <Image src={line} alt="line" className='block w-[550px] lg:w-[650px] xl:w-[750px] '/>
            </div>
            <div className='absolute opacity-70 right-0 flip-horizontal top-10 '>
                <Image src={line} alt="line" className='block w-[550px] lg:w-[650px] xl:w-[750px] '/>
            </div>
            <div className='absolute h-10 w-10'>
                {/* fix this later */}
                <div className="circle1"></div>
                <div className="circle1 ad13b  "></div>
            </div>
            {/* <div className='flex flex-row'>
            <div className='flex flex-row'>
            <div className={`ralative flex justify-center items-center transform -translate-x-[200px]`}>
                <Image src={Wheel} height={400} width={400} className='animate-spin duration-100 ease-in '/>
            </div>
            <div className='flex justify-center lg:justify-end items-center h-full sm:min-h-screen  py-16 md:px-24' >

                <div className='text-white flex flex-col md:max-w-lg lg:max-w-3xl px-8 sm:px-8  md:gap-6'>

                    <p className='text-7xl  md:text-[120px] font-bold  text-center md:text-left font-thunder tracking-wide italic'>
                        CHAKRA
                    </p>
                    <p className=' text-xl md:text-2xl font-light leading-6 font-satoshi text-justify md:text-left'>
                        MECHANICAL DEPARTMENT
                    </p>
                    <p className='text-sm md:text-base font-normal leading-6 font-satoshi text-justify md:text-left py-2 md:py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum pretium semper. Suspendisse potenti. Morbi quam leo, viverra sed porta vitae, elementum vel massa. Morbi sed molestie velit, viverra pretium lacus. Proin eu malesuada odio, id rutrum arcu. Proin condimentum, mi eget pharetra porta, dui neque varius tellus, ut posuere turpis velit ut neque. Sed sed nisi id arcu cursus ornare in quis purus. Donec sagittis sapien et turpis vehicula, vel bibendum elit accumsan.</p>
                </div>
            </div>
            </div>

            </div>
            <div className='hidden lg:flex  flex-1 opacity-50  h-full sm:min-h-screen py-56 ' >
                <p className=' text-5xl sm:text-6xl  md:text-[120px] font-bold  text-center md:text-left font-thunder tracking-wide italic drop-shadow outline'>
                    CHAKRA
                </p>
            </div>


        </div> */}
            <div className="flex md:flex-row flex-col mt-10">
                <div className="flex md:flex-row flex-row-reverse md:w-2/3 md:transform md:-translate-x-[200px]"> {/* Divide equally */}
                    <div className="md:relative absolute ` flex justify-center items-center">
                        <Image src={Wheel}  className="duration-100 ease-in md:hover:animate-pulse flex h-auto md:w-[500px] w-[10rem]   animate-spin"/>
                    </div>
                    <div
                        className="flex justify-center lg:justify-end items-center h-full sm:min-h-screen py-16 md:px-24">
                        <div className="text-white flex flex-col md:max-w-lg lg:max-w-3xl px-8 sm:px-8 md:gap-6">
                            <p className="text-7xl md:text-[120px] font-bold   text-left font-thunder tracking-wide italic">
                                CHAKRA
                            </p>
                            <p className="text-xl md:text-2xl font-light leading-6 font-satoshi text-justify md:text-left">
                                MESAC
                            </p>
                            <p className="text-sm md:text-base font-normal leading-6 font-satoshi text-justify md:text-left py-2 md:py-6">
                                If you are passionate about automobiles and innovations, then CHAKRA 3.0 is the event
                                for you. Featuring three dynamic events - Auto Show, Voice of CHAKRA, and CHAKRA
                                Dismantled - this is the ultimate gathering for gearheads. Witness ground-breaking
                                advancements, interact with celebrities and influencers who share your passion, and join
                                a vibrant community of car enthusiasts from all over. Get ready for an exhilarating
                                journey through auto-shows, exhibitions, and endless surprises!
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" lg:flex flex-col flex-1 opacity-100 h-full sm:min-h-screen md:py-56 md:pr-36 pb-24 p-5 md:pb-0 md:w-[90%] ml-26 block ">
                    <p className="text-5xl sm:text-6xl md:text-[120px] opacity-50 font-bold text-center md:text-left font-thunder tracking-wide italic drop-shadow outline">
                        CHAKRA
                    </p>
                    {/*<div className="text-opacity-100">*/}
                    <Image className={` md:transform ${animate &&'md:chakraRight'} w-full block`}  src={chakra} alt="chakraImage"  />
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Slide4

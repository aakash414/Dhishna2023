import React from 'react'
import './textrevolve.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const TextRevolve = () => {
    const tl = React.useRef();
    React.useEffect(() => {
        tl.current = gsap.timeline()
            .from(".line h1", 1.8, {
                y: 100,
                ease: "power4.out",
                delay: 1,
                skewY: 5,
                stagger: {
                    amount: 0.3
                }
            })
            .to('.line h1', 1.8, {
                y: -150,
                ease: "power4.out",
                delay: 3,
                skewY: 5,
                stagger: {
                    amount: 0.3
                }
            })
        ScrollTrigger.create({
            trigger: ".line h1", // Use a different trigger element if needed
            start: "top 80%", // Adjust as needed
            end: "top 20%", // Adjust as needed
            animation: tl.current,
            scrub: true, // Adjust as needed
            markers: true, // Remove this line in production
        });
    }, [])
  return (
    <div className='relative h-screen bg-transparent flex justify-center mt-[35vh]'>
        <div className=''>
            <div class="container">
                <div class="line">
                    <h1 className='text-white text-[100px] font-thunder tracking-wide font-medium'>Hello!</h1>
                </div>
                <div class="line">
                    <h1 className='text-white text-[100px] font-thunder tracking-wide font-medium'>This is a</h1>
                </div>
                <div class="line">
                    <h1 className='text-white text-[100px] font-thunder tracking-wide font-medium'>text reveal animation.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextRevolve
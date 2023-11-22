import React from 'react'
import './textrevolve.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const TextRevolve = () => {
    const t1 = React.useRef();
    const t2 = React.useRef();
    const t3 = React.useRef();
    React.useEffect(() => {
        // console.log('executed')
        t1.current = gsap.timeline()
        t2.current = gsap.timeline()
        t3.current = gsap.timeline()

        t1.current.from(".line .line1", 1.5,
            {
                y: 200,
                ease: "power4.out",
                delay: 0.5,
                skewY: 5,
                stagger: {
                    amount: 0.3
                }
            })
            .to('.line .line1', 1.5, {
                y: -250,
                ease: "power4.out",
                opacity: 0,
                delay: 0.5,
                skewY: 10,
                rotationX: -100,
                stagger: {
                    amount: 0.3
                }
            })
        t2.current.from(".line .line2", 1.5,
            {
                y: 200,
                ease: "power4.out",
                delay: 2,
                skewY: 5,
                stagger: {
                    amount: 0.3
                }
            })
            .to('.line .line2', 1.5, {
                y: -250,
                opacity: 0,
                ease: "power4.out",
                delay: 0.5,
                skewY: 0,
                rotationX: -100,
                stagger: {
                    amount: 0.3
                }
            })
        t3.current.from(".line .line3", 1.5,
            {
                y: 200,
                ease: "power4.out",
                delay: 4,
                skewY: 5,
                stagger: {
                    amount: 0.3
                }
            })
            .to('.line .line3', 1.5, {
                y: -250,
                opacity: 0,
                ease: "power4.out",
                delay: 0.5,
                skewY: 0,
                rotationX: -100,
                stagger: {
                    amount: 0.3
                }
            })
            ScrollTrigger.create({
                trigger: ".line .line1",
                start: "top 120%",
                end: "top 20%",
                animation: t1.current,
                scrub: true,
                
            });
            ScrollTrigger.create({
                trigger: ".line .line2",
                start: "top 120%",
                end: "top 20%",
                animation: t2.current,
                scrub: true,
                
            });
            ScrollTrigger.create({
                trigger: ".line .line3",
                start: "top 140%",
                end: "top 20%",
                animation: t3.current,
                scrub: true,
                
            });
    }, [])
  return (
    <div className='min-h-screen mb-[400px] md:mb-[500px] relative'>
        <div className='absolute top-[200px] bg-transparent flex justify-center'>
            <div class="container">
                <div class="line">
                    <h1 className='line1 text-white text-[70px] sm:text-[100px] md:text-[200px] font-thunder tracking-wide font-medium'>THE</h1>
                </div>
                <div class="line">
                    <h1 className='line2 text-white text-[70px] sm:text-[100px] md:text-[200px] font-thunder tracking-wide font-medium'>
                        REMARKABLE
                    </h1>
                </div>
                <div class="line">
                    <h1 className='line3 text-white text-[70px] sm:text-[100px] md:text-[200px] font-thunder tracking-wide font-medium'>REVIVAL</h1>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default TextRevolve
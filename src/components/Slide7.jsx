"use client";
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import Marquee from 'react-fast-marquee';

export function Slide7() {

    const [scrollDirection, setScrollDirection] = useState('down');
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {

            const scrollTop = window.scrollY || window.pageYOffset;


            if (scrollTop > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }

            lastScrollTop = scrollTop;
            setIsScrolling(true)
            setTimeout(() => {
                setIsScrolling(false)
            }, 300)
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
            setIsScrolling(false)
        };
    }, []);

    const isScrollingDown = scrollDirection === 'down';

    return (
        <div className='py-8 relative h-screen overflow-hidden'>
            <div className='absolute w-full h-full flex items-center justify-center'>
            <Link href='/workshop'>
                <p className='text-white text-4xl sm:text-2xl text-center text-semibold -translate-y-32 px-2  bg-[#AD13B2] font-
Satoshi'>
                    WORKSHOPS
                </p>
                </Link>
                <div
                    className='absolute w-full transform -skew-y-12 font-Thunder  italic font-weight-500 text-4xl font-bold whitespace-pre'>
                    <Marquee
                        id="marquee1"
                        speed={100}
                        gradient={false}
                        autoFill={false}
                        play={isScrolling}
                        className='text-[#020202] bg-[#FF7F08] w-screen  py-2'
                        direction={isScrollingDown ? 'left' : 'right'}
                    >
                        CHECK OUT OUR WORKSHOPS & LECTURES CHECK OUT OUR WORKSHOPS & LECTURES CHECK OUT OUR WORKSHOPS &
                        LECTURES CHECK OUT OUR WORKSHOPS & LECTURES
                    </Marquee>
                </div>
                <div
                    className='absolute w-full transform skew-y-12 font-Thunder font-weight-500 text-4xl font-bold whitespace-pre'>
                    <Marquee
                        speed={100}
                        gradient={false}
                        autoFill={false}
                        play={isScrolling}
                        className='text-white bg-[#AD13B2] w-screen py-2'
                        direction={isScrollingDown ? 'right' : 'left'}
                    >
                        CHECK OUT OUR WORKSHOPS & LECTURES CHECK OUT OUR WORKSHOPS & LECTURES CHECK OUT OUR WORKSHOPS &
                        LECTURES CHECK OUT OUR WORKSHOPS & LECTURES

                    </Marquee>
                </div>

            </div>
        </div>
    );
}

export default Slide7;

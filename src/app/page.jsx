"use client"
import React, {useState, useRef} from 'react';
import {Slide1} from '@/components/Slide1';
import {Slide2} from '@/components/Slide2';
import {Slide3} from '@/components/Slide3';
import {Slide8} from '@/components/Slide8';
import {Slide7} from '@/components/Slide7';
import Slide4 from '@/components/Slide4';
import Slide9 from '@/components/Slide9';
import Slide5 from '@/components/Slide5';
import useMouse from "@react-hook/mouse-position";
import {motion} from "framer-motion";
import VideoBackground from '@/components/VideoBackground';


function page() {


    const [cursorVariant, setCursorVariant] = useState("default");

    const ref = useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 1,
            height: 0,
            width: 0,
            fontSize: "16px",
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            },
            cursor: "pointer"
        },
        chakra: {
            opacity: 1,
            backgroundColor: "#FF6D2B",
            color: "#000",
            height: 80,
            width: 80,
            fontSize: "18px",
            x: mouseXPosition - 32,
            y: mouseYPosition - 32
        },
        workshop: {
            opacity: 1,
            backgroundColor: "#DE397D",
            color: "#000",
            height: 64,
            width: 64,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48
        },
        proshow: {
            opacity: 1,
            backgroundColor: "#3280E1",
            color: "#000",
            height: 72,
            width: 72,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48
        },
        rocket: {
            opacity: 1,
            backgroundColor: "#28E024",
            color: "#000",
            height: 90,
            width: 90,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48,
            cursor: "none"
        },
        robo: {
            opacity: 1,
            backgroundColor: "#28E024",
            color: "#000",
            height: 90,
            width: 90,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48,
        }
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    function chakraEnter(event) {
        setCursorVariant("chakra");
    }

    function chakraLeave(event) {

        setCursorVariant("default");
    }

    function proshowEnter(event) {

        setCursorVariant("proshow");
    }

    function proshowLeave(event) {

        setCursorVariant("default");
    }

    function workshopEnter(event) {

        setCursorVariant("workshop");
    }

    function workshopLeave(event) {

        setCursorVariant("default");
    }

    function rocketEnter(event) {

        setCursorVariant("rocket");
    }

    function rocketLeave(event) {

        setCursorVariant("default");
    }

    const isMobile = window.matchMedia("(max-width: 768px)").matches;


    return (

        <div className=' relative' ref={ref}>
            {isMobile && <VideoBackground/>}
            <Slide1/>
            <Slide2/>
            <Slide3/>
            <motion.div
                variants={variants}
                className="circle"
                animate={cursorVariant}
                transition={spring}
            >
                <p className="cursorText"></p>

            </motion.div>
            <div className='container'>
                <div onMouseEnter={chakraEnter} onMouseLeave={chakraLeave}>
                    <Slide4/>
                </div>
                <div onMouseEnter={proshowEnter} onMouseLeave={proshowLeave}>
                    <Slide5/>
                </div>
                <div onMouseEnter={workshopEnter} onMouseLeave={workshopLeave}>
                    <Slide7/>
                </div>
            </div>
            <Slide8/>
            <div className='container'>
                <div onMouseEnter={rocketEnter} onMouseLeave={rocketLeave}>
                    <Slide9/>
                </div>
            </div>
        </div>
    )
}

export default page

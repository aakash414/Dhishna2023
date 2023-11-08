"use client"
import React ,{ useState }  from 'react';
import { Slide1 } from '@/components/Slide1';
import { Slide2 } from '@/components/Slide2';
import { Slide3 } from '@/components/Slide3';
import { Slide8 } from '@/components/Slide8';
import { Slide7 } from '@/components/Slide7';
import Slide4 from '@/components/Slide4';
import Slide9 from '@/components/Slide9';
import Slide5 from '@/components/Slide5';
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";



function page() {  


  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
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
      height: 10,
      width: 10,
      fontSize: "16px",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6
      }
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
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48
    },
    proshow: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48
    },
    rocket: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48
    },
    robo: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48
    }
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };

  function chakraEnter(event) {
    setCursorText("View");
    setCursorVariant("chakra");
  }

  function chakraLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function proshowEnter(event) {
    setCursorText("👋");
    setCursorVariant("proshow");
  }

  function proshowLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function workshopEnter(event) {
    setCursorText("👋");
    setCursorVariant("workshop");
  }

  function workshopLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }
  function rocketEnter(event) {
    setCursorText("👋");
    setCursorVariant("rocket");
  }

  function rocketLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }function roboEnter(event) {
    setCursorText("👋");
    setCursorVariant("robo");
  }

  function roboLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }


    
    return (

    <div className='bg-black relative container' ref={ref}>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
        <Slide1 />
        <Slide2/>
        <Slide3/>
        <div onMouseEnter={chakraEnter} onMouseLeave={chakraLeave}>
        <Slide4/>
        </div>
        <div onMouseEnter={proshowEnter} onMouseLeave={proshowLeave}>
        <Slide5/>
        </div>
        <div onMouseEnter={workshopEnter} onMouseLeave={workshopLeave}>
        <Slide7/>
        </div>
        <div onMOuseEnter={roboEnter} onMouseLeave={roboLeave}>
        <Slide8/>
        </div>
        <div onMouseEnter={rocketEnter} onMouseLeave={rocketLeave}>
        <Slide9/>
        </div>

    </div>

  )
}

export default page
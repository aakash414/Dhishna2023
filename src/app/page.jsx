"use client"
import React from 'react';
import {Slide1} from '@/components/Slide1';
import {Slide2} from '@/components/Slide2';
import {Slide3} from '@/components/Slide3';
import {Slide8} from '@/components/Slide8';
import {Slide7} from '@/components/Slide7';
import Slide4 from '@/components/Slide4';
import Slide9 from '@/components/Slide9';
import Slide5 from '@/components/Slide5';


function page() {


    return (
        <div className='relative '>
            <Slide1/>
            <Slide2/>

            {/*<div className="">*/}
            {/*    <video*/}
            {/*        // ref={videoRef}*/}
            {/*        src="/chakra.mp4"*/}
            {/*        playsInline={true}*/}
            {/*        webkit-playsinline={true}*/}
            {/*        preload="auto"*/}
            {/*        muted="muted"*/}
            {/*        className=""*/}
            {/*        id="hero-video"*/}
            {/*    ></video>*/}
                <Slide3/>
                <Slide4/>
                <Slide5/>

                <Slide7/>
                <Slide8/>
                <Slide9/>
            {/*</div>*/}

        </div>
    )
}

export default page

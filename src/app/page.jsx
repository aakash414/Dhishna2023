"use client"
import React from 'react';
import { Slide1 } from '../components/Slide1';
import { Slide2 } from '../components/Slide2';
import { Slide3 } from '../components/Slide3';
import { Slide8 } from '@/components/Slide8';
import { Slide7 } from '@/components/Slide7';


function page() {  


    
    return (
    <div className='bg-black relative '>
      <Slide1/>
      <Slide2/>
      <Slide3/>
      <Slide8/>
      <Slide7/>

      

    </div>
  )
}

export default page
// "use client"
// import React,{useState,useEffect} from 'react';
// import { Container } from '@/components/Container';
// import { FadeInStagger } from '@/components/FadeIn';
// import { FadeIn } from '@/components/FadeIn';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Tilt } from 'react-tilt'
// // import car from '../../images/ar.png'
// // import { GlowCapture,Glow } from '@codaworks/react-glow';
// import Eventscard from '@/components/Eventscard';
// import client from '@/client';

// function page() {  

//   const [data, setData] = useState(null)

//   let fetchcount=2
//   useEffect(() => {
//     client.fetch(`*[_type == "events"]`)
//       .then((data) => {
//         console.log("Received data:", data);
//         setData(data);
//         fetchcount--;
//       }) // <- Added closing parenthesis here
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [fetchcount]);
  
  

//     console.log("data",data)
//           const defaultOptions = {
//             reverse:        true,  // reverse the tilt direction
//             max:            50,     // max tilt rotation (degrees)
//             perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
//             scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
//             speed:          1000,   // Speed of the enter/exit transition
//             transition:     true,   // Set a transition on enter/exit.
//             axis:           null,   // What axis should be disabled. Can be X or Y.
//             reset:          true,    // If the tilt effect has to be reset on exit.
//             easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
//         }
//         const h1Styles = {
//           color: 'black',
//           WebkitTextFillColor: 'black',
//           WebkitTextStrokeWidth: '1px',
//           WebkitTextStrokeColor: 'white',
//         };
    
//     return (
//     <div className='bg-black relative event-bg flex flex-col justify-center items-center overflow-x-hidden'>
//       <div className='h-30 w-screen flex justify-center items-center top-0 '>
//         <div class=" h-[30%] text-black p-20 flex justify-center items-center z-10 bg-white w-screen top-0 rounded-b-[30px] ">
//           <span className='text-7xl font-bold'>E</span>
//           <span className='text-7xl font-bold'>V</span>
//           <div class="letter flex justify-center items-center mx-3 top-0">
//             <hr/>
//           </div>
//           <span className='text-7xl font-bold'>N</span>
//           <span className='text-7xl font-bold'>T</span>
//           <span className='text-7xl font-bold'>S</span>
//         </div>
//       </div>
//       <div className=''> 
//       <form className='mt-10 flex justify-center items-center w-full relative pt-5'>
//             <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
//             <div className="relative w-full flex justify-center items-center">
//               <input
//                 type="search"
//                 id="default-search"
//                 className="block w-[70%] p-3 pl-10 text-sm  border border-gray-300 rounded-full bg-black text-white"
//                 placeholder="Search Events"
//                 required
//               />
//             </div>
//           </form>

//           <div className="grid grid-cols-3 gap-4 p-36">
//           {data && 
//             data.map((event) => (
//               event.icon && (
//                 <div className='p-16 container'>
//                   <Tilt>
//                     <Eventscard key={event.event_code} event={event} />
//                   </Tilt>
//                 </div>)
//             ))
//           }
//           </div>

//       <div className='h-screen w-32  flex-col items-end fixed top-0 left-0 md:flex hidden' >
//           <marquee
//             direction="down"
//             behavior="scroll"
//             scrollamount="5"
//             className='h-full'
           
//           >
//           <h1 className='text-6xl font-bold text-transparent transform -rotate-90 mt-2 relative ' style={h1Styles}>
//             <pre className='text-white'>
//               <span className='text-stroke font-display' style={{ position: 'relative', zIndex: 1 }}>
//                 EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
//               </span>
//             </pre>
//           </h1>

//           </marquee>
//         </div>
//             <div>

//             </div>
//       <div className='h-screen w-32  flex-col items-end fixed top-0 right-0 md:flex hidden'>
//         <marquee
//           direction="up"
//           behavior="scroll"
//           scrollamount="5"
//           className='h-full'
//           loop='infinite'
//         >
//           <h1 className='text-6xl text-white transform rotate-90 mt-8 font-display' style={h1Styles}>
//             <pre className='font-display'>
//               EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
//             </pre>
//           </h1>
//           {/* Add more events as needed */}
//         </marquee>
//       </div>

//       <div>
        
//     </div>
//       </div>
//     </div>
//   )
// }

// export default page

import React from 'react';

const ComingSoonCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-6">We're working on something amazing! Stay tuned for updates.</p>
        <div className="flex justify-center">
          {/* <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 cursor-pointer">
            Subscribe
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;

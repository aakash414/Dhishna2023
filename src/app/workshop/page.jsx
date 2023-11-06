// "use client"
// import React, {Fragment} from 'react';
// import {Container} from '@/components/Container';
// import {FadeInStagger} from '@/components/FadeIn';
// import event from '../../images/ws1.jpg';
// import {FadeIn} from '@/components/FadeIn';
// import Link from 'next/link';
// import Image from 'next/image';
// import '@/styles/base.css'
// import WorkshopCard from "@/components/WorkshopCard";
// import Workshoptitle from "@/components/Workshopstitle"
// import client from '../../client';

// function Page() {
//     const [data, setData] = React.useState(null)
//     React.useEffect(() => {
//         client.fetch(`*[_type == "workshop"]{
//           title,
//           event_type,
//           event_code,
//           event_pay_type,
//           icon,
//           details,
//           price,
//           register
//         }`).then((data) => {
//           setData(data)
//           console.log(data)
          
//         }).catch(console.error)
//       }, [])
//       console.log(data)
//     const dummyData = [
//         {
//             href: '/case-study-1',
//             logo: event,
//             client: 'Client 1',
//             date: '2023-01-01',
//             title: 'Case Study 1 Title',
//             description: 'The event is a pre-event for the Robofrenzy Competition under Dhishna by IEEE CUSAT SB . ',
//         },
//         {
//             href: '/case-study-2',
//             logo: event,
//             client: 'Client 2',
//             date: '2023-02-15',
//             title: 'Case Study 2 Title',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
//         },
//         {
//             href: '/case-study-3',
//             logo: event,
//             client: 'Client 3',
//             date: '2023-03-15',
//             title: 'Case Study 3 Title',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
//         },
//         {
//             href: '/case-study-4',
//             logo: event,
//             client: 'Client 4',
//             date: '2023-03-15',
//             title: 'Case Study 4 Title',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
//         },
//         {
//             href: '/case-study-1',
//             logo: event,
//             client: 'Client 1',
//             date: '2023-01-01',
//             title: 'Case Study 1 Title',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
//         },
//         {
//             href: '/case-study-2',
//             logo: event,
//             client: 'Client 2',
//             date: '2023-02-15',
//             title: 'Case Study 2 Title',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
//         },
//         {
//             href: '/case-study-3',
//             logo: event,
//             client: 'Client 3',
//             date: '2023-03-15',
//             title: 'Case Study 3 Title',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
//         },
//         {
//             href: '/case-study-4',
//             logo: event,
//             client: 'Client 4',
//             date: '2023-03-15',
//             title: 'Case Study 4 Title',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
//         },
//     ];

//     return (
//       <div className='bg-black'> 
       
//         <Fragment>
//         <div className='ml-20 '>
//          <Workshoptitle/>
//         </div>
//             <div className="flex items-center  justify-center flex-wrap p-10 ">
            
//                 {dummyData.map((data, index) => (
//                     <div className="m-3" key={index}><WorkshopCard data={data}/></div>
//                 ))
//                 }
//             </div>
//         </Fragment>
//         </div>
//     );
// }

// export default Page;

"use client"
import React, { useEffect, useState } from 'react';
import WorkshopCard from "@/components/WorkshopCard";
import Workshoptitle from "@/components/Workshopstitle"
import client from '../../client';

function Page() {
  const [data, setData] = useState([]);


  
  useEffect(() => {
    client
      .fetch('*[_type == "workshop"]')
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);
  console.log(data)
  return (
    <div className='bg-black'> 
      <div className='ml-20  '>
        <Workshoptitle/>
      </div>
      <div className="flex items-center  justify-center flex-wrap p-10 ">
        {data.map((workshop, index) => (
          <div className="m-3" key={index}>
            <WorkshopCard data={workshop}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
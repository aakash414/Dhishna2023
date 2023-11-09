

// "use client"
// import React, { useEffect, useState } from 'react';
// import WorkshopCard from "@/components/WorkshopCard";
// import Workshoptitle from "@/components/Workshopstitle"
// import client from '../../client';
// import Link from 'next/link';


// function Page() {
//   const [data, setData] = useState([]);



//   useEffect(() => {
//     client
//       .fetch('*[_type == "workshop"]')
//       .then((data) => {
//         setData(data);
//       })
//       .catch(console.error);
//   }, []);

//   console.log(data)
//   return (
//     <div className='bg-black '>
//       <div className='mx-auto '>
//         <Workshoptitle/>
//       </div>

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
//       <div className="flex items-center  justify-center flex-wrap p-10 ">
//         {data.map((workshop, index) => (
//           <div className="m-3" key={index}>
//              <Link href={`/workshop/${workshop.event_code}`}>
//             <WorkshopCard data={workshop}/>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page;




"use client"
import React, { useEffect, useState } from 'react';
import WorkshopCard from "@/components/WorkshopCard";
import Workshoptitle from "@/components/Workshopstitle"
import client from '../../client';
import Link from 'next/link';

function Page() {
  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    client
      .fetch('*[_type == "workshop"]')
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  }, []);

const filteredData = data.filter(workshop =>
  workshop.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  console.log(data)
  return (
    <div className='bg-black z-10'>
      <div className='mx-auto  '>
        <Workshoptitle/>
      </div>
      {/*  <div className='h-30 w-screen flex justify-center items-center top-0 '>*/}
      {/*      <div className="h-[30%] text-black p-20 flex justify-center items-center z-[999] bg-white w-screen top-0 rounded-b-[30px] ">*/}
      {/*          <span className='text-7xl font-bold'>W</span>*/}
      {/*          <span className='text-7xl font-bold'>O</span>*/}
      {/*          <span className='text-7xl font-bold'>R</span>*/}
      {/*          <span className='text-7xl font-bold'>S</span>*/}
      {/*          <div className="letter flex justify-center items-center mx-3 top-0">*/}
      {/*              <hr />*/}
      {/*          </div>*/}

      {/*          <span className='text-7xl font-bold'>H</span>*/}
      {/*          <span className='text-7xl font-bold'>O</span>*/}
      {/*          <span className='text-7xl font-bold'>P</span>*/}
      {/*          <span className='text-7xl font-bold'>S</span>*/}
      {/*      </div>*/}
      {/*  </div>*/}
        <form className='mt-10 flex justify-center items-center w-full relative pt-5'>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div className="relative w-full flex justify-center items-center">
        <input
          type="search"
          id="default-search"
          className="block w-[70%] p-3 pl-10 text-sm  border border-gray-300 rounded-full bg-black text-white"
          placeholder="Search Events"
          required
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    </form>

    <div className="flex items-center  justify-center flex-wrap p-10 ">
      {filteredData.map((workshop, index) => (
          <div className="m-3" key={index}>
             <Link href={`/workshop/${workshop.event_code}`}>
            <WorkshopCard data={workshop}/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;

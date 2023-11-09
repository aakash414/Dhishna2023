"use client"

import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
import { Tilt } from 'react-tilt';
// import Eventscard from '@/components/Eventscard';
import client from '@/client';
import Link from 'next/link';
import WorkshopCard from '@/components/WorkshopCard';

function Page() {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  let fetchcount = 2;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "events"]`);
        console.log("Received data:", result);
        setData(result);
        fetchcount--;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchcount]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredData = data
    ? data.filter((event) =>
        event.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  const h1Styles = {
    color: 'black',
    WebkitTextFillColor: 'black',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: 'white',
  };

  return (
    <div className='bg-black relative event-bg flex flex-col justify-center items-center overflow-x-hidden'>
      <div className='h-30 w-screen flex justify-center items-center top-0 '>
        <div className="h-[30%] text-black p-20 flex justify-center items-center z-[999] bg-white w-screen top-0 rounded-b-[30px] ">
          <span className='text-7xl font-bold'>E</span>
          <span className='text-7xl font-bold'>V</span>
          <div className="letter flex justify-center items-center mx-3 top-0">
            <hr />
          </div>
          <span className='text-7xl font-bold'>N</span>
          <span className='text-7xl font-bold'>T</span>
          <span className='text-7xl font-bold'>S</span>
        </div>
      </div>
      <div className=''>
        <form className='mt-10 flex justify-center items-center w-full relative pt-5'>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative w-full flex justify-center items-center">
            <input
              type="search"
              id="default-search"
              className="block w-full md:w-[70%] p-3 pl-10 text-sm border border-gray-300 rounded-full bg-black text-white"
              placeholder="Search Events"
              value={searchInput}
              onChange={handleInputChange}
              required
            />
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 md:p-42">
            {filteredData.map((event) => (
              event.icon && (
                <Link href={`/events/${event.event_code}`} key={event.event_code}>
                  <div className='   md:p-10 justify-center items-center flex p-10' key={event.event_code}>
                    <Tilt>
                      <WorkshopCard data={event} />
                    </Tilt>
                  </div>
                </Link>
              )
            ))}
          </div>
        <div className='h-screen w-full md:w-32 flex-col items-end fixed top-0 left-0 md:flex hidden'>
          <marquee
            direction="down"
            behavior="scroll"
            scrollamount="5"
            className='h-full'
          >
            <h1 className='text-6xl font-bold text-transparent transform -rotate-90 mt-2 relative ' style={h1Styles}>
              <pre className='text-white'>
                <span className='text-stroke font-display' style={{ position: 'relative', zIndex: 1 }}>
                  EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
                </span>
              </pre>
            </h1>
          </marquee>
        </div>

        <div className='h-screen w-full md:w-32 flex-col items-end fixed top-0 right-0 md:flex hidden'>
          <marquee
            direction="up"
            behavior="scroll"
            scrollamount="5"
            className='h-full'
            loop='infinite'
          >
            <h1 className='text-6xl text-white transform rotate-90 mt-8 font-display' style={h1Styles}>
              <pre className='font-display'>
                EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              </pre>
            </h1>
          </marquee>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Page;

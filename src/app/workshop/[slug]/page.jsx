"use client"
import client from '../../../client';
import React, { useEffect, useState } from 'react';
import  imageUrlBuilder  from '@sanity/image-url';



function Page() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'short' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    const builder = imageUrlBuilder(client);

    function urlFor(source) {
       // console.log("source",source)
        return builder.image(source);
    }



    useEffect(() => {
        // Fetch the data from Sanity when the component mounts
        client
            .fetch(
                `*[_type == "workshop"]{
          title,
          event_code,
          icon,
          details,
          start_date,
          price,
          venue,
          ticket_end_date,
          register,
          terms_and_conditions
        }`
            )
            .then((eventData) => {
               // console.log("Received data:", eventData);
            // Filter the data to find the item with a matching event_code
            const filteredData = eventData.filter((event) => event.event_code == slug);

            if (filteredData.length > 0) {
                setData(filteredData);
                // console.log("Received filtered data:", filteredData);
                setLoading(false);
                console.log("data",data)

            } else {
                setLoading(true);
                // console.error("Data not found for slug:", slug);
            }
        })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
       
    }, []);

    let slug;

    useEffect(()=>{
        slug = window.location.href.split('/').pop();
    },[])

    console.log("slug",slug);
    console.log("data",data)
        // useEffect(() => {
    //     // Fetch data of the event using the slug
    //     client
    //         .fetch(
    //             `*[_type == "workshop" && event_code == "${slug}"]{
    //       title,
    //       event_code,
    //       icon,
    //       details,
    //       start_date,
    //       price,
    //       venue
    //     }`
    //         )
    //         .then((data) => {
    //             setData(data);
    //             console.log("Received filtered data:", data)
    //         })
    //         .catch(console.error);
    // }, [slug]);
    return (
        <div className="py-24 sm:py-32 bg-gray-950">
            <div className="px-6 mt-8 lg:px-8">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data && (
                        <div className="md:mx-10 mx-4 flex lg:flex-row flex-col justify-center items-start gap-x-16 gap-y-14 md:gap-y-14 sm:gap-y-8  lg:mx-0 lg:max-w-none  ">
                            <div className="overflow-hidden h-auto w-auto rounded-3xl bg-gray-900 shadow-2xl">
                                {/*<img className="object-cover" src={urlFor(data[0].icon).width(500).height(300).url()} alt="" />*/}

                                <img src={urlFor(data[0].icon).width(720).height(720).url()} className={"object-cover object-center  group-hover:scale-90 transition duration-300 ease-in-out"}/>

                            </div>
                            <div>
                                <div className="text-base leading-7 text-gray-300 lg:max-w-lg">
                                    <p className="text-base font-satoshi font-semibold leading-7 text-orange-600">
                                        {data[0].title}
                                    </p>
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                                        {data[0].title}
                                    </h1>
                                    <div className="max-w-xl">
                                        <p className="mt-6">{data[0].details}</p>
                                        <p className="mt-6">{data[0].terms_and_conditions}</p>
                                    </div>
                                </div>
                                <div className="mt-8 lg:col-span-2 col-span-1 border-t border-gray-300/10 pt-10 sm:col-span-4 font-satoshi">
                                    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                                        <div className=" text-2xl font-semibold leading-6 text-gray-200">
                                            <dt>Last Date</dt>
                                        </div>
                                        <div className="text-2xl font-semibold leading-6 text-gray-200">
                                            <dt>Date</dt>
                                        </div>
                                        <div className="text-2xl font-semibold leading-6 text-gray-200">
                                            <dt>Fee</dt>
                                        </div>
                                        <div className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">
                                            {formatDate(data[0].ticket_end_date)}
                                        </div>
                                        <div className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">
                                            {formatDate(data[0].start_date)}
                                        </div>
                                        <div className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">
                                            {data[0].price}
                                        </div>
                                        <div className=" font-semibold text-2xl self-center leading-6 text-gray-200">
                                            <dt >Venue</dt>
                                        </div>
                                        <div className="mt-2 text-3xl col-span-2 font-bold leading-10 tracking-tight text-gray-400">
                                            {data[0].venue}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex lg:justify-start justify-center mt-6">
                                    <a href={data[0].register} target="_blank" >
                                <button type="button" className="text-gray-200 bg-gray-500/25 border-2  hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-semibold rounded-lg text-2xl font-satoshi px-5 py-2.5 text-center inline-flex justify-self-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mt-4 mb-2" >
                                    Register Here
                                </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Page;


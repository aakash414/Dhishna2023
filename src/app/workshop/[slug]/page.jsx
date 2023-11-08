"use client"
import client from '../../../client';
import React, { useEffect, useState } from 'react';
import { imageUrlBuilder } from '@sanity/image-url';



function Page() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // const builder = imageUrlBuilder(client)

    // function urlFor(source) {
    //     return builder.image(source);
    // }



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
          venue
        }`
            )
            .then((eventData) => {
                console.log("Received data:", eventData);
            // Filter the data to find the item with a matching event_code
            const filteredData = eventData.filter((event) => event.event_code == slug);

            if (filteredData.length > 0) {
                setData(filteredData);
                console.log("Received filtered data:", filteredData);
                setLoading(false);
            } else {
                setLoading(false);
                console.error("Data not found for slug:", slug);
            }
        })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const slug = window.location.href.split('/').pop();
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
        <div className="py-24 sm:py-32">
            <div className="px-6 lg:px-8">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data && (
                        <div className="mx-10 flex lg:flex-row flex-col justify-center items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none">
                            <div className="overflow-hidden h-fit w-auto rounded-3xl bg-gray-900 shadow-2xl">
                                {/*<img className="object-cover" src={urlFor(data[0].icon).width(500).height(300).url()} alt="" />*/}
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
                                    </div>
                                </div>
                                <dl className="mt-8 grid grid-cols-2 gap-8 border-t border-gray-300/10 pt-10 sm:grid-cols-4 font-satoshi">
                                    <div>
                                        <dt className="text-sm font-semibold leading-6 text-gray-300">Last Date</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">25 Nov</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-semibold leading-6 text-gray-300">Date</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">
                                            {data[0].start_date}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-semibold leading-6 text-gray-300">Fee</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">
                                            {data.price}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-semibold leading-6 text-gray-300">Venue</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">
                                            {data.venue}
                                        </dd>
                                    </div>
                                </dl>
                                <button type="button" className="text-orange-600 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-semibold rounded-lg text-2xl font-satoshi px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                    Register Here
                                </button>

                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Page;


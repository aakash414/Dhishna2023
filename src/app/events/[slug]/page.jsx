import React from 'react'
import miniDebConfLogo from '../../../images/miniDebConf.png'
import Image from 'next/image'
import client from '../../../client'



export async function getServerSideProps(context) {
    // Fetch event data from Sanity based on the dynamic slug
    const { slug } = context.params;

    const query = `*[_type == "event" && slug.current == $slug][0] {
    imageLink,
    heading,
    title,
    para1,
    para2,
    para3,
    date,
    fee,
    venue
  }`;

    const eventData = await client.fetch(query, { slug });

    if (!eventData) {
        return {
            notFound: true, // Handle not found events
        };
    }

    return {
        props: { eventData },
    };
}

function page({eventData}) {


    return (
        <div className=" py-24 sm:py-32">
            <div className=" px-6 lg:px-8">

                    <div className="mx-10 flex lg:flex-row flex-col justify-center items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none" >
                        <div className=" overflow-hidden h-fit w-auto rounded-3xl bg-gray-900  shadow-2xl">
                            <Image
                                className="  object-cover "
                                src={miniDebConfLogo}
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-base leading-7 text-gray-300 lg:max-w-lg">
                                <p className="text-base font-satoshi font-semibold leading-7 text-orange-600">{eventData.heading}</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">{eventData.title}</h1>
                                <div className="max-w-xl">
                                    <p className="mt-6">{eventData.para1} </p>
                                    <p className="mt-8">{eventData.para2}</p>
                                    <p className="mt-8">{eventData.para3}</p>
                                </div>
                            </div>
                            <dl className="mt-8 grid grid-cols-2 gap-8 border-t border-gray-300/10 pt-10 sm:grid-cols-4 font-satoshi">
                                <div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">Last Date</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">25 Nov</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">Date</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">eventData.date</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">Fee</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">{eventData.fee}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">Venue</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">{eventData.venue}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default page;
import React from 'react'
import miniDebConfLogo from '../../../images/miniDebConf.png'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'

//store the data of each events such as image link, heading, title, description, date, time, venue as object

function page() {
    // //fetch the id which is the slug of the event
    // const router = useRouter()
    // const { slug } = router.query

    const eventsData = [
        {
            imageLink: miniDebConfLogo,
            heading: "Company values",
            title: "On a mission to empower remote teams",
            para1: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed egetrisus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id",
            para2: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed egetrisus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id",
            para3: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed egetrisus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id",
            date: "2023-11-15",
            time: "10:00 AM - 2:00 PM",
            venue: "Seminar Hall",

        }
    ]

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
                            <p className="text-base font-satoshi font-semibold leading-7 text-orange-600">MiniDebConf</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">On a
                                mission to empower remote teams</h1>
                            <div className="max-w-xl">
                                <p className="mt-6">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                                    odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt
                                    ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
                                    Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.   </p>
                                <p className="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                                    odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt
                                    ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
                                    Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
                                <p className="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                                    odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt
                                    ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
                                    Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
                            </div>
                        </div>
                        <dl className="mt-8 grid grid-cols-2 gap-8 border-t border-gray-300/10 pt-10 sm:grid-cols-4 font-satoshi">
                            <div>
                                <dt className="text-sm font-semibold leading-6 text-gray-300">Last Date</dt>
                                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">25 Nov</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-semibold leading-6 text-gray-300">Date</dt>
                                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">25 Nov</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-semibold leading-6 text-gray-300">Fee</dt>
                                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">499</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-semibold leading-6 text-gray-300">Venue</dt>
                                <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">Old Soe</dd>
                            </div>
                        </dl>
                        <div className="mt-7 flex md:justify-start justify-center ">
                            <button type="button" className="text-orange-600 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-semibold rounded-lg text-2xl font-satoshi px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                Register Here
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
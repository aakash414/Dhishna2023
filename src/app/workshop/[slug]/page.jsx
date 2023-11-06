import React from 'react'
import miniDebConfLogo from '../../../images/miniDebConf.png'
import Image from 'next/image'

function page() {
    return (
        <div className=" py-24 sm:py-32">
            <div className=" px-6 lg:px-8">
                <div
                    className=" items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none ">
                    <div className="mx-10 flex flex-row justify-center" >
                        <div className=" overflow-hidden w-auto rounded-3xl bg-gray-900 px-6 pb-9 shadow-2xl">
                            <Image
                                className=" inset-0  h-3/5 object-cover "
                                src={miniDebConfLogo}
                                alt=""
                            />
                        </div>
                        <div>
                            <div className="text-base leading-7 text-gray-300 lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-orange-600">Company values</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">On a
                                    mission to empower remote teams</h1>
                                <div className="max-w-xl">
                                    <p className="mt-6">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                                        risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                                        donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                                        mauris semper sed amet vitae sed turpis id.</p>
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
                            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-300/10 pt-10 sm:grid-cols-4">
                                <div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">Founded</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">2021</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">Employees</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">37</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">Countries</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">12</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">Raised</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-400">$25M</dd>
                                </div>
                            </dl>
                            <div className="mt-10 flex">
                                <a href="#" className="text-base font-semibold leading-7 text-orange-600">
                                    <div className="mx-auto flex  items-center justify-center">
                                        <div className=" rounded-md bg-gradient-to-r from-orange-400-500 via-orange-700-500 to-orange-900 p-1">
                                            <div className="flex h-full w-full items-center justify-center  back">
                                                <h1 className="text-2xl font-black text-orange-600">Register Here</h1>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
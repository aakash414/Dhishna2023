import React from 'react'

export function Slide2() {
    return (

        <div className=' relative w-full bg-auto  md:bg-no-repeat bg-center md:bg-right '
             style={{backgroundImage: "url('/D2023.png')"}}>
            <div className='flex md:w-7/12 justify-center md:justify-end items-center h-full sm:min-h-screen py-36'>
                <div className='text-white flex flex-col md:max-w-lg lg:max-w-3xl px-8 sm:px-8 '>

                    <p className=' text-5xl sm:text-6xl  md:text-7xl font-medium  text-center md:text-left font-thunder tracking-wide'>
                        THE REMARKABLE REVIVAL
                    </p>
                    <p className='text-base font-normal leading-6 font-satoshi text-justify md:text-left'>Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Vivamus fermentum pretium semper. Suspendisse
                        potenti. Morbi quam leo, viverra sed porta vitae, elementum vel massa. Morbi sed molestie velit,
                        viverra pretium lacus. Proin eu malesuada odio, id rutrum arcu. Proin condimentum, mi eget
                        pharetra porta, dui neque varius tellus, ut posuere turpis velit ut neque. Sed sed nisi id arcu
                        cursus ornare in quis purus. Donec sagittis sapien et turpis vehicula, vel bibendum elit
                        accumsan.</p>
                </div>
            </div>
            <div>

                <div className="hill"></div>
                <div className="hill2"></div>
            </div>


        </div>

    )
}

export default Slide2

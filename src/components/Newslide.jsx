import React from 'react'
import { FadeIn } from './FadeIn';

export function Newslide() {
    const [animate, setAnimate] = React.useState(false)

    React.useEffect(() => {
        const textElements = document.querySelectorAll('.animate-text');

        textElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });
    }, []);


    return (

        <div className='text-white flex justify-center flex-col items-center w-full h-screen px-8 sm:px-8 '>
            <div class="roller">
                <p className='text-5xl sm:text-6xl md:text-7xl font-medium text-center md:text-left font-thunder tracking-wide' id="rolltext">
                    THE<br />
                    REMARKABLE<br />
                    REVIVAL
                </p>
            </div>

        </div>

    )
}

export default Newslide

import React from 'react'

export function Slide3() {

    const [scrollDirection, setScrollDirection] = useState('add-animation');
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {

            const scrollTop = window.scrollY || window.pageYOffset;


            if (scrollTop > lastScrollTop) {
                setScrollDirection('add-animation');
            } else {
                setScrollDirection('add-animation-reverse');
            }

            lastScrollTop = scrollTop;
            setIsScrolling(true)
            // setTimeout(() => {
            //     setIsScrolling(false)
            // }, 1000)
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
            setIsScrolling(false)
        };
    }, []);

    const isScrollingDown = scrollDirection === 'add-animation';


    return (
        <div className=" flex flex-col">
            <div className="h-full w-full  flex flex-col justify-between relative items-center">
                <p className="font-satoshi font-normal lg:top-20 md:top-12 top-2 text-sm lg:text-2xl xl:text-4xl xl:top-28  md:text-base text-white ">THE
                    BIGGEST EVENTS HAPPENING IN KERALA</p>
                <div
                    className={`flex linear-wipe  ${isScrolling ? scrollDirection : ''} justify-center items-center w-full`}>
                    <h1 className={` h-full  text-center mt-6 leading-none font-thunder1 xl:text-[750px] lg:text-[560px] md:text-[400px] sm:text-[350px] text-[200px] italic `}>
                        Events
                    </h1>
                    {/*<h1 className={`linear-wipe w-1/2 ${isScrolling ? scrollDirection : ''} h-full  text-center mt-6 leading-none font-thunder1 xl:text-[750px] lg:text-[560px] md:text-[400px] sm:text-[350px] text-[200px] italic`}>*/}
                    {/*  nts&nbsp;*/}
                    {/*</h1>*/}
                </div>
            </div>
            <div className="font-200 flex flex-row justify-around font-satoshi  text-white lg:-mt-24">
                <div>
                    <p>CHAKRA</p>
                </div>
                <div>
                    <p>PRO SHOW</p>
                </div>
                <div>
                    <p>ROBO GAMES</p>
                </div>
                <div>
                    <p>ROCKET</p>
                </div>
            </div>
        </div>
    )
}

export default Slide3

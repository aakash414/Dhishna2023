"use client";
import React, {Fragment, useEffect} from 'react';
import Slide4 from "@/components/Slide4";
import Slide5 from "@/components/Slide5";

const Chakra = () => {

    useEffect(() => {
        const video = document.getElementById("chakra-video");
        let currentStage = 0;

        const handleScroll = () => {
            playVideoBasedOnScroll(window.scrollY);
        };

        document.addEventListener("scroll", handleScroll);

        let playing = null;

        function playVideoBasedOnScroll(y) {
            const currentStageIndex = Math.max(Math.round(y / 200), 1);

            // console.log(currentStageIndex)

            if (currentStageIndex !== currentStage) {
                currentStage = currentStageIndex;
                if (playing)
                    clearTimeout(playing);

                if (currentStage === 1) {
                    video.currentTime = 1;
                    video.play();

                    playing = setTimeout(() => video.pause(), 500);
                } else if (currentStage === 2) {
                    video.currentTime = 0.5;
                    video.play();

                    playing = setTimeout(() => video.pause(), 500);
                }
            }
        }

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Fragment>

            {/*<div className="absolute">*/}
            {/*    <video*/}
            {/*        src="/chakra.mp4"*/}
            {/*        className="fixed top-96"*/}
            {/*        playsInline={true}*/}
            {/*        webkit-playsinline={true}*/}
            {/*        preload="auto"*/}
            {/*        muted="muted"*/}
            {/*        id="chakra-video"*/}
            {/*    />*/}

            {/*</div>*/}

            <Slide4/>
            <Slide5/>

        </Fragment>
    );
};

export default Chakra;

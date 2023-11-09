"use client";
import {RootLayout} from '@/components/RootLayout';
import '@/styles/tailwind.css';
import {useEffect, useRef, useState} from "react";
import "./style.css"

export default function Layout({children}) {
    const videoRef = useRef(null);
    const [percent, setPercent] = useState(0);
    const [lastPercent, setLastPercent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // console.log("kooooooooooi");

        
        const handleScroll = () => {
            const y = window.scrollY;
            const height = document.body.clientHeight;
            const currentPercent = y * 3 / height;

            setPercent(currentPercent);
        };
        document.addEventListener("scroll", handleScroll);

        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // console.log("kooooooooooi");
        console.log({percent, lastPercent});
        if (!videoRef.current || percent === 0) return;

        const video = videoRef.current;
        const stopTime = video.duration * percent;
        const last = lastPercent;

        setLastPercent(percent);
        if (percent > 1) {
            setIsPlaying(false)
        }
        else {
            setIsPlaying(true)
        }


        // if (last > percent) {
        //     video.pause();
        //     video.currentTime = stopTime;
        //     return;
        // }
        if( video.currentTime >= stopTime) {
            console.log("..........................pause");
            video.pause();
            return;
        }

        // console.log({percent, lastPercent, stopTime})

        const videoPlayed = () => video.currentTime > stopTime ? video.pause() : null;
        video.play();

        video.addEventListener("timeupdate", videoPlayed);
        return () => video.removeEventListener("timeupdate", videoPlayed);
    }, [percent, videoRef]);

    return (
        <html lang="en" className="h-full antialiased">
        <body className="flex min-h-full flex-col">
        <RootLayout>
            <video
                ref={videoRef}
                src="/jeevan.mp4"
                playsInline={true}
                preload="eager"
                muted={true}
                loop={false}
                className="fixed top-0 hidden md:block"
            ></video>
            {children}
        </RootLayout>
        </body>
        </html>
    );
}

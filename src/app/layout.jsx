"use client";
import {RootLayout} from '@/components/RootLayout';
import '@/styles/tailwind.css';
import {useEffect, useRef, useState} from "react";
import "./style.css"

export default function Layout({children}) {
    const videoRef = useRef(null);
    const [percent, setPercent] = useState(0);
    const [lastPercent, setLastPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            const height = document.body.clientHeight;
            const currentPercent = y / height;

            setPercent(currentPercent);
        };
        document.addEventListener("scroll", handleScroll);

        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!videoRef.current || percent === 0) return;

        const video = videoRef.current;
        const stopTime = video.duration * percent;
        const last = lastPercent;

        setLastPercent(percent);

        if (last > percent) {
            video.pause();
            video.currentTime = stopTime;
            return;
        }

        console.log({percent, lastPercent, stopTime})

        const videoPlayed = () => video.currentTime > stopTime ? video.pause() : null;
        video.play();

        video.addEventListener("timeupdate", videoPlayed);
        return () => video.removeEventListener("timeupdate", videoPlayed);
    }, [percent, videoRef]);

    return (
        <html lang="en" className="h-full bg-black antialiased">
        <body className="flex min-h-full flex-col">
        <RootLayout>
            <video
                ref={videoRef}
                src="/raone.mp4"
                playsInline={true}
                preload="eager"
                muted
                className="fixed top-0"
            ></video>
            {children}
        </RootLayout>
        </body>
        </html>
    );
}

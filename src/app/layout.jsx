"use client";
import { RootLayout } from '@/components/RootLayout';
import '@/styles/tailwind.css';
import { useEffect, useRef } from "react";

export default function Layout({ children }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = document.getElementById("hero-video");
        let currentStage = 0;

        const handleScroll = () => {
            playVideoBasedOnScroll(window.scrollY);
        };

        document.addEventListener("scroll", handleScroll);

        let playing = null;

        function playVideoBasedOnScroll(y) {
            const currentStageIndex = Math.max(Math.round(y / 200), 1);

            console.log(currentStageIndex)

            if (currentStageIndex !== currentStage) {
                currentStage = currentStageIndex;
                if(playing)
                    clearTimeout(playing);

                if (currentStage === 1) {
                    video.currentTime = 0;
                    video.play();

                    playing = setTimeout(() => video.pause(), 500);
                }
                else if (currentStage === 2) {
                    video.currentTime = 0.5;
                    video.play();

                    playing = setTimeout(() => video.pause(), 500);
                }
                else if (currentStage === 3) {
                    video.currentTime = 1;
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
        <html lang="en" className="h-full bg-black antialiased">
        <body className="flex min-h-full flex-col">
        <RootLayout>
            <video
                ref={videoRef}
                src="/hero.mkv"
                playsInline={true}
                webkit-playsinline={true}
                preload="auto"
                muted="muted"
                className="fixed top-0"
                id="hero-video"
            ></video>
            {children}
        </RootLayout>
        </body>
        </html>
    );
}

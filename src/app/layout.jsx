"use client";
import {RootLayout} from '@/components/RootLayout';
import '@/styles/tailwind.css';
import "./style.css"

export default function Layout({children}) {

    return (
        <html lang="en" className="h-full antialiased">
        <body className="flex min-h-full flex-col">
        <RootLayout>
            {children}
        </RootLayout>
        </body>
        </html>
    );
}
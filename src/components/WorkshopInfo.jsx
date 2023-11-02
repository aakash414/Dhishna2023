"use client";
import React, {Fragment, useEffect, useState} from 'react';

const WorkshopInfo = ({position}) => {

    const [pos, setPos] = useState("");

    useEffect(() => {
        if(position === 0)
            setPos("left-0 top-0");
        if(position === 1)
            setPos("right-0 top-0");
        if (position === 3)
            setPos("right-0 bottom-0");
        if(position === 2) {
            setPos("left-0 bottom-0");
        }
    }, []);

    return (
        <Fragment>
            <div className={`flex flex-col items-center justify-center absolute ${pos} text-white opacity-0 group-hover:opacity-100 p-5 transition duration-500 ease-in-out clip-polygon`}>
                <span className="text-3xl">02</span>
                <span className="">Pulse Club</span>
            </div>
        </Fragment>
    );
};

export default WorkshopInfo;

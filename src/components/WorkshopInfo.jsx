"use client";
import React, {Fragment} from 'react';

const WorkshopInfo = ({position}) => {
    return (
        <Fragment>
            <div className={`flex flex-col  items-center justify-center p-6 m-2 absolute ${position === 0 ? "left-0 top-0" : ""} ${position === 1 ? "right-0 top-0" : ""} ${position === 2 ? "left-0 bottom-0" : ""} ${position === 3 ? "right-0 bottom-0" : ""} 
            ${position === 0 ? "" : ""} ${position === 1 ? "" : ""} ${position === 2 ? "clip-polygon1" : ""} ${position === 3 ? "clip-polygon2" : ""}
            text-white opacity-0 group-hover:opacity-100 group-hover:animate-fade transition  
            `}>
                <span className="text-3xl">02</span>
                <span className="">Pulse Club</span>
            </div>
        </Fragment>
    );
};

export default WorkshopInfo;

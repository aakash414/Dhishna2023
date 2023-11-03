"use client";
import React, {Fragment} from 'react';

const WorkshopInfo = ({position}) => {
    return (
        <Fragment>
            <div className={`flex flex-col items-center gap-5 py-6 px-9 absolute text-white opacity-0 group-hover:opacity-100 group-hover:animate-fade transition 
            ${position === 0 ? "left-0 top-0" : ""} ${position === 1 ? "right-0 top-0" : ""} ${position === 2 ? "left-0 bottom-0" : ""} ${position === 3 ? "right-0 bottom-0" : ""} 
            ${position === 0 ? "" : ""} ${position === 1 ? "" : ""} ${position === 2 ? "clip-polygon1" : ""} ${position === 3 ? "clip-polygon2" : ""}
            `}>
                <span className="flex text-[4rem] font-bold">02</span>
                <span className="text-xs items-end">Pulse Club</span>
            </div>
        </Fragment>
    );
};

export default WorkshopInfo;

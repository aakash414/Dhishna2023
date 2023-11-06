"use client";
import React, {Fragment} from 'react';

const WorkshopInfo = ({position, data}) => {
    return (
        <Fragment>
            <div className={`flex flex-col items-center gap-5 py-1 px-8 absolute text-white opacity-0 group-hover:opacity-100 group-hover:animate-fade transition 
            ${position === 0 ? "left-0 top-0" : ""} ${position === 1 ? "right-0 top-0" : ""} ${position === 2 ? "left-0 bottom-0" : ""} ${position === 3 ? "right-0 bottom-0" : ""} 
            ${position === 0 ? "" : ""} ${position === 1 ? "" : ""} ${position === 2 ? "" : "clip-polygon2"} ${position === 3 ? "clip-polygon2" : ""}
            `}>
                <p className="flex text-[4rem] font-bold">02</p>
                <p className="text-xs items-end">Pulse Club</p>
            </div>
        </Fragment>
    );
};

export default WorkshopInfo;

// "use client";
// import React, {Fragment} from 'react';

// const WorkshopInfo = ({position, data}) => {
//     return (
//         <Fragment>
//             <div className={`flex flex-col items-center gap-5 py-1 px-8 absolute text-white opacity-0 group-hover:opacity-100 group-hover:animate-fade transition 
//             ${position === 0 ? "left-0 top-0" : ""} ${position === 1 ? "right-0 top-0" : ""} ${position === 2 ? "left-0 bottom-0" : ""} ${position === 3 ? "right-0 bottom-0" : ""} 
//             ${position === 0 ? "" : ""} ${position === 1 ? "" : ""} ${position === 2 ? "" : "clip-polygon2"} ${position === 3 ? "clip-polygon2" : ""}
//             `}>
//                 <p className="flex text-[4rem] font-bold text-sm">hi</p>
//                 <p className="text-xs items-end">hi</p>
//             </div>
//         </Fragment>
//     );
// };

// export default WorkshopInfo;


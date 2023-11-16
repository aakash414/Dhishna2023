

import React, {Fragment} from 'react';

const WorkshopInfo = ({position, data}) => {
    const date = new Date(data.start_date);
    const day = date.getDate(); // Get the day of the month

    return (
        <Fragment>
            <div className={`flex flex-col items-center gap-5 py-1 px-8 absolute text-white opacity-0 group-hover:opacity-100 group-hover:animate-fade transition 
            ${position === 0 ? "left-0 top-0" : ""} ${position === 1 ? "right-0 top-0" : ""} ${position === 2 ? "left-0 bottom-0" : ""} ${position === 3 ? "right-0 bottom-0" : ""} 
            ${position === 0 ? "" : ""} ${position === 1 ? "" : ""} ${position === 2 ? "" : "clip-polygon2"} ${position === 3 ? "clip-polygon2" : ""}
            `}
                /* {position === 4 && <p className="flex text-[4rem] align-text-top font-bold  py-6 ">{day}</p>} 
                {position === 3 && <p className="text-l items-end py-10  ">{data?.title}</p>}
            </div> */
             style={{ width: '145px', height: '140px' }}> 
                {position === 4 && (
                    <div className='flex flex-row'>
                    
                    <div className='py-2 text-satoshi '>
                       Nov
                    </div>
                    <div className="flex text-[4rem] align-text-top font-satoshi font-bold py-6 w-full h-full">
                        {day}
                    </div>
                    </div>
                )}
                {position === 3 && (
                    <div className="text-sm p-2  font-satoshi font-bold py-20 w-full h-full">
                        {data?.title}
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default WorkshopInfo;
// import React, {Fragment} from 'react';
// import Image from "next/image";
// import event from "@/images/ws1.jpg";
// import WorkshopInfo from "@/components/WorkshopInfo";
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(myConfiguredSanityClient)

// const WorkshopCard = ({data}) => {
//     return (
//         <Fragment>
//             <div className="flex w-[300px] h-[300px] group p-2 relative">
                
//                 <Image src={data?.icon} alt={"event"} width={300} height={300}
//                        className={"object-cover object-center  group-hover:scale-90 transition duration-300 ease-in-out"}
//                 />
//                 <p className="text-white ">{data?.details}</p>
//                 <WorkshopInfo position={2}/>
//                 <WorkshopInfo position={3}/>
//             </div>
//         </Fragment>
//     );
// };

// export default WorkshopCard;

import React, {Fragment} from 'react';
import Image from "next/image";
import WorkshopInfo from "@/components/WorkshopInfo";
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

const builder = imageUrlBuilder(client);

function urlFor(source) {
    console.log("source",source)
  return builder.image(source);
}

const WorkshopCard = ({data}) => {
    return (
        <Fragment>
            <div className="flex w-[300px] h-[300px] group p-2 relative">
                {/* <Image src={urlFor(data?.icon)} alt={"event"} width={300} height={300}
                       className={"object-cover object-center  group-hover:scale-90 transition duration-300 ease-in-out"}
                /> */}
               
                {/* <img src={urlFor(data.icon).width(200).url()} className={"object-cover object-center  group-hover:scale-90 transition duration-300 ease-in-out"}/> */}
                {/* <img src={urlFor(data.icon).width(300).height(300).url()} className={"object-cover object-center  group-hover:scale-90 transition duration-300 ease-in-out"}/> */}
                <Image
                src={urlFor(data?.icon)}
                alt='vwvr'
                width={300}
                height={300}
                className={"object-cover object-center group-hover:scale-90 transition duration-300 ease-in-out"}
                />
                <p className="text-white ">{data?.details}</p>
                <WorkshopInfo position={2}/>
                <WorkshopInfo position={3}/>
            </div>
        </Fragment>
    );
};

export default WorkshopCard;
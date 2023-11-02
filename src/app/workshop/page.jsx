import React, {Fragment} from 'react';
import {Container} from '@/components/Container';
import {FadeInStagger} from '@/components/FadeIn';
import event from '../../images/ws1.jpg';
import {FadeIn} from '@/components/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/base.css'
import WorkshopInfo from "@/components/WorkshopInfo";


function Page() {
    const dummyData = [
        {
            href: '/case-study-1',
            logo: event,
            client: 'Client 1',
            date: '2023-01-01',
            title: 'Case Study 1 Title',
            description: 'The event is a pre-event for the Robofrenzy Competition under Dhishna by IEEE CUSAT SB . ',
        },
        {
            href: '/case-study-2',
            logo: event,
            client: 'Client 2',
            date: '2023-02-15',
            title: 'Case Study 2 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
        {
            href: '/case-study-3',
            logo: event,
            client: 'Client 3',
            date: '2023-03-15',
            title: 'Case Study 3 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
        {
            href: '/case-study-4',
            logo: event,
            client: 'Client 4',
            date: '2023-03-15',
            title: 'Case Study 4 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
        {
            href: '/case-study-1',
            logo: event,
            client: 'Client 1',
            date: '2023-01-01',
            title: 'Case Study 1 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
        {
            href: '/case-study-2',
            logo: event,
            client: 'Client 2',
            date: '2023-02-15',
            title: 'Case Study 2 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
        {
            href: '/case-study-3',
            logo: event,
            client: 'Client 3',
            date: '2023-03-15',
            title: 'Case Study 3 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
        {
            href: '/case-study-4',
            logo: event,
            client: 'Client 4',
            date: '2023-03-15',
            title: 'Case Study 4 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
    ];

    return (
        <Fragment>
            <div className="flex w-[300px] h-[300px] group p-2 relative">
                <Image src={event} alt={"event"} width={300} height={300}
                       className={"object-cover object-center rounded-lg shadow-lg  group-hover:shadow-xl group-hover:scale-90 transition duration-300 ease-in-out"}
                />
                <WorkshopInfo position={2}/>
            </div>
        </Fragment>


    );
}

export default Page;

"use client"
import React from 'react'
import { Container } from '@/components/Container';
import { FadeInStagger } from '@/components/FadeIn';
import { FadeIn } from '@/components/FadeIn';
import event from '../../images/event.jpg'
import Link from 'next/link';
import Image from 'next/image';
import { Tilt } from 'react-tilt'


function page() {
    const dummyData = [
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
            href: '/case-study-2',
            logo: event,
            client: 'Client 2',
            date: '2023-02-15',
            title: 'Case Study 2 Title',
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

        // Add more case studies as needed
      ];
      const defaultOptions = {
        reverse:        true,  // reverse the tilt direction
        max:            50,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
      

  return (
    <div className='bg-black'>

    <Container className="mt-16 ">
        <FadeInStagger className="grid grid-cols-1  lg:grid-cols-3 p-16 gap-8">
          {dummyData.map((caseStudy) => (
            <div className='relative group' key={caseStudy.href}>
           {/* <div className="hidden bg-gray-700 group-hover:block absolute inset-0 transform z-[-3]" style={{ transform: 'rotate(-4deg)' }}></div>
           <div className="hidden bg-gray-800 group-hover:block absolute inset-0 transform z-[-1]" style={{ transform: 'rotate(-6deg)' }}></div> */}
           <Tilt options={defaultOptions}>
                <FadeIn key={caseStudy.href} className="flex  border-2 rounded-xl bg-gray-950 z-50">
                <article className="relative flex w-full flex-col rounded-3xl p-3 ring-1 ring-neutral-950/5 transition sm:p-8">
                    <h3>
                    <Link href={caseStudy.href}>
                        <span className="absolute inset-0 rounded-3xl" />
                            <Image
                            src={caseStudy.logo}
                            alt={caseStudy.client}
                            className="h-full w-full rounded-t-lg hover:scale"
                            width={10}
                            height={100}
                            unoptimized
                            />
                    </Link>
                    </h3>
                    {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-300">
                    <time
                        dateTime={caseStudy.date.split('-')[0]}
                        className="font-semibold"
                    >
                        {caseStudy.date.split('-')[0]}
                    </time>
                    <span className="text-neutral-300" aria-hidden="true">
                        /
                    </span>
                    <span>Case study</span>
                    </p> */}
                    <p className="mt-6 font-display text-xl font-semibold text-white">
                    {caseStudy.title}
                    </p>
                    <p className="mt-4 text-base text-neutral-300">
                    {caseStudy.description}
                    </p>
                </article>
                </FadeIn>

           </Tilt>
            </div>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

export default page
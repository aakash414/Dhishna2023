import React from 'react';
import { Container } from '@/components/Container';
import { FadeInStagger } from '@/components/FadeIn';
import event from '../../images/ws1.jpg';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/base.css'

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
    <div className="bg-white">
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-4 p-2 gap-12">
          {dummyData.map((caseStudy) => (
            <div className="relative group" key={caseStudy.href}>
              <div className="card group-hover:border-orange-500  group-hover:shadow-lg  group-hover:saturate-200 group-hover:scale-90">
                <FadeIn key={caseStudy.href} className="flex   overflow-hidden relative">
                  <Link href={caseStudy.href}>
                    <div className="group-hover:filter-blur group-hover:blur-none transition-transform 
                    ">
                      <Image
                        src={caseStudy.logo}
                        alt={caseStudy.client}
                        className="h-full w-full rounded-t-lg hover:scale"
                        width={100}
                        height={500}
                        unoptimized
                      />
                     
              {/* <div className="relative group -translate-y-80">
  <div className="grid grid-cols-2 opacity-0   group-hover:opacity-100 ">
    <span className="card__box-number text-white">02</span>
    <span className="card__box-tags text-white">#techno #rave</span>
  </div>
  <div className="card__box card__box--d opacity-0 group-hover:opacity-100">
    <span className="card__box-category">Pulse Club</span>
  </div>
</div> */}

                    </div>
                  </Link>

                  {/* <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                    <p className="p-6 font-display text-2l font-semibold text-white">
                      {caseStudy.description}
                    </p>
                  </div> */}
                </FadeIn>
              </div>
              
             


{/* <div className="relative group grid grid -cols-2 ">
  <div className="grid grid-cols-2 opacity-0 -translate-y-20 -translate-x-10 group-hover:opacity-100 backdrop-blur-md backdrop-brightness-75">
    <span className="card__box-number text-white">02</span>
    <span className="card__box-tags text-white">#techno #rave</span>
  </div>
  <div className="card__box card__box--d opacity-0 -translate-y-20 translate-x-10  group-hover:opacity-100 backdrop-blur-md backdrop-brightness-75">
    <span className="card__box-category text-white">Pulse Club</span>
  </div>
</div> */}

<div className="relative group   ">
  {/* <div className="cornerCutBtn grid grid-cols-2  opacity-0 group-hover:opacity-100  -translate-y-12 -translate-x-10 px-1 py-2 text-center transition-opacity duration-500 backdrop-blur-md backdrop-brightness-75">
    <span className="card__box-number text-white"></span>
    <span className="card__box-tags text-white"></span>
  </div> */}
  <div className="cornerCutBtn card__box card__box--d opacity-0 group-hover:opacity-100 rounded-lg -translate-y-12 translate-x-10 w-40 ml-24  py-4 transition-opacity duration-500 backdrop-blur-md backdrop-brightness-75">
    <span className="card__box-category text-center ml-10 text-white">Pulse Club</span>
  </div>
</div>

  




              
            </div>
          ))}
        </FadeInStagger>
      </Container>
    </div>

    
    

  );
}

export default Page;

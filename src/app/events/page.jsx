import React from 'react'
import { Container } from '@/components/Container';
import { FadeInStagger } from '@/components/FadeIn';
import { FadeIn } from '@/components/FadeIn';
// import { Link } from 'remark-unwrap-images';
import Link from 'next/link';
import Image from 'next/image';


function page() {
    const dummyData = [
        {
          href: '/case-study-1',
          logo: 'path/to/logo1.png',
          client: 'Client 1',
          date: '2023-01-01',
          title: 'Case Study 1 Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
        {
          href: '/case-study-2',
          logo: 'path/to/logo2.png',
          client: 'Client 2',
          date: '2023-02-15',
          title: 'Case Study 2 Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...',
        },
        // Add more case studies as needed
      ];
      

  return (
    <div>
    <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {dummyData.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {/* <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    /> */}
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
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
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

export default page
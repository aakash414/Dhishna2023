import React from 'react'
import { Container } from '@/components/Container'
import { SocialMedia } from '@/components/SocialMedia'
function NavigationRow({ children }) {
  return (
    <div className="w-full sm:bg-neutral-950">
      <div className="w-full">
        <div className="grid grid-cols-1">{children}</div>
      </div>
    </div>
  )
}

function NavigationItem({ phone, children }) {
  return (
    <div className="px-8 group relative isolate w-full border-b-[0.1px] border-gray-500  py-6 text-white sm:px-16 sm:py-16">
      {children}
      <p className="text-lg">{phone}</p>
    </div>
  )
}

const ComingSoonCard = () => {
  return (
    <div className="mt-[150px] flex min-h-screen w-full flex-col items-center justify-center md:justify-start ">
      <div className="bg-black p-4 text-white">
        <h2 className="font-display text-4xl font-medium tracking-tight">
          Contact Us
        </h2>
      </div>
      <div className="w-full font-display text-5xl font-medium tracking-tight text-white sm:w-1/2">
        <NavigationRow>
          <NavigationItem phone="+91 858003324">Abhiram</NavigationItem>
          <NavigationItem phone="+91 9061071530">Acquin</NavigationItem>
        </NavigationRow>
      </div>
      <div className="flex w-full">
        <Container>
          <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-4 sm:pt-16">
            <div className="sm:border-l sm:border-transparent sm:pl-16">
              <h2 className="font-display text-base font-semibold text-white">
                Follow us
              </h2>
              <SocialMedia className="mt-6" invert />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ComingSoonCard

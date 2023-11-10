'use client'
import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/Container'
import { SocialMedia } from '@/components/SocialMedia'
import Image from 'next/image'

const RootLayoutContext = createContext(null)

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)
  let pathname;
  useEffect(()=>{
         pathname = window.location.pathname;
  },[pathname])

  console.log('pathname',pathname, pathname === "/events")
  if (pathname === "/events" || pathname === "/workshop" ) {
    return <div className='hidden'></div>;
  }
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Image src='/dhishna-white-logo.svg' alt="logo" className="md:hidden" width={100} height={100} />

        </Link>

        <div className={`text-white hidden  ${expanded ? 'md:hidden' : 'flex'} font-display text-2xl md:flex gap-16`}>
          <Link href='/events'>Events</Link>
          <Link href='/workshop'>Workshop</Link>
          <a href="mailto:cusat@dhishna.org">Contact</a>
        </div>
        <div className="flex items-center gap-x-14">
          <Link
            href="/"
            aria-label="Home"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            className='md:block hidden'
          >
            <Image src='/dhishna-white-logo.svg' alt="logo" className="" width={100} height={100} />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'md:hidden group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-white group-hover:fill-neutral-400',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/events">Events</NavigationItem>
        <NavigationItem href="/workshop">Workshop</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="mailto:cusat@dhishna.org" >Contact</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef(null)
  let closeRef = useRef(null)
  let navRef = useRef(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, []) // Replace this with your actual reference

  useEffect(() => {
    if (expanded) {
      const timeoutId = setTimeout(() => {
        closeRef.current?.focus({ preventScroll: true });
      });

      return () => clearTimeout(timeoutId);
    }
  }, [expanded, closeRef]);



  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <div
        className="absolute left-0 right-0 top-2  z-40 pt-14"
        aria-hidden={expanded ? 'true' : undefined}
        inert={expanded ? '' : undefined}
      >
      <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => setExpanded((prevExpanded) => !prevExpanded)}
          />
      </div>

      <motion.div
        layout
        id={panelId}
        style={{ height: expanded ? 'auto' : '0.01rem' }}
        className="relative z-50 overflow-hidden bg-neutral-950"
        aria-hidden={expanded ? undefined : 'true'}
        inert={expanded ? undefined : ''}
      >
        <motion.div layout className="bg-black">
          <div ref={navRef} className=" pb-16 pt-14  z-10">
            <Header
              invert
              panelId={panelId}
              icon={XIcon}
              toggleRef={closeRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded)
                window.setTimeout(() =>
                  openRef.current?.focus({ preventScroll: true }),
                )
              }}
            />
          </div>
          <Navigation />
          <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
            <Container>
              <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">

                <div className="sm:border-l sm:border-transparent sm:pl-16">
                  <h2 className="font-display text-base font-semibold text-white">
                    Follow us
                  </h2>
                  <SocialMedia className="mt-6" invert />
                </div>
              </div>
            </Container>
          </div>
        </motion.div>
      </motion.div>

      <main className="w-full flex-auto">{children}</main>

    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}

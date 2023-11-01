// import Image from 'next/image'
// import Link from 'next/link'

// import { ContactSection } from '@/components/ContactSection'
// import { Container } from '@/components/Container'
// import { FadeIn, FadeInStagger } from '@/components/FadeIn'
// import { List, ListItem } from '@/components/List'
// import { SectionIntro } from '@/components/SectionIntro'
// import { StylizedImage } from '@/components/StylizedImage'
// import { Testimonial } from '@/components/Testimonial'
// import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
// import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
// import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
// import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
// import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
// import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
// import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
// import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
// import logoUnseal from '@/images/clients/unseal/logo-light.svg'
// import imageLaptop from '@/images/laptop.jpg'
// import { loadCaseStudies } from '@/lib/mdx'

// const clients = [
//   ['Phobia', logoPhobiaLight],
//   ['Family Fund', logoFamilyFund],
//   ['Unseal', logoUnseal],
//   ['Mail Smirk', logoMailSmirk],
//   ['Home Work', logoHomeWork],
//   ['Green Life', logoGreenLife],
//   ['Bright Path', logoBrightPath],
//   ['North Adventures', logoNorthAdventures],
// ]

// function Clients() {
//   return (
//     <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
//       <Container>
//         <FadeIn className="flex items-center gap-x-8">
//           <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
//             We’ve worked with hundreds of amazing people
//           </h2>
//           <div className="h-px flex-auto bg-neutral-800" />
//         </FadeIn>
//         <FadeInStagger faster>
//           <ul
//             role="list"
//             className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
//           >
//             {clients.map(([client, logo]) => (
//               <li key={client}>
//                 <FadeIn>
//                   <Image src={logo} alt={client} unoptimized />
//                 </FadeIn>
//               </li>
//             ))}
//           </ul>
//         </FadeInStagger>
//       </Container>
//     </div>
//   )
// }

// function CaseStudies({ caseStudies }) {
//   return (
//     <>
//       <SectionIntro
//         title="Harnessing technology for a brighter future"
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           We believe technology is the answer to the world’s greatest
//           challenges. It’s also the cause, so we find ourselves in bit of a
//           catch 22 situation.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {caseStudies.map((caseStudy) => (
//             <FadeIn key={caseStudy.href} className="flex">
//               <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
//                 <h3>
//                   <Link href={caseStudy.href}>
//                     <span className="absolute inset-0 rounded-3xl" />
//                     <Image
//                       src={caseStudy.logo}
//                       alt={caseStudy.client}
//                       className="h-16 w-16"
//                       unoptimized
//                     />
//                   </Link>
//                 </h3>
//                 <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
//                   <time
//                     dateTime={caseStudy.date.split('-')[0]}
//                     className="font-semibold"
//                   >
//                     {caseStudy.date.split('-')[0]}
//                   </time>
//                   <span className="text-neutral-300" aria-hidden="true">
//                     /
//                   </span>
//                   <span>Case study</span>
//                 </p>
//                 <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
//                   {caseStudy.title}
//                 </p>
//                 <p className="mt-4 text-base text-neutral-600">
//                   {caseStudy.description}
//                 </p>
//               </article>
//             </FadeIn>
//           ))}
//         </FadeInStagger>
//       </Container>
//     </>
//   )
// }

// function Services() {
//   return (
//     <>
//       <SectionIntro
//         eyebrow="Services"
//         title="We help you identify, explore and respond to new opportunities."
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           As long as those opportunities involve giving us money to re-purpose
//           old projects — we can come up with an endless number of those.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <div className="lg:flex lg:items-center lg:justify-end">
//           <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
//             <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
//               <StylizedImage
//                 src={imageLaptop}
//                 sizes="(min-width: 1024px) 41rem, 31rem"
//                 className="justify-center lg:justify-end"
//               />
//             </FadeIn>
//           </div>
//           <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
//             <ListItem title="Web development">
//               We specialise in crafting beautiful, high quality marketing pages.
//               The rest of the website will be a shell that uses lorem ipsum
//               everywhere.
//             </ListItem>
//             <ListItem title="Application development">
//               We have a team of skilled developers who are experts in the latest
//               app frameworks, like Angular 1 and Google Web Toolkit.
//             </ListItem>
//             <ListItem title="E-commerce">
//               We are at the forefront of modern e-commerce development. Which
//               mainly means adding your logo to the Shopify store template we’ve
//               used for the past six years.
//             </ListItem>
//             <ListItem title="Custom content management">
//               At Studio we understand the importance of having a robust and
//               customised CMS. That’s why we run all of our client projects out
//               of a single, enormous Joomla instance.
//             </ListItem>
//           </List>
//         </div>
//       </Container>
//     </>
//   )
// }

// export const metadata = {
//   description:
//     'We are a development studio working at the intersection of design and technology.',
// }

// export default async function Home() {
//   let caseStudies = (await loadCaseStudies()).slice(0, 3)
  

//   return (
//     <>

//     </>
//   )
// }
"use client"
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import React, { useEffect, useRef } from "react";
import gsap from 'gsap'
import CameraControls from 'camera-controls';
// import robot from '../model/robot.glb'

CameraControls.install( { THREE: THREE } );

const Effect1 = () => {
    const refContainer = useRef(null);
    useEffect(() => {
        // const clock = new THREE.Clock();
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // const cameraControls = new CameraControls( camera, renderer.domElement );
        refContainer.current && refContainer.current.appendChild( renderer.domElement );
        camera.position.z = 4
        camera.position.y = 2.5
        
        // camera.position.x = 1
        // camera.position.y = 1.5
        // camera.position.z = 2

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1); 
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0x404040); 
        scene.add(ambientLight);

        const loader = new GLTFLoader();
        let model
        let robotParts = {};
        loader.load('./src/model/robot.glb', (gltf) => {
            model = gltf.scene;
            model.position.y = 0
            scene.add(model);
            model.traverse((child) => {
              robotParts[child.name] = child
            });
            console.log(robotParts)
        }, undefined, (error) => {
          // There was an error loading the model
          console.error('Error loading the model:', error);
      });
        let t1 = gsap.timeline({
            scrollTrigger:{
                trigger: '.robotDiv',
                start: 'top center',
                end: 'bottom center',
                scrub: false,
                markers: true
            }
        })

        var animate = function () {
            // const delta = clock.getDelta();
            // const hasControlsUpdated = cameraControls.update( delta );
            // if ( hasControlsUpdated ) {
            //   console.log(camera.position.x)
            // }
            if (model) {
              const targetPoint = new THREE.Vector3(0, 1.5, 0);
              camera.lookAt(targetPoint)
            }
            renderer.render( scene, camera );
            requestAnimationFrame(animate);
            
            // const modelX = 5
            // const modelY = 0
            // const modelZ = 5

            // const radius = 5;
            // const angle1 = -Math.PI/4;
            // const angle2 = -Math.PI/2;
            // const angle3 = Math.PI/4;

            // const camera1X = modelX + (radius * Math.cos(angle1));
            // const camera1Y = modelY;
            // const camera1Z = modelZ + (radius * Math.sin(angle1));

            // const camera2X = modelX + (radius * Math.cos(angle2));
            // const camera2Y = modelY;
            // const camera2Z = modelZ + (radius * Math.sin(angle2));

            // const camera3X = modelX + (radius * Math.cos(angle3));
            // const camera3Y = modelY;
            // const camera3Z = modelZ + (radius * Math.sin(angle3));
            if(camera && model) {
              console.log('scrolled')
              t1.to(model.rotation, {
                duration: 2,
                y: 5,
                ease: "power2.inOut",
                onUpdate: () => {
                  // console.log(camera.position.x, camera.position.y, camera.position.z)
                  camera.lookAt(model.position);
                },
              })
              t1.to(camera.position, {
                duration: 2,
                x: 1,
                y: 1.5,
                z: 2,
                ease: "power2.inOut",
                onUpdate: () => {
                  // console.log(camera.position.x, camera.position.y, camera.position.z)
                  camera.lookAt(model.position);
                },
              })
              t1.to(camera.position, {
                duration: 2,
                x: -1,
                y: -1.5,
                z: 2,
                ease: "power2.inOut",
                onUpdate: () => {
                  // console.log(camera.position.x, camera.position.y, camera.position.z)
                  camera.lookAt(model.position);
                },
              })
              // t1.to(camera.position, {
              //   duration: 2,
              //   x: camera1X,
              //   y: camera1Y,
              //   z: camera1Z,
              //   onUpdate: () => {
              //     // console.log(camera.position.x, camera.position.y, camera.position.z)
              //     camera.lookAt(model.position);
              //   },
              // })
              // t1.to(camera.position, {
              //   duration: 2,
              //   x: camera2X,
              //   y: camera2Y,
              //   z: camera2Z,
              //   onUpdate: () => {
              //     // console.log(camera.position.x, camera.position.y, camera.position.z)
              //     camera.lookAt(model.position);
              //   },
              // })
              // t1.to(camera.position, {
              //   duration: 2,
              //   x: camera3X,
              //   y: camera3Y,
              //   z: camera3Z,
              //   onUpdate: () => {
              //     // console.log(camera.position.x, camera.position.y, camera.position.z)
              //     camera.lookAt(model.position);
              //   },
              // })
            }
        };

        animate();
      }, []);
  return (
    <>
        <div style={{height: '0px'}}>

        </div>
        <div ref={refContainer} className="robotDiv">
        </div>
    </>
  )
}

export default Effect1

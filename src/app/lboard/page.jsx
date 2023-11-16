'use client'
import React from 'react'
import Image from 'next/image'
import AvatarIcon from '../../images/avatar.jpg'
import { motion } from 'framer-motion'

function Page() {
  const [cas, setCas] = React.useState([])

  React.useEffect(() => {
    // fetch('https://api.dhishna.org/api/ca/topten')
    //   .then((data) => data.json())
    //   .then((cas) => {
    //     const filtered = cas.context.filter((ca) => ca.points != 0)
    //     setCas(filtered)
    //   }, [])

    setCas([
      { name: 'Jackson Chen', college: 'Community College', points: 95 },
      { name: 'Zara Khan', college: 'Business School', points: 94 },
      { name: 'Aisha Patel', college: 'State College', points: 92 },
      { name: 'Emma Singh', college: 'Engineering Institute', points: 91 },
      { name: 'Sofia Rodriguez', college: 'Tech University', points: 89 },
      { name: 'Lucas Nguyen', college: 'Liberal Arts College', points: 88 },
      { name: 'Aiden Garcia', college: 'Medical School', points: 87 },
      { name: 'Mohammed Ahmed', college: 'City University', points: 85 },
      { name: 'Mia Gupta', college: 'Arts Academy', points: 80 },
      { name: 'Liam Kim', college: 'International Institute', points: 78 },
    ])
  }, [])

  return (
    <div className=" max-w-screen flex h-screen flex-col items-start justify-center gap-2 ">
      <div className="flex w-full flex-col items-center justify-center font-extrabold text-white ">
        <motion.h1
          className=" mt-4 pt-24  text-4xl md:text-7xl"
          whileHover={{ scale: 1.1 }}
        >
          LEADERBOARD
        </motion.h1>
        <div className="flex w-full items-center justify-evenly pt-8">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={AvatarIcon}
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="">Second</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={AvatarIcon}
              width={150}
              height={150}
              className="rounded-full"
            />
            <p>First</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={AvatarIcon}
              width={80}
              height={80}
              className="rounded-full"
            />
            <p>Third</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-grow justify-center px-[2rem] py-5 md:px-[12rem] ">
        <div className="flex w-full flex-col gap-2 rounded-lg border-[.15rem] border-gray-500 bg-black px-5 py-3">
          {cas.map((ca, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between gap-1 rounded-md bg-slate-200  px-5 text-black"
              >
                <div className="flex w-1/2 gap-1 ">
                  <p>{i + 1}.</p>
                  <div className="flex  flex-col ">
                    <p className="font-mono font-bold">{ca.name}</p>
                    <p className="font-normal ">{ca.college}</p>
                  </div>
                </div>
                <div className="flex w-1/2 items-center justify-end">
                  <p>{ca.points}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Page

// Work.jsx
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs"
import AnimatedText from "../AnimatedText"
import Workitem from "./Workitem"

const data = [
  {
    href: 'https://github.com/mohdShumayl/Bloghive',
    categoty: 'FullStack',
    img: '/assets/work/blogHive.png',
    title: 'BlogHive',
    desc: "A secure and dynamic blogging platform built during my 2023 internship. Bloghive allows users to create, explore, and interact with blogs through authentication, commenting, and media uploads.",
    techStack: "Node.js | Express.js | MongoDB | Mongoose | EJS | JWT | Multer | HTML & CSS | Bootstrap"
  },
  {
    href: 'https://github.com/mohdShumayl/shortly',
    categoty: 'FullStack',
    img: '/assets/work/shortly.png',
    title: 'Shortly',
    desc: "A Bitly-like URL shortener built during my internship, featuring secure authentication, analytics, and an admin panel for management.",
    techStack: "Node.js | Express.js | MongoDB | JWT | bcrypt | EJS | HTML & CSS | Bootstrap"
  },
  {
    href: 'https://luminai-careerinsights.vercel.app/',
    categoty: 'Next.js',
    img: '/assets/work/luminai.png',
    title: 'LuminAI',
    desc: "An AI-powered platform that provides real-time career insights with secure authentication, smooth UI, and scalable backend infrastructure.",
    techStack: "Next.js | React | Gemini | Tailwind CSS | shadcn/ui | Prisma | PostgreSQL | Neon | Inngest | Clerk"
  },
  {
    href: 'https://github.com/mohdShumayl/Shumayl-Portfolio',
    categoty: 'Next.js',
    img: '/assets/work/portfolio.png',
    title: 'Portfolio',
    desc: "A modern, responsive portfolio built with Next.js to showcase my journey, skills, and projects. It features a clean UI and smooth navigation.",
    techStack: "Next.js | React.js | Responsive UI | HTML | Tailwind | SEO"
  },
  {
    href: 'https://github.com/mohdShumayl/chatApp/',
    categoty: 'FullStack',
    img: '/assets/work/chatApp.png',
    title: 'Chat App',
    desc: "A practice project to build a live chat application using Socket.IO, enabling multiple users to send and receive messages instantly.",
    techStack: "Node.js | Express.js | Socket.IO | HTML | CSS | Bootstrap | JavaScript"
  },
  {
    href: 'https://github.com/mohdShumayl',
    categoty: 'iOS',
    img: '/assets/work/ios.png',
    title: 'iOS App',
    desc: "A mobile application that provides real-time weather updates and forecasts. Users can search for locations, view current weather conditions, intuitive interface. Built to practice API integration and iOS app development.",
    techStack: "Swift | SwiftUI | URLSession / Networking | OpenWeatherMap API | Xcode"
  },
]

export default function Work() {
  const uniqueCategories = Array.from(new Set(data.map((item) => item.categoty)))
  const tabData = [{ categoty: 'all' }, ...uniqueCategories.map((categoty) => ({ categoty }))]
  
  const [tabValue, setTabValue] = useState('all')

  const filterWork =
    tabValue === 'all' ? data.filter((item) => item.categoty !== 'all') : data.filter((item) => item.categoty === tabValue)

  return (
    <section className='pt-24 min-h-[1000px]' id='work'>
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText text='My Latest Work' textStyles='h2 mb-[30px] xl:mb-0' />
            <TabsList className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 md:flex md:flex-row md:gap-0 max-w-full h-full mb-[30px]">
              {tabData.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.categoty}
                  className="capitalize text-sm sm:text-base w-full"
                  onClick={() => setTabValue(item.categoty)}
                >
                  {item.categoty}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.map((item, index) => (
                  <motion.div key={index} layout>
                    <Workitem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

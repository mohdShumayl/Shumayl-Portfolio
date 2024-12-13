"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { Link as ScrollLink } from "react-scroll"
import RotatingShape from "./RotatingShape"
import Header from "./Header"
import Stats from "./Stats/Stats"


function Hero() {
  return (
    <section id="Home" className="h-[700px] relative bg-zinc-800 xl:bg-white">
      <Header />
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none"><span className="text-slate-400">I Build And</span> Degsin powerful
            <TypeAnimation sequence={['webSite', 2000, 'App', 2000]} speed={50} repeat={Infinity} wrapper="span" cursor={false} className="ml-2 xl:ml-4 " />
          </h1>
          <p className="lead max-w-[476px] mb-7 ">Delivering powerful, custom webSite that blend aesthetics with performance.</p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-color mb-8">Cantact Me</button>
          </ScrollLink>
          <Stats />
        </div>
        {/* ////////////////img/////////// */}
        <div className="hidden xl:flex w-[55%] h-[700px] absolute top-0 right-0  bg-slate-200">
          <div className="absolute w-[558px] h-[642px] -bottom-6 z-40 left-[20%]">
            <Image alt="zahra" src='/assets/hero/zahra2.png' fill quality='100' priority className="object-contain" />
          </div>

          {/* ////////svg//////////// */}
          <div className="hidden xl:flex absolute top-48 left-[4%]" data-scroll data-scroll-speed='0.05'>
            <Image src='/assets/hero/arrow.svg'
              width={160}
              height={160}
              alt=""
            />
          </div>
          <div className="absolute top-[500px] left-[3%]" data-scroll data-scroll-speed='0.2'><RotatingShape
            content={
              <Image src='assets/hero/shape-1.svg'
                width={38}
                height={38}
                alt=""
                className="filter-red"
              />
            }
            direction='left'
            duration={6}
          /></div>
          <div className="absolute top-[100px] xl:left-[30%]" data-scroll data-scroll-speed='0.2'><RotatingShape
            content={
              <Image src='assets/hero/shape-2.svg'
                width={34}
                height={34}
                alt=""
              />
            }
            direction='right'
            duration={5}
          /></div>
          <div className="absolute top-[300px] xl:left-[80%]" data-scroll data-scroll-speed='0.08'><RotatingShape
            content={
              <Image src='assets/hero/shape-3.svg'
                width={36}
                height={36}
                alt=""
              />
            }
            direction='left'
            duration={7}
          /></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
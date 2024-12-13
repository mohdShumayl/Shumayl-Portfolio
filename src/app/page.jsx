'use client'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Journey from '../components/Journey'
import Work from '../components/Work/Work'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import FixedMenu from '../components/FixedMenu'
import Footer from '../components/Footer'
 
const Home = () => {
  useEffect(()=>{
    const LoadLocomotiveScroll=async()=>{
      const LocomotiveScroll=(await import('locomotive-scroll')).default;
    new LocomotiveScroll();
    }
    LoadLocomotiveScroll()
  },[])
  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
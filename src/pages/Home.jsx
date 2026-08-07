import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AnimatedBackground from '../components/AnimatedBackground'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import SideBar from '../components/SideBar'
import SkillSection from '../components/SkillSection'

const Home = () => {
  return (
    <div className="font-space-grotesk w-full">
      <AnimatedBackground />

      <div className="mt-20">
        <div className="flex flex-col justify-between">
          
          <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <SideBar />
      </div>
      <div className="lg:hidden fixed top-5 right-5 z-50">
        <SideBar />
      </div>

          <div className="">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
            <BackToTop />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
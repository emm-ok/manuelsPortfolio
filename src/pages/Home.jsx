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
    <div className="font-space-grotesk min-h-screen w-full">
      <AnimatedBackground />

      <div className="mt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 w-full">
          
          <div className="md:w-1/4 w-full">
            <SideBar />
          </div>

          <div className="w-full">
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
import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AnimatedBackground from '../components/AnimatedBackground'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const Home = () => {
  return (
    <div>
        <AnimatedBackground />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <BackToTop />
    </div>
  )
}

export default Home
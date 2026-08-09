import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AnimatedBackground from "../components/AnimatedBackground";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SideBar from "../components/SideBar";
import SkillSection from "../components/SkillSection";
import DownBar from "../components/DownBar";

const Home = () => {
  return (
    <main className="font-space-grotesk relative min-h-screen overflow-x-hidden">
      {/* BACKGROUND */}
      <AnimatedBackground />

      {/* DESKTOP SIDEBAR */}
      <div className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block xl:left-8">
        <SideBar />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative min-w-0 scroll-mt-18">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <BackToTop />
      </div>

      {/* MOBILE / TABLET BOTTOM NAV */}
      <div
        className="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none lg:hidden "
      >
        <div className="pointer-events-auto w-full max-w-md">
          <DownBar />
        </div>
      </div>

      {/* BOTTOM NAV SPACING */}
      <div className="h-24 lg:hidden" />
    </main>
  );
};

export default Home;
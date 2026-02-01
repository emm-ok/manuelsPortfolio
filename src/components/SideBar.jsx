import { Github, Instagram, Linkedin, Mail, MailIcon, Send, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const SideBar = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="sticky top-24 flex flex-col gap-6 rounded-2xl"
    >
      {/* <motion.div variants={item} className="flex justify-center">
        <div className="w-32 h-32 rounded-full bg-gray-300" />
      </motion.div> */}

      <motion.div variants={item}>
        <div className="px-4 py-2 border border-gray-500 rounded-xl flex gap-2 items-center w-fit mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for work
        </div>
      </motion.div>

      <motion.h2 variants={item} className="text-center text-2xl font-semibold">
        Okoosi Emmanuel
      </motion.h2>

      <motion.div variants={item} className="flex justify-center gap-4">
        <div className="flex gap-4 justify-center">
            <SocialIcon icon={<Linkedin />} link="https://www.linkedin.com/in/emm-ok" />
            <SocialIcon icon={<Twitter />} link="https://x.com/EOkoosi77762" />
            <SocialIcon icon={<Instagram />} link="https://www.instagram.com/_jayboy_k/" />
            <SocialIcon icon={<MailIcon />} link="mailto:okoosiemmanuel@gmail.com" />
          </div>
      </motion.div>
      

      <motion.div variants={item} className="flex flex-col gap-3">
        <a href="#projects" className="cosmic-button text-center">
          View Projects
        </a>

        <a
          href="#contact"
          className="flex items-center justify-center gap-2 font-bold px-6 py-2 rounded-md border hover:scale-105 transition"
        >
          <Send size={18} /> Contact Me
        </a>
      </motion.div>
    </motion.div>
  )
}

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition"
  >
    {icon}
  </a>
);

export default SideBar

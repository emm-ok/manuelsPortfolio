import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiFigma, SiExpress } from "react-icons/si"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 mt-20 md:mt-1"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container max-w-5xl mx-auto text-center space-y-6 md:space-y-10"
      >
        {/* Eyebrow */}
        <motion.p
          variants={item}
          className="font-bebas tracking-widest text-sm text-muted-foreground"
        >
          Fullstack Developer
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-playfair text-4xl md:text-6xl leading-tight md:leading-snug"
        >
          Build <span className="text-primary font-semibold">modern web apps</span>{" "}
          that are <span className="text-primary font-semibold">fast, sleek,</span>{" "}
          and <span className="text-primary font-semibold">accessible</span>.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="max-w-3xl mx-auto text-md md:text-xl text-muted-foreground"
        >
          I’m <span className="text-primary font-bold">Emmanuel Okoosi</span>, a developer who
          specializes in React, Next.js, and Tailwind CSS. I create scalable,
          interactive, and visually polished web experiences.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="cosmic-button">
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-accent transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Skills / Tech Stack */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap justify-center gap-6 items-center"
        >
          <SiReact className="text-3xl text-primary hover:scale-110 transition-transform" title="React" />
          <SiNextdotjs className="text-3xl text-primary hover:scale-110 transition-transform" title="Next.js" />
          <SiTailwindcss className="text-3xl text-primary hover:scale-110 transition-transform" title="Tailwind CSS" />
          <SiExpress className="text-3xl text-primary hover:scale-110 transition-transform" title="Tailwind CSS" />
          <SiMongodb className="text-3xl text-primary hover:scale-110 transition-transform" title="MongoDB" />
          {/* <SiFigma className="text-3xl text-primary hover:scale-110 transition-transform" title="Figma" /> */}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={item}
          className="mt-8 flex justify-center gap-6"
        >
          <a href="#" className="text-muted-foreground hover:text-primary transition">
            <Github size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition">
            <Linkedin size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground"
      >
        {/* <span className="text-xs mb-1 font-poppins">Scroll</span> */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}

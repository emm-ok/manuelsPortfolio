import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si"
import { ReactTyped } from "react-typed"
import CountUp from "react-countup";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
}


const Stat = ({ value, label }) => (
  <div className="text-left">
    <p className="text-4xl font-bold">
      <CountUp
        end={value}
        duration={2}
        enableScrollSpy   // animate only when visible
        scrollSpyOnce     // animate only once
      />{label === "% Retention rate" ? "%" : "+"}
    </p>
    <p>{label}</p>
  </div>
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen py-24 flex flex-col items-start"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start w-full max-w-4xl space-y-6"
      >
        <motion.div variants={item} className="text-left">
          <span className="block text-xl">Hello,</span>
          <h2 className="text-2xl md:text-5xl mt-2">I'm <span className="text-primary">Manuel</span></h2>
          <div className="mt-2 text-2xl md:text-5xl">
            A{" "}
            <ReactTyped
              strings={["Frontend Engineer", "React Developer", "Backend Developer"]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="text-primary"
            />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-left text-3xl md:text-5xl leading-snug"
        >
          I Build <span className="text-primary">high-performance web apps </span>
          that<span className="text-primary"> solve problems</span> and deliver
          <span className="text-primary"> exceptional user experiences</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-left text-md md:text-lg text-muted-foreground"
        >
          I’m <span className="text-primary font-bold">Emmanuel Okoosi</span>, a developer
          specializing in <span className="text-primary">React, Next.js, and Tailwind CSS</span> — turning complex problems
          into intuitive, polished, and maintainable solutions.
        </motion.p>


        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 mt-4"
        >
          <SiReact className="text-3xl text-primary hover:scale-110 transition" />
          <SiNextdotjs className="text-3xl text-primary hover:scale-110 transition" />
          <SiTailwindcss className="text-3xl text-primary hover:scale-110 transition" />
          <SiExpress className="text-3xl text-primary hover:scale-110 transition" />
          <SiMongodb className="text-3xl text-primary hover:scale-110 transition" />
        </motion.div>

        <div className="flex gap-6 mt-6">
          <Stat value={3} label="Yrs" />
          <Stat value={10} label="Projects" />
          <Stat value={85} label="% Retention rate" />
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}

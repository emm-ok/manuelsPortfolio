import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import CountUp from "react-countup";
import { SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
    },
  },
};

const Stat = ({ value, label }) => (
  <div className="flex flex-col">
    <span className="text-3xl font-bold text-primary">
      <CountUp end={value} duration={2} />+
    </span>
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center mt-24">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start w-full max-w-5xl space-y-7">
        <motion.div variants={item} className="text-left space-y-3">
          <p className="text-muted-foreground text-lg">
            Hello, I'm Emmanuel Okoosi
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            A{" "}
            <ReactTyped
              strings={[
                "Fullstack Engineer",
                "Product Engineer",
                "Backend Engineer",
                "Frontend Specialist",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="text-primary"
            />
          </h2>
        </motion.div>
        <motion.h1 variants={item} className="text-left text-4xl md:text-6xl font-bold leading-tight">
          I build{" "}
          <span className="text-primary">
            scalable web applications
          </span>{" "}
          that transform complex business processes into reliable digital experiences.
        </motion.h1>
        <motion.p variants={item} className="text-left max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
          I specialize in designing and engineering full-stack products using modern technologies like React, Next.js, Node.js, Express, and MongoDB. From ecommerce platforms with payment workflows to dashboards, authentication systems, and real-time communication applications, I build solutions that are scalable, maintainable, and focused on real-world impact.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-5 mt-4">
          <SiReact className="text-3xl text-primary hover:scale-110 transition-transform" />
          <SiNextdotjs className="text-3xl text-primary hover:scale-110 transition-transform" />
          <SiNodedotjs className="text-3xl text-primary hover:scale-110 transition-transform" />
          <SiExpress className="text-3xl text-primary hover:scale-110 transition-transform" />
          <SiMongodb className="text-3xl text-primary hover:scale-110 transition-transform" />
          <SiTailwindcss className="text-3xl text-primary hover:scale-110 transition-transform" />
        </motion.div>
      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-24 text-foreground">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto gap-12 items-start"
      >
        {/* LEFT COLUMN: TEXT */}
        <motion.div variants={item} className="flex flex-col gap-6">
          <p className="text-sm tracking-widest text-primary uppercase">About Me</p>

          <h2 className="text-3xl md:text-5xl font-bold leading-snug text-left">
            Building <span className="text-primary">Intuitive</span> & <span className="text-primary">Scalable</span> Web Applications
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-left">
            I’m <span className="text-foreground font-medium">Emmanuel Okoosi</span>, a passionate frontend and fullstack developer specializing in MERN stack, Next.js, and Tailwind CSS. I build <span className="text-primary font-semibold">accessible</span> and <span className="text-primary font-semibold">high-performance</span> web applications that delight both users and clients.
          </p>

          <p className="text-base md:text-lg text-muted-foreground text-left">
            Focused on <span className="text-primary font-semibold">scalability</span> and <span className="text-primary font-semibold">user experience</span>, I create interfaces that are intuitive, responsive, and visually polished.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <motion.a
              variants={item}
              href="#contact"
              className="cosmic-button hover:scale-105 flex items-center justify-center gap-2"
            >
              Contact Me <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              variants={item}
              href="./Resume1.pdf"
              download="Emmanuel_Okoosi_Frontend_Developer_CV.pdf"
              className="px-6 py-2 rounded-xl border border-primary text-primary hover:scale-105 transition-colors duration-300 text-center"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

import { motion } from "framer-motion"
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiFigma, SiExpress, SiNodedotjs, SiFramer, SiSanity, SiHtml5, SiJavascript, SiApifox, SiPostman, SiGraphql, SiJsonwebtokens, SiGoogleauthenticator, SiPostgresql, SiPrisma } from "react-icons/si"
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

const techStack = [
  { icon: SiHtml5, name: "HTML" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiGraphql, name: "Graphql" },
  { icon: SiJsonwebtokens, name: "JWT" },
  { icon: SiGoogleauthenticator, name: "OAuth" },
  { icon: SiPostgresql, name: "PostgresQL" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiSanity, name: "Sanity" },
  { icon: SiFigma, name: "Figma" },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-2 text-foreground">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        {/* LEFT COLUMN: TEXT */}
        <motion.div variants={item} className="space-y-6">
          <p className="font-bebas text-sm tracking-widest text-primary uppercase">
            About Me
          </p>

          <h2 className="font-playfair text-3xl md:text-5xl font-bold leading-tight">
            Build Intuitive & Scalable Web Applications
          </h2>

          <p className="font-poppins text-base md:text-lg text-muted-foreground">
            I’m <span className="text-foreground font-medium">Emmanuel Okoosi</span>, a passionate frontend and fullstack developer specializing in MERN stack, Next.js, and Tailwind CSS.
            I build <span className="text-primary font-semibold">accessible</span>, <span className="text-primary font-semibold">high-performance</span> web applications that delight users and clients.
          </p>

          <p className="font-poppins text-base md:text-lg text-muted-foreground">
            With a focus on <span className="text-primary font-semibold">scalability</span> and <span className="text-primary font-semibold">user experience</span>,
            I create interfaces that are intuitive, responsive, and beautifully designed.
          </p>

          {/* CTA BUTTON */}
          <div className="flex-col flex md:flex-row gap-8 justify-center items-center">
            <motion.a
              variants={item}
              href="#contact"
              className="cosmic-button"
            >
              Contact Me
            </motion.a>
            <motion.a
              variants={item}
              href="#download"
              className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: TECH STACK CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6">
          <p className="font-bebas text-sm tracking-widest text-primary uppercase mb-2">
            Technologies & Tools
          </p>

          <div className="grid grid-cols-4 gap-6">
            {techStack.map(({ icon: Icon, name }) => (
              <motion.div
                key={name}
                variants={item}
                className="flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="text-4xl text-primary" title={name} />
                <span className="font-poppins text-sm font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

import React from 'react'
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiFigma, SiExpress, 
  SiNodedotjs, SiFramer, SiSanity, SiHtml5, SiJavascript, SiApifox, 
  SiPostman, SiGraphql, SiJsonwebtokens, SiGoogleauthenticator, 
  SiPostgresql, SiPrisma 
} from "react-icons/si"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // each child appears 0.1s after the previous
      delayChildren: 0.2,  // delay before starting the stagger
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
  { icon: SiGraphql, name: "GraphQL" },
  { icon: SiJsonwebtokens, name: "JWT" },
  { icon: SiGoogleauthenticator, name: "OAuth" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiSanity, name: "Sanity" },
  { icon: SiFigma, name: "Figma" },
]

const SkillSection = () => {
  return (
    <section id="skills" className='min-h-screen py-24 py-24 px-4'>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto flex flex-col gap-6"
      >
        <p className="text-sm tracking-widest text-primary uppercase mb-2">
          Technologies & Tools
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map(({ icon: Icon, name }) => (
            <motion.div
              key={name}
              variants={item}
              className="flex flex-col items-center justify-center bg-gray-600/20 p-4 rounded-xl gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Icon className="text-4xl text-primary" title={name} />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SkillSection

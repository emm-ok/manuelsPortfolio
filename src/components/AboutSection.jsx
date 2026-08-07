import { motion } from "framer-motion";
import { ArrowRight, Database, Layers, Rocket, Code2 } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const expertise = [
  {
    icon: <Layers size={20} />,
    title: "Full-Stack Systems",
    description: "Building complete applications from user interfaces to backend architecture.",
  },
  {
    icon: <Database size={20} />,
    title: "Data & APIs",
    description: "Designing reliable APIs, database structures, and scalable services.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Product Engineering",
    description: "Turning ideas into polished products focused on real user needs.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={item} className="flex flex-col gap-6">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Engineering digital products that solve{" "}
            <span className="text-primary">
              real business problems.
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I’m Emmanuel Okoosi, a Fullstack Engineer focused on building modern web applications that combine thoughtful user experiences with strong technical foundations.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            My work spans ecommerce platforms, analytics dashboards, authentication systems, real estate solutions, and real-time communication applications. I enjoy taking complex requirements and transforming them into reliable, scalable software that people can actually use.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I work mainly with React, Next.js, Node.js, Express, MongoDB, and modern frontend technologies, with a strong focus on clean architecture, performance, and maintainable code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-3">
            <motion.a
              variants={item}
              href="#contact"
              className="cosmic-button flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              Let's Work Together
              <ArrowRight size={17} />
            </motion.a>
            <motion.a
              variants={item}
              href="./Resume1.pdf"
              download="Emmanuel_Okoosi_Fullstack_Engineer_CV.pdf"
              className="px-6 py-2 rounded-xl border border-primary text-primary hover:bg-primary/10 transition text-center"
            >
              View Resume
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-background/40 backdrop-blur-xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Engineering Focus
                </h3>
                <p className="text-sm text-muted-foreground">
                  Building scalable digital experiences
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 items-start"
                >
                  <div className="text-primary mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiGit,
  SiFigma,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";
import { Database, Server, ShieldCheck, Workflow, Zap, Layers } from "lucide-react";

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
    y: 30,
    filter: "blur(5px)",
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

const skills = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible interfaces with modern React ecosystems and performance-focused UI architecture.",
    icon: Layers,
    tools: [
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    description: "Designing reliable APIs, authentication systems, and scalable backend services.",
    icon: Server,
    tools: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiJsonwebtokens, name: "JWT" },
    ],
  },
  {
    title: "Database & Data Architecture",
    description: "Creating efficient data models, relationships, and database-driven applications.",
    icon: Database,
    tools: [
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiPrisma, name: "Prisma" },
    ],
  },
  {
    title: "Product Engineering",
    description: "Turning ideas into complete products with dashboards, payments, realtime features, and user-focused workflows.",
    icon: Workflow,
    tools: [
      { icon: SiGit, name: "Git" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiPostman, name: "Postman" },
      { icon: SiFigma, name: "Figma" },
    ],
  },
];

export default function SkillSection() {
  return (
    <motion.section
    id="skills"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto py-20 space-y-10"
    >
      <motion.div variants={item} className="space-y-4">
        <p className="text-primary font-medium tracking-wide">
          Engineering Stack
        </p>

        <h2 className="text-3xl md:text-5xl font-bold">
          Tools I use to build
          <span className="text-primary"> scalable digital products</span>
        </h2>

        <p className="text-muted-foreground max-w-3xl text-lg">
          My stack focuses on building complete web applications — from polished user interfaces and secure APIs to database architecture, authentication, realtime communication, and production-ready systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            variants={item}
            className="group p-6 rounded-3xl border border-gray-300 bg-background/40 backdrop-blur-xl hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <skill.icon className="text-primary size-6" />
              </div>

              <h3 className="font-semibold text-xl">
                {skill.title}
              </h3>
            </div>

            <p className="text-muted-foreground mb-6">
              {skill.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {skill.tools.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40"
                >
                  <Icon className="text-primary" />
                  <span className="text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={item}
        className="grid md:grid-cols-3 gap-5 pt-8"
      >
        <div className="p-5 rounded-2xl bg-primary/5 border border-gray-300">
          <Zap className="text-primary mb-3" />
          <h3 className="font-semibold">
            Performance Focused
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Optimizing applications for speed, usability, and maintainability.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-primary/5 border border-gray-300">
          <ShieldCheck className="text-primary mb-3" />
          <h3 className="font-semibold">
            Secure Applications
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Implementing authentication, authorization, and protected systems.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-primary/5 border border-gray-300">
          <Workflow className="text-primary mb-3" />
          <h3 className="font-semibold">
            Product Thinking
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Building solutions around real user workflows and business goals.
          </p>
        </div>
      </motion.div>

    </motion.section>
  );
}
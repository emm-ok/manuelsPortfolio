import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Send, Twitter } from "lucide-react";

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
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const contactLinks = [
  {
    title: "LinkedIn",
    description: "Let's connect professionally",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/emm-ok",
  },
  {
    title: "GitHub",
    description: "Explore my engineering work",
    icon: Github,
    link: "https://github.com/emm-ok",
  },
  {
    title: "Email",
    description: "Start a conversation",
    icon: Mail,
    link: "mailto:okoosiemmanuel@gmail.com",
  },
  {
    title: "Twitter",
    description: "Connect on X",
    icon: Twitter,
    link: "https://x.com/EOkoosi77762",
  },
];

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-6xl mx-auto py-24"
    >
      <motion.div variants={item} className="text-center mb-16">
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
          Contact
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Let's Build Something{" "}
          <span className="text-primary">
            Meaningful Together
          </span>
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
          I'm always interested in building thoughtful digital products,
          collaborating with talented teams, and solving challenging problems
          through clean and scalable engineering.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-primary/10 via-transparent to-transparent p-8 md:p-12"
      >
        <div className="absolute -top-20 -right-20 size-72 bg-primary/20 blur-[120px]" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6">
              <span className="size-2 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </div>

            <h3 className="text-2xl md:text-4xl font-bold">
              Have an idea or project in mind?
            </h3>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you need a full-stack application, a scalable platform,
              or help transforming an idea into a polished product, I'd love
              to hear about it.
            </p>

            <a
              href="mailto:okoosiemmanuel@gmail.com"
              target="_blank"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gray-400/50 text-primary-foregraound font-semibold hover:scale-105 transition"
            >
              Start a Conversation
              <Send size={18} />
            </a>
          </div>

          <div className="grid gap-4 w-full md:w-auto">
            {contactLinks.map(({ title, description, icon: Icon, link }) => (
              <motion.a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 bg-background/40 backdrop-blur-sm hover:border-primary/50 transition"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={22} />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold">
                    {title}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
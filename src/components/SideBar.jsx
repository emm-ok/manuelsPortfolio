import { Github, Instagram, Linkedin, Mail, Send, Twitter, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 15,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
    },
  },
};

const socials = [
  {
    icon: <Linkedin size={18} />,
    link: "https://www.linkedin.com/in/emm-ok",
  },
  {
    icon: <Github size={18} />,
    link: "https://github.com/",
  },
  {
    icon: <Twitter size={18} />,
    link: "https://x.com/EOkoosi77762",
  },
  {
    icon: <Instagram size={18} />,
    link: "https://www.instagram.com/_jayboy_k/",
  },
  {
    icon: <Mail size={18} />,
    link: "mailto:okoosiemmanuel@gmail.com",
  },
];

const SideBar = () => {
  return (
    <motion.aside
      variants={container}
      initial="hidden"
      animate="show"
      className="group flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-background/40 backdrop-blur-xl shadow-2xl p-4 w-[72px] hover:w-[250px] transition-all duration-500 overflow-hidden"
    >
      <motion.div variants={item} className="flex items-center gap-2 whitespace-nowrap">
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-ping opacity-70"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-muted-foreground">
          Available for work
        </span>
      </motion.div>
      <motion.div variants={item} className="flex flex-col items-center whitespace-nowrap">
        <span className="text-xl font-bold group-hover:hidden">
          EO
        </span>
        <div className="hidden group-hover:block text-center">
          <h2 className="font-bold text-lg">
            Emmanuel Okoosi
          </h2>
          <p className="text-sm text-muted-foreground">
            Fullstack Engineer
          </p>
        </div>
      </motion.div>
      <motion.div variants={item} className="flex flex-col gap-3">
        {socials.map((social, index) => (
          <SocialIcon key={index} icon={social.icon} link={social.link} />
        ))}
      </motion.div>
      <motion.div variants={item} className="flex flex-col gap-3 w-full">
        <a
          href="#projects"
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition whitespace-nowrap"
        >
          <FolderKanban size={18} />
          <span className="hidden group-hover:inline text-sm">
            View Projects
          </span>
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-white/10 hover:border-primary hover:text-primary transition whitespace-nowrap"
        >
          <Send size={18} />
          <span className="hidden group-hover:inline text-sm">
            Contact Me
          </span>
        </a>
      </motion.div>
    </motion.aside>
  );
};

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="size-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default SideBar;
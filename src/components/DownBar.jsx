import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
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
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/emm-ok",
  },
  {
    icon: <Github size={18} />,
    name: "GitHub",
    link: "https://github.com/",
  },
  {
    icon: <span className="text-base font-semibold">𝕏</span>,
    name: "X",
    link: "https://x.com/EOkoosi77762",
  },
  {
    icon: <Instagram size={18} />,
    name: "Instagram",
    link: "https://www.instagram.com/_jayboy_k/",
  },
  {
    icon: <Mail size={18} />,
    name: "Email",
    link: "mailto:okoosiemmanuel@gmail.com",
  },
];

const SocialIcon = ({
  icon,
  link,
  name,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    className="
      flex size-10 shrink-0
      items-center justify-center
      rounded-full
      border border-white/10
      bg-background/40
      text-muted-foreground
      transition-all duration-300
      hover:border-primary/20
      hover:bg-primary/10
      hover:text-primary
    "
  >
    {icon}
  </a>
);

const DownBar = () => {
  return (
    <motion.aside
      variants={container}
      initial="hidden"
      animate="show"
      className="
        mx-auto w-full max-w-6xl
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-background/40
        p-3
        shadow-2xl
        backdrop-blur-xl
        sm:p-4
      "
    >
      <div
        className="
          flex min-w-0
          flex-col
          gap-4
          sm:flex-row
          sm:flex-wrap
          sm:items-center
          sm:justify-between
        "
      >
        {/* PROFILE */}
        <motion.div
          variants={item}
          className="
            flex min-w-0
            items-center
            gap-3
          "
        >
          {/* AVATAR */}
          <div
            className="
              flex size-11
              shrink-0
              items-center justify-center
              rounded-full
              bg-primary/10
              text-sm
              font-bold
              text-primary
            "
          >
            EO
          </div>

          {/* INFO */}
          <div className="min-w-0">
            <div className="truncate font-semibold">
              Emmanuel Okoosi
            </div>

            <div className="truncate text-sm text-muted-foreground">
              Fullstack Engineer
            </div>
          </div>
        </motion.div>

        {/* AVAILABILITY */}
        <motion.div
          variants={item}
          className="
            flex shrink-0
            items-center gap-2
            rounded-full
            border border-emerald-500/20
            bg-emerald-500/10
            px-3 py-2
            text-xs font-medium
            text-emerald-500
          "
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>

          Available for work
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          variants={item}
          className="
            flex min-w-0
            items-center
            gap-2
            overflow-x-auto
            pb-1
            sm:overflow-visible
            sm:pb-0
          "
        >
          {socials.map((social) => (
            <SocialIcon
              key={social.name}
              icon={social.icon}
              link={social.link}
              name={social.name}
            />
          ))}
        </motion.div>

        {/* ACTIONS */}
        <motion.div
          variants={item}
          className="
            flex
            w-full
            flex-wrap
            gap-2
            sm:w-auto
            sm:shrink-0
          "
        >
          <a
            href="#projects"
            onClick={() => console.log("clicked")}
            className="
              group flex
              min-h-10
              flex-1
              items-center
              justify-center
              gap-2
              rounded-full
              border border-white/10
              px-4
              text-sm font-medium
              transition-all duration-300
              hover:border-primary/20
              hover:bg-primary/10
              hover:text-primary
              sm:flex-none
            "
          >
            <span>Projects</span>

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          <a
            href="#contact"
            className="
              group flex
              min-h-10
              flex-1
              items-center
              justify-center
              gap-2
              rounded-full
              bg-gray-200
              text-gray-600
              px-4
              text-sm
              font-medium
              transition-all duration-300
              hover:opacity-90
              sm:flex-none
            "
          >
            <Mail size={15} />

            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default DownBar;
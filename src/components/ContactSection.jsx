import { motion } from "framer-motion";
import { Send, Linkedin, Twitter, Instagram, Facebook, MailIcon } from "lucide-react";
import { useState } from "react";

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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen py-24 text-foreground">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12"
      >
        {/* Left: Info & Socials */}
        <motion.div
          variants={item}
          className="flex-1 flex flex-col gap-6"
        >
          <h2 className="text-sm tracking-widest text-primary uppercase mb-2">
            Let's <span className="text-primary font-bold">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            Have a project idea, a question, or just want to say hi? I’m always open to collaborate or chat about tech, design, or ideas.
          </p>

          <div className="flex gap-4 justify-center">
            <SocialIcon icon={<Linkedin size={32} />} link="https://www.linkedin.com/in/emm-ok" />
            <SocialIcon icon={<Twitter size={32} />} link="https://x.com/EOkoosi77762" />
            <SocialIcon icon={<Instagram size={32} />} link="https://www.instagram.com/_jayboy_k/" />
            <SocialIcon icon={<Facebook size={32} />} link="https://web.facebook.com/emmanuel.okoosi.5/" />
            <SocialIcon icon={<MailIcon size={32} />} link="mailto:okoosiemmanuel@gmail.com" />
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          variants={item}
          className="flex-1 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">Send a Message</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <motion.input
              variants={item}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded-lg border border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <motion.input
              variants={item}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded-lg border border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <motion.textarea
              variants={item}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="px-4 py-2 rounded-lg border border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
            />
            <motion.button
              variants={item}
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 border px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              <Send size={18} /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition"
  >
    {icon}
  </a>
);

export default ContactSection;

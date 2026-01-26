import { motion } from "framer-motion";
import {
    Send,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    MailIcon,
    User,
} from "lucide-react";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="relative py-32 px-2 overflow-hidden item"
        >
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-12 items-center"
            >
                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col justify-between items-center space-y-10 relative z-10"
                >
                    <h2 className="font-bebas text-sm tracking-widest text-primary-foreground uppercase">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        Have a project idea or just want to say hi? I'm always excited to
                        collaborate or chat about tech, design, or ideas.
                    </p>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative z-10"
                >
                    <div>
                        <h3 className="text-xl md:text-3xl font-bold mb-6">Send a Message</h3>
                        <div className="mt-6 flex space-x-4">
                            <SocialIcon icon={<Linkedin size={40} />} link="https://www.linkedin.com/in/emm-ok" />
                            <SocialIcon icon={<Twitter size={40} />} link="https://x.com/EOkoosi77762" />
                            <SocialIcon icon={<Instagram size={40} />} link="https://www.instagram.com/_jayboy_k/" />
                            <SocialIcon icon={<Facebook size={40} />} link="https://web.facebook.com/emmanuel.okoosi.5/" />
                            <SocialIcon icon={<MailIcon size={40} />} link="mailto:okoosiemmanuel@gmail.com" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

const SocialIcon = ({ icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
        {icon}
    </a>
);


export default ContactSection;

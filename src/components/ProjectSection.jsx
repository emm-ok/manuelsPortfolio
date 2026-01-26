import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ExternalLinkIcon, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CasualsHub",
        description:
            "A modern e-commerce platform delivering a seamless shopping experience for casual apparel and lifestyle products. Intuitive, responsive, and visually polished.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind"],
        demoUrl: "https://casuals-hub-landing-page.vercel.app/",
        githubUrl: "https://github.com/emm-ok/CasualsHub_Landing_Page",
    },
    {
        id: 2,
        title: "CSHub",
        description:
            "Next.js + Sanity CMS e-commerce store. Clean, fast, and responsive, offering a smooth browsing and purchasing experience.",
        image: "/projects/project5.png",
        tags: ["Next.js", "TypeScript", "Sanity", "Tailwind"],
        demoUrl: "https://cs-hub-sanity-next-js-store-ulj4.vercel.app/",
        githubUrl: "https://github.com/emm-ok/CSHub-Sanity-NextJS-Store",
    },
    {
        id: 3,
        title: "Verto",
        description:
            "A startup hub platform for entrepreneurs to showcase products, connect with investors, and build early-stage networks.",
        image: "/projects/project2.png",
        tags: ["Next.js", "TypeScript", "Tailwind", "Sanity", "OAuth"],
        demoUrl: "https://startup-web-app-beta.vercel.app/",
        githubUrl: "https://github.com/emm-ok/Startup-Web-App",
    },
    {
        id: 3,
        title: "PhotoPro",
        description:"A sleek and responsive photography platform built to showcase visual work with clarity and impact. Designed with a minimal interface, smooth interactions, and optimized performance to deliver an immersive viewing experience across all devices.",
        image: "/projects/project6.png",
        tags: ["Next.js", "TypeScript", "Tailwind", "Express", "OAuth", "MongoDB",],
        demoUrl: "https://photography-web-app-i1h9.vercel.app/",
        githubUrl: "https://github.com/emm-ok/photographyWebApp",
    },
];

const ProjectCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const length = projects.length;

    // Auto-slide every 5 seconds
    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prev) => (prev + 1) % length);
        };
        timeoutRef.current = setTimeout(nextSlide, 8000);
        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, length]);

    const prevSlide = () => {
        clearTimeout(timeoutRef.current);
        setCurrentIndex((prev) => (prev - 1 + length) % length);
    };

    const nextSlide = () => {
        clearTimeout(timeoutRef.current);
        setCurrentIndex((prev) => (prev + 1) % length);
    };

    return (
        <section
            id="projects"
            className="relative py-32 px-4text-foreground overflow-hidden"
        >
            <div className="container mx-auto max-w-6xl text-center mb-16">
                <h2 className="font-bebas text-sm tracking-widest text-primary uppercase">
                    <span className="text-primary">Projects</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-md md:text-lg">
                    A showcase of projects I’ve built with attention to detail, performance, and user experience.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative flex items-center justify-center">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 z-20 p-2 bg-black/30 dark:bg-white/20 rounded-full hover:bg-black/50 dark:hover:bg-white/40 transition"
                >
                    <ArrowLeft size={24} />
                </button>

                {/* Motion Carousel */}
                <motion.div
                    className="flex overflow-hidden w-full"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, info) => {
                        if (info.offset.x < -50) nextSlide();
                        if (info.offset.x > 50) prevSlide();
                    }}
                >
                    {projects.map((project, index) => (
                        <AnimatePresence key={project.id}>
                            {index === currentIndex && (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="min-w-full flex flex-col md:flex-row items-center gap-8 md:gap-12"
                                >
                                    {/* Project Image */}
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="relative group w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg"
                                    >
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                            whileHover={{ scale: 1.05 }}
                                        />
                                    </a>

                                    {/* Project Info */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                                        <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start">
                                            {project.tags.map((tag, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    whileHover={{ scale: 1.1 }}
                                                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
                                        <p className="text-muted-foreground text-base md:text-lg mb-4">{project.description}</p>

                                        <div className="flex gap-4 justify-center md:justify-start">
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition"
                                            >
                                                <Github size={18} /> Github
                                            </motion.a>
                                            <motion.a
                                                href={project.demoUrl}
                                                target="_blank"
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition"
                                            >
                                                <ExternalLinkIcon size={18} /> View Demo
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    ))}
                </motion.div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 z-20 p-2 bg-white/30 dark:bg-black/20 rounded-full hover:bg-black/50 dark:hover:bg-white/40 transition"
                >
                    <ArrowRight size={24} />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition ${currentIndex === idx
                                ? "bg-primary"
                                : "bg-stone-400/50 dark:bg-stone-400/30"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectCarousel;

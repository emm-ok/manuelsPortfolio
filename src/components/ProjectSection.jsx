import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ExternalLinkIcon, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CasualsHub",
        description:
            "Modern e-commerce platform delivering a seamless shopping experience for casual apparel and lifestyle products.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind"],
        demoUrl: "https://casuals-hub-landing-page.vercel.app/",
        githubUrl: "https://github.com/emm-ok/CasualsHub_Landing_Page",
    },
    {
        id: 2,
        title: "CSHub",
        description:
            "Next.js + Sanity CMS e-commerce store. Clean, fast, and responsive, offering smooth browsing and purchasing experience.",
        image: "/projects/project5.png",
        tags: ["Next.js", "TypeScript", "Sanity", "Tailwind"],
        demoUrl: "https://cs-hub-sanity-next-js-store-ulj4.vercel.app/",
        githubUrl: "https://github.com/emm-ok/CSHub-Sanity-NextJS-Store",
    },
    {
        id: 3,
        title: "Verto",
        description:
            "Startup hub platform for entrepreneurs to showcase products, connect with investors, and build early-stage networks.",
        image: "/projects/project2.png",
        tags: ["Next.js", "TypeScript", "Tailwind", "Sanity", "OAuth"],
        demoUrl: "https://startup-web-app-beta.vercel.app/",
        githubUrl: "https://github.com/emm-ok/Startup-Web-App",
    },
    {
        id: 4,
        title: "PhotoPro",
        description:
            "Sleek photography platform to showcase visual work with minimal design, smooth interactions, and optimized performance.",
        image: "/projects/project6.png",
        tags: ["Next.js", "TypeScript", "Tailwind", "Express", "OAuth", "MongoDB"],
        demoUrl: "https://photography-web-app-i1h9.vercel.app/",
        githubUrl: "https://github.com/emm-ok/photographyWebApp",
    },
];

const ProjectCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
    const length = projects.length;

    // Auto-slide
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % length);
        }, 8000);
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
        <section id="projects" className="min-h-screen py-24 text-foreground">
            {/* Section Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-sm tracking-widest text-primary uppercase mb-2">
                    Projects
                </h2>
                <p className="text-muted-foreground text-md md:text-lg">
                    A showcase of projects I’ve built with attention to detail, performance, and user experience.
                </p>
            </div>

            {/* Carousel */}
            <div className="max-w-6xl mx-auto">
                {/* Arrows */}
                <div className="flex gap-4 mb-4 justify-center">
                    <button
                        onClick={prevSlide}
                        className="flex px-4 py-2 bg-gray-600/20 dark:bg-white/20 rounded-md hover:bg-black/40 dark:hover:bg-white/40 transition"
                    >
                        <ChevronLeft /> Prev
                    </button>
                    <button
                        onClick={nextSlide}
                        className="flex px-4 py-2 bg-gray-600/20 dark:bg-white/20 rounded-md hover:bg-black/40 dark:hover:bg-white/40 transition"
                    >
                        Next <ChevronRight />
                    </button>
                </div>

                {/* Motion Slide */}n
                <div className="overflow-hidden bg-gray-600/5 p-4 rounded-md">
                    <AnimatePresence mode="wait">
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
                                index === currentIndex && (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-start"
                                    >
                                        {/* Project Image */}
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="md:w-1/2 w-full group overflow-hidden rounded-xl shadow-lg"
                                        >
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-64 md:h-80 object-cover rounded-xl"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </a>

                                        {/* Project Info */}
                                        <motion.div
                                            className="md:w-1/2 w-full flex flex-col justify-start gap-4 text-left"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.6 }}
                                        >
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        whileHover={{ scale: 1.1 }}
                                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
                                            <p className="text-muted-foreground text-base md:text-lg">{project.description}</p>

                                            <div className="flex gap-4">
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
                                        </motion.div>
                                    </motion.div>
                                )
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-start md:justify-start mt-8 gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-10 h-1 rounded-full transition ${currentIndex === idx
                                ? "bg-primary"
                                : "bg-stone-400/50 dark:bg-stone-400/30"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;

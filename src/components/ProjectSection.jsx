"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ExternalLink,
    Layers,
    Maximize2,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../lib/projects";
import ProjectModal from "./ProjectModal";

const AUTOPLAY_DELAY = 5500;

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
        scale: 0.98,
        filter: "blur(6px)",
    }),

    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },

    exit: (direction) => ({
        x: direction > 0 ? -80 : 80,
        opacity: 0,
        scale: 0.98,
        filter: "blur(6px)",
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    const autoplayRef = useRef(null);

    const featuredProject = projects.find((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);

    const totalProjects = otherProjects.length;

    const goToSlide = useCallback(
        (index, newDirection) => {
            if (!totalProjects) return;

            const normalizedIndex =
                (index + totalProjects) % totalProjects;

            setDirection(
                newDirection ??
                    (normalizedIndex > activeIndex ? 1 : -1)
            );

            setActiveIndex(normalizedIndex);
        },
        [activeIndex, totalProjects]
    );

    const nextProject = useCallback(() => {
        if (!totalProjects) return;

        setDirection(1);
        setActiveIndex((current) => (current + 1) % totalProjects);
    }, [totalProjects]);

    const previousProject = useCallback(() => {
        if (!totalProjects) return;

        setDirection(-1);
        setActiveIndex(
            (current) => (current - 1 + totalProjects) % totalProjects
        );
    }, [totalProjects]);

    /*
     * AUTOPLAY
     *
     * Restarts whenever the active project changes.
     * This prevents the carousel from changing immediately
     * after the user manually navigates.
     */
    useEffect(() => {
        if (isPaused || totalProjects <= 1) {
            return;
        }

        autoplayRef.current = setTimeout(() => {
            nextProject();
        }, AUTOPLAY_DELAY);

        return () => {
            if (autoplayRef.current) {
                clearTimeout(autoplayRef.current);
            }
        };
    }, [activeIndex, isPaused, nextProject, totalProjects]);

    /*
     * KEYBOARD NAVIGATION
     */
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
                nextProject();
            }

            if (event.key === "ArrowLeft") {
                previousProject();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [nextProject, previousProject]);

    if (!projects.length) {
        return null;
    }

    const activeProject = otherProjects[activeIndex];

    return (
        <section
            id="projects"
            className="relative overflow-hidden py-28 md:py-32"
        >
            {/* Ambient background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
                {/* =====================================================
                    HEADER
                ====================================================== */}

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mb-16 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl">
                        <motion.div
                            variants={item}
                            className="mb-5 flex items-center gap-3"
                        >
                            <span className="h-px w-8 bg-primary" />

                            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                                Selected Work
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={item}
                            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
                        >
                            Building digital products that solve{" "}
                            <span className="text-primary">
                                real-world problems.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={item}
                            className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
                        >
                            A selection of applications where product thinking,
                            modern frontend engineering, backend architecture,
                            and scalable development practices come together.
                        </motion.p>
                    </div>

                    {/* Project count */}
                    <motion.div
                        variants={item}
                        className="hidden shrink-0 items-center gap-4 rounded-2xl border border-border/60 bg-background/50 px-5 py-4 backdrop-blur-xl sm:flex"
                    >
                        <div>
                            <p className="text-2xl font-bold">
                                {String(projects.length).padStart(2, "0")}
                            </p>

                            <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                Projects
                            </p>
                        </div>

                        <div className="h-8 w-px bg-border" />

                        <div>
                            <p className="text-2xl font-bold">
                                {String(
                                    new Set(
                                        projects.flatMap(
                                            (project) =>
                                                project.technologies
                                        )
                                    ).size
                                ).padStart(2, "0")}
                            </p>

                            <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                Technologies
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* =====================================================
                    FEATURED PROJECT
                ====================================================== */}

                {featuredProject && (
                    <motion.article
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        className="group relative mb-24 overflow-hidden rounded-[2rem] border border-gray-200 bg-background/40 shadow-2xl shadow-black/5 backdrop-blur-xl"
                    >
                        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                            {/* Image */}
                            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[560px]">
                                <img
                                    src={featuredProject.image}
                                    alt={featuredProject.title}
                                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        Featured Project
                                    </span>
                                </div>

                                {/* Image bottom metadata */}
                                <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                                            Case Study
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-white">
                                            {featuredProject.category}
                                        </p>
                                    </div>

                                    <div className="hidden rounded-full border border-white/15 bg-black/20 p-3 text-white backdrop-blur-xl sm:block">
                                        <Maximize2 size={17} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-14">
                                <div className="mb-5 flex items-center gap-2 text-sm font-medium text-primary">
                                    <Layers size={16} />
                                    {featuredProject.category}
                                </div>

                                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    {featuredProject.title}
                                </h3>

                                <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                                    {featuredProject.shortDescription}
                                </p>

                                {/* Technologies */}
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {[...new Set(featuredProject.technologies)].map(
                                        (tech, index) => (
                                            <span
                                                key={`${tech}-${index}`}
                                                className="rounded-full border border-border/70 bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground/80"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="mt-9 flex flex-wrap gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedProject(
                                                featuredProject
                                            )
                                        }
                                        className="inline-flex items-center gap-2 rounded-xl bg-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/20"
                                    >
                                        Explore Details
                                        <ArrowUpRight size={17} />
                                    </button>

                                    <a
                                        href={featuredProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                                    >
                                        <ExternalLink size={17} />
                                        Live Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                )}

                {/* =====================================================
                    OTHER PROJECTS
                ====================================================== */}

                {totalProjects > 0 && (
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onFocusCapture={() => setIsPaused(true)}
                        onBlurCapture={() => setIsPaused(false)}
                    >
                        {/* Carousel heading */}
                        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                                    More Work
                                </p>

                                <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                                    Other selected projects
                                </h3>
                            </div>

                            {/* Desktop navigation */}
                            {totalProjects > 1 && (
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={previousProject}
                                        aria-label="Previous project"
                                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                                    >
                                        <ArrowLeft
                                            size={18}
                                            className="transition-transform duration-300 group-hover:-translate-x-0.5"
                                        />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={nextProject}
                                        aria-label="Next project"
                                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                                    >
                                        <ArrowRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                                        />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* =================================================
                            CAROUSEL
                        ================================================== */}

                        <div
                            className="relative overflow-hidden rounded-[2rem]"
                            role="region"
                            aria-roledescription="carousel"
                            aria-label="Selected projects"
                        >
                            <AnimatePresence
                                initial={false}
                                custom={direction}
                                mode="wait"
                            >
                                <motion.article
                                    key={activeProject.id}
                                    custom={direction}
                                    variants={cardVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    drag={
                                        totalProjects > 1
                                            ? "x"
                                            : false
                                    }
                                    dragConstraints={{
                                        left: 0,
                                        right: 0,
                                    }}
                                    dragElastic={0.18}
                                    onDragEnd={(_, info) => {
                                        const swipeThreshold = 60;

                                        if (
                                            info.offset.x <
                                            -swipeThreshold
                                        ) {
                                            nextProject();
                                        }

                                        if (
                                            info.offset.x >
                                            swipeThreshold
                                        ) {
                                            previousProject();
                                        }
                                    }}
                                    className="cursor-grab select-none active:cursor-grabbing"
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`Project ${
                                        activeIndex + 1
                                    } of ${totalProjects}`}
                                >
                                    <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-background/40 shadow-xl shadow-black/5 backdrop-blur-xl">
                                        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                                            {/* Project image */}
                                            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
                                                <img
                                                    src={
                                                        activeProject.image
                                                    }
                                                    alt={
                                                        activeProject.title
                                                    }
                                                    draggable={false}
                                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                                                {/* Category badge */}
                                                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                                                    <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                                                        {
                                                            activeProject.category
                                                        }
                                                    </span>
                                                </div>

                                                {/* Slide number */}
                                                <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7">
                                                    <div className="rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-xs font-medium text-white backdrop-blur-xl">
                                                        <span className="text-white">
                                                            {String(
                                                                activeIndex +
                                                                    1
                                                            ).padStart(
                                                                2,
                                                                "0"
                                                            )}
                                                        </span>

                                                        <span className="mx-1.5 text-white/40">
                                                            /
                                                        </span>

                                                        <span className="text-white/50">
                                                            {String(
                                                                totalProjects
                                                            ).padStart(
                                                                2,
                                                                "0"
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Project content */}
                                            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                                                <div className="mb-4 flex items-center gap-2 text-sm text-primary">
                                                    <Layers size={16} />
                                                    <span>
                                                        {
                                                            activeProject.category
                                                        }
                                                    </span>
                                                </div>

                                                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                                    {
                                                        activeProject.title
                                                    }
                                                </h3>

                                                <p className="mt-5 leading-7 text-muted-foreground">
                                                    {
                                                        activeProject.shortDescription
                                                    }
                                                </p>

                                                {/* Technologies */}
                                                <div className="mt-7 flex flex-wrap gap-2">
                                                    {[...new Set(activeProject.technologies)]
                                                        .slice(0, 5)
                                                        .map((tech, index) => (
                                                            <span
                                                                key={`${tech}-${index}`}
                                                                className="rounded-full border border-border/70 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                                                            >
                                                                {
                                                                    tech
                                                                }
                                                            </span>
                                                        ))}

                                                    {activeProject
                                                        .technologies
                                                        .length >
                                                        5 && (
                                                        <span className="rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                                                            +
                                                            {activeProject
                                                                .technologies
                                                                .length -
                                                                5}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Actions */}
                                                <div className="mt-9 flex items-center justify-between gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setSelectedProject(
                                                                activeProject
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
                                                    >
                                                        Explore Project
                                                        <ArrowUpRight
                                                            size={17}
                                                        />
                                                    </button>

                                                    <a
                                                        href={
                                                            activeProject.demo
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`View ${activeProject.title}`}
                                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                                    >
                                                        <ExternalLink
                                                            size={17}
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            </AnimatePresence>
                        </div>

                        {/* =================================================
                            CAROUSEL FOOTER
                        ================================================== */}

                        {totalProjects > 1 && (
                            <div className="mt-7 flex items-center justify-between gap-6">
                                {/* Indicators */}
                                <div
                                    className="flex items-center gap-2"
                                    role="tablist"
                                    aria-label="Project slides"
                                >
                                    {otherProjects.map(
                                        (project, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                role="tab"
                                                aria-selected={
                                                    index ===
                                                    activeIndex
                                                }
                                                aria-label={`Go to ${project.title}`}
                                                onClick={() =>
                                                    goToSlide(
                                                        index
                                                    )
                                                }
                                                className="group flex h-6 items-center"
                                            >
                                                <span
                                                    className={`block h-1 rounded-full transition-all duration-500 ${
                                                        index ===
                                                        activeIndex
                                                            ? "w-9 bg-primary"
                                                            : "w-4 bg-border group-hover:w-6 group-hover:bg-primary/50"
                                                    }`}
                                                />
                                            </button>
                                        )
                                    )}
                                </div>

                                {/* Counter */}
                                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                                    <span>
                                        {String(
                                            activeIndex + 1
                                        ).padStart(2, "0")}
                                    </span>

                                    <span className="h-px w-5 bg-border" />

                                    <span>
                                        {String(
                                            totalProjects
                                        ).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Autoplay status */}
                        {totalProjects > 1 && (
                            <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/60">
                                <span
                                    className={`h-1.5 w-1.5 rounded-full ${
                                        isPaused
                                            ? "bg-muted-foreground/40"
                                            : "animate-pulse bg-primary"
                                    }`}
                                />

                                {isPaused
                                    ? "Carousel paused"
                                    : "Auto rotating"}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* =============================================================
                PROJECT MODAL
            ============================================================== */}

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}

export default ProjectSection;
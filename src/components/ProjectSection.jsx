import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "../lib/projects";
import ProjectModal from "./ProjectModal";

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
        y: 40,
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

function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    const featuredProject = projects.find((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);

    return (
        <section id="projects" className="relative py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-3xl mb-20"
                >

                    <motion.span
                        variants={item}
                        className="text-primary uppercase tracking-[0.3em] text-sm"
                    >
                        Selected Work
                    </motion.span>

                    <motion.h2
                        variants={item}
                        className="mt-5 text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Building digital products that solve{" "}
                        <span className="text-primary">
                            real-world problems.
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="mt-6 text-muted-foreground text-lg max-w-2xl"
                    >
                        A collection of applications where I combine product thinking,
                        modern frontend engineering, backend architecture, and scalable
                        development practices.
                    </motion.p>

                </motion.div>


                {/* FEATURED PROJECT */}
                {featuredProject && (
                    <motion.div
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative rounded-3xl border border-gray-200 bg-gray-400/10 backdrop-blur-xl overflow-hidden mb-20"
                    >

                        <div className="grid lg:grid-cols-2">

                            {/* IMAGE */}
                            <div className="relative overflow-hidden group">

                                <img
                                    src={featuredProject.image}
                                    alt={featuredProject.title}
                                    className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-400/10 via-transparent" />

                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 rounded-full bg-primary/20 backdrop-blur text-primary text-sm">
                                        Featured Project
                                    </span>
                                </div>

                            </div>


                            {/* CONTENT */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">

                                <div className="flex items-center gap-2 text-primary text-sm mb-4">
                                    <Layers size={16} />
                                    {featuredProject.category}
                                </div>


                                <h3 className="text-3xl md:text-4xl font-bold">
                                    {featuredProject.title}
                                </h3>


                                <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                                    {featuredProject.shortDescription}
                                </p>


                                <div className="flex flex-wrap gap-2 mt-6">
                                    {featuredProject.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                                <div className="flex flex-wrap gap-4 mt-8">

                                    <button
                                        onClick={() => setSelectedProject(featuredProject)}
                                        className="cosmic-button flex items-center gap-2"
                                    >
                                        View Case Study
                                        <ArrowUpRight size={18} />
                                    </button>


                                    <a
                                        href={featuredProject.github}
                                        target="_blank"
                                        className="px-5 py-3 rounded-xl border border-border flex items-center gap-2 hover:bg-primary hover:text-black transition"
                                    >
                                        <Github size={18} />
                                        Github
                                    </a>

                                </div>

                            </div>

                        </div>

                    </motion.div>
                )}



                {/* PROJECT GRID */}

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >

                    {otherProjects.map((project) => (

                        <motion.article
                            key={project.id}
                            variants={item}
                            whileHover={{ y: -8 }}
                            className="group rounded-3xl overflow-hidden border border-gray-200 bg-gray-400/10  backdrop-blur-xl"
                        >


                            {/* IMAGE */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-400/40 transparent" />

                            </div>


                            <div className="p-6">


                                <div className="text-primary text-sm mb-3">
                                    {project.category}
                                </div>


                                <h3 className="text-2xl font-semibold">
                                    {project.title}
                                </h3>


                                <p className="text-muted-foreground mt-3">
                                    {project.shortDescription}
                                </p>


                                <div className="flex flex-wrap gap-2 mt-5">

                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1 rounded-full bg-secondary"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>



                                <div className="flex justify-between items-center mt-8">

                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="text-primary flex items-center gap-2 hover:gap-3 transition-all"
                                    >
                                        Explore
                                        <ArrowUpRight size={16} />
                                    </button>


                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition"
                                    >
                                        <ExternalLink size={18} />
                                    </a>

                                </div>


                            </div>


                        </motion.article>

                    ))}


                </motion.div>


            </div>


            {/* CASE STUDY MODAL PLACEHOLDER */}

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
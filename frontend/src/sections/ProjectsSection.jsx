import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "🎓 College Placement Cell",
        description:
            "A College Placement Management System with Students, College Admin, and Placement Admin modules. Features JWT authentication, company listings, student applications, and selection tracking.",
        tech: ["MERN Stack", "JWT", "MongoDB", "React.js"],
        github: "https://github.com/ankitku817/Collage.git",
        demo: null,
    },
    {
        id: 2,
        title: "🐦 Twiller - Twitter Clone",
        description:
            "A Twitter-like platform with tweeting, likes, comments, and Firebase Authentication. Built using the MERN stack with a fully responsive interface.",
        tech: ["React", "Firebase", "Node.js", "MongoDB"],
        github: "https://github.com/ankitku817/Twiitter.git",
        demo: null,
    },
    {
        id: 3,
        title: "💼 Personal Portfolio Website",
        description:
            "A responsive personal portfolio website showcasing projects, skills, and contact information. Built with React and Tailwind CSS.",
        tech: ["React", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/ankitku817/portfolio-website",
        demo: "https://yourusername.github.io/portfolio-website/",
    },
];
export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="font-sans w-full max-h-screen py-8 px-8 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-6 tracking-tight leading-tight font-sans">
                🚀<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                    Featured Projects
                </span> 💻
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-6 max-w-2xl mx-auto text-center font-light">
                Here are some of my best and most recent projects that showcase my skills and creativity. ✨🔧
            </p>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {projects.map(({ id, title, description, tech, github, demo }) => (
                    <motion.article
                        key={id}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: id * 0.2 }}
                    >
                        <header>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                {description}
                            </p>
                        </header>

                        <div className="flex flex-wrap gap-2 my-4">
                            {tech.map((t, index) => (
                                <span
                                    key={index}
                                    className="text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                                >
                                    🔧 {t}
                                </span>
                            ))}
                        </div>

                        <footer className="flex gap-4 mt-auto">
                            {github && (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${title} GitHub`}
                                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                                >
                                    <FaGithub size={22} />
                                </a>
                            )}
                            {demo && (
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${title} Live demo`}
                                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition"
                                >
                                    <span>Live</span>
                                    <FaExternalLinkAlt size={16} />
                                </a>
                            )}
                        </footer>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

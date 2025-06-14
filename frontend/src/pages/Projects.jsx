import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiDjango,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Fullstack Portfolio",
    description:
      "A sleek fullstack portfolio built with React, Node.js, Express, and MongoDB. Responsive design with Tailwind CSS and smooth animations.",
    techStack: [
      <FaReact className="text-blue-500" title="React" key="react" />,
      <FaNodeJs className="text-green-600" title="Node.js" key="node" />,
      <SiExpress className="text-gray-700" title="Express" key="express" />,
      <SiMongodb className="text-green-700" title="MongoDB" key="mongodb" />,
      <SiTailwindcss className="text-teal-400" title="Tailwind CSS" key="tailwind" />,
    ],
    github: "https://github.com/ankitku817/fullstack-portfolio",
    liveDemo: "https://your-portfolio-live-site.com",
  },
  {
    id: 2,
    title: "College Placement Cell (MERN Stack)",
    description:
      "A robust placement management system with modules for students, college admins, and placement admins. Features include registration, listings, applications, rounds, selections, and secure JWT-based authentication.",
    techStack: [
      <FaReact className="text-blue-500" title="React" key="react" />,
      <FaNodeJs className="text-green-600" title="Node.js" key="node" />,
      <SiExpress className="text-gray-700" title="Express" key="express" />,
      <SiMongodb className="text-green-700" title="MongoDB" key="mongodb" />,
      <SiJavascript className="text-yellow-400" title="JavaScript" key="js" />,
    ],
    github: "https://github.com/ankitku817/Collage.git",
    liveDemo: null,
  },
  {
    id: 3,
    title: "Twiller - Twitter Clone (MERN + Firebase)",
    description:
      "A Twitter-like platform with tweet posting, likes, comments, follows, and Firebase authentication. Clean UI and fully responsive design.",
    techStack: [
      <FaReact className="text-blue-500" title="React" key="react" />,
      <SiFirebase className="text-yellow-400" title="Firebase" key="firebase" />,
      <FaNodeJs className="text-green-600" title="Node.js" key="node" />,
      <SiMongodb className="text-green-700" title="MongoDB" key="mongodb" />,
    ],
    github: "https://github.com/ankitku817/Twiitter.git",
    liveDemo: null,
  },
  {
    id: 4,
    title: "Blogging Application (Django)",
    description:
      "A dynamic blogging platform built with Django. Features include post creation/editing, commenting, user auth, and admin panel via Django Admin.",
    techStack: [
      <FaPython className="text-blue-600" title="Python" key="python" />,
      <SiDjango className="text-green-800" title="Django" key="django" />,
    ],
    github: "https://github.com/ankitku817/django-blog-app",
    liveDemo: null,
  },
];

const cardVariants = {
  offscreen: { y: 60, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16"
      aria-label="Projects Section"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-14 tracking-tight leading-tight font-sans">
          <div className="flex justify-center items-center gap-3 text-4xl sm:text-5xl mb-2">
            <span role="img" aria-label="rocket">🚀</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              Featured Projects
            </span>
            <span role="img" aria-label="laptop">💻</span>
          </div>
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, techStack, github, liveDemo }) => (
            <motion.article
              key={id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <header className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </header>

              <div className="flex flex-wrap gap-3 mb-6">
                {techStack.map((icon, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-1 text-sm"
                    aria-label="Technology icon"
                  >
                    {icon}
                  </div>
                ))}
              </div>

              <footer className="mt-auto flex space-x-6 text-gray-600 dark:text-gray-400">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} GitHub repository`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {liveDemo && (
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} Live demo`}
                    className="hover:text-pink-600 dark:hover:text-pink-400 transition flex items-center gap-1"
                  >
                    Live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                )}
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

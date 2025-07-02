import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Resume from '../assets/Resume.pdf';

const experiences = [
    {
        role: "Web Developer Intern",
        company: "NullClass Edtech Pvt Ltd",
        duration: "Aug 2024 – Dec 2024",
        details: [
            "Worked on a full-stack Twitter clone project using the MERN stack.",
            "Developed user authentication using Firebase and designed tweet, like, and comment functionality.",
            "Collaborated with a team to build responsive UI and real-time features using React and Node.js.",
        ],
    },
];

const projects = [
    {
        name: "Twiller (Twitter Clone - MERN Stack)",
        github: "https://github.com/ankitku817/TwitterClone",
        description:
            "Twiller is a Twitter-like social media platform developed during my internship. It includes features like tweeting, liking, commenting, following users, and generating a personalized feed. I used React for the frontend, Node.js and Express for the backend, MongoDB for database, and Firebase Authentication for secure login. The UI is responsive and mobile-friendly.",
    },
];

const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className=" mx-auto px-6 py-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
        >
            <motion.h2
                className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Experience & Project
            </motion.h2>

            {/* Internship Experience */}
            <div className="mb-12">
                {experiences.map(({ role, company, duration, details }, idx) => (
                    <motion.div
                        key={idx}
                        className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-indigo-600">{role}</h3>
                        <p className="italic text-gray-700 dark:text-gray-300">{company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{duration}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                            {details.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
            <div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Project</h3>
                <div className="grid md:grid-cols-1 gap-8">
                    {projects.map(({ name, github, description }, idx) => (
                        <motion.div
                            key={idx}
                            className="p-6 bg-indigo-50 dark:bg-indigo-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <h4 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">{name}</h4>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                            >
                                <FaGithub className="mr-2" /> View on GitHub
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mt-12 text-center">
                <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
                >
                    See My Resume
                </a>
            </div>
        </section>
    );
};

export default ExperienceSection;

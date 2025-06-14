import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiDjango,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "text-sky-400", emoji: "⚛️" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600", emoji: "🌿" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", emoji: "🍃" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", emoji: "🧱" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600", emoji: "🎨" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400", emoji: "✨" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400", emoji: "🌊" },
  { name: "Python", icon: <FaPython />, color: "text-blue-400", emoji: "🐍" },
  { name: "Django", icon: <SiDjango />, color: "text-green-800", emoji: "🌿" },
  { name: "Java", icon: <FaJava />, color: "text-red-600", emoji: "☕" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500", emoji: "🔧" },
  { name: "MySQL", icon: <FaDatabase />, color: "text-purple-500", emoji: "🗄️" },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full py-6 px-4 md:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          ⚒️ My <span className="text-indigo-500">Skills</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          Technologies I work with to build seamless full-stack experiences.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 pb-6 mb-6 hover:shadow-xl hover:shadow-indigo-300/30 transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className={`text-5xl mb-2 ${skill.color}`}>{skill.icon}</div>
            <div className="text-2xl mb-1">{skill.emoji}</div>
            <p className="text-lg font-semibold text-gray-700 dark:text-white text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;

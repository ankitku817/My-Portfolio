import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaptopCode,
  FaPython,
  FaJava,
  FaDownload,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiDjango,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaReact className="text-blue-500" />, name: "React" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-300" />, name: "Express" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
  { icon: <FaDatabase className="text-yellow-500" />, name: "SQL & NoSQL" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <FaLaptopCode className="text-purple-600" />, name: "Web Dev" },
  { icon: <FaPython className="text-blue-400" />, name: "Python" },
  { icon: <FaJava className="text-red-600" />, name: "Java" },
  { icon: <SiDjango className="text-green-500" />, name: "Django (Basic)" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full px-4 py-16 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-8 underline decoration-pink-500 decoration-4 decoration-wavy"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg md:text-xl max-w-4xl mx-auto text-center text-gray-200 mb-12 leading-relaxed"
      >
        I am a passionate{" "}
        <span className="text-pink-400 font-semibold">Full Stack Developer</span> skilled in building scalable, modern
        web applications. I love crafting clean code and creating user-friendly designs using technologies like React,
        Node.js, and Python.
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto mb-16"
      >
        {skills.map(({ icon, name }) => (
          <motion.div
            variants={itemVariants}
            key={name}
            className="flex flex-col items-center space-y-2 p-4 bg-white bg-opacity-10 rounded-xl shadow-md hover:scale-110 hover:bg-pink-600 hover:text-white transition-transform duration-300"
          >
            <div className="text-4xl">{icon}</div>
            <p className="text-sm md:text-base font-medium">{name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Resume Button */}
      <motion.div
        className="flex justify-center mb-14"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
      </motion.div>

      {/* Traits Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 p-6 md:p-8 rounded-xl text-white max-w-4xl mx-auto shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center">
          Why Work With Me?
        </h3>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-100 space-y-2">
          <li>Clean, maintainable, and scalable code</li>
          <li>Quick learner & team collaborator</li>
          <li>Performance-focused UI/UX development</li>
          <li>Experience across frontend, backend & databases</li>
          <li>Consistent learner with a growth mindset</li>
        </ul>
      </motion.div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

import Hero from "../sections/Hero";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import Timeline from "../sections/Timeline";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 font-sans scroll-smooth">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <Hero />
      </motion.section>
      <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full my-0" />

      <motion.section
        className="w-full py-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SkillsSection />
      </motion.section>

      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full my-0" />

      {/* Projects Section */}
      <motion.section
        className="w-full py-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ProjectsSection />
      </motion.section>
      <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full my-0" />


      {/* Timeline Section */}
      <motion.section
        className="w-full py-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Timeline />
      </motion.section>
      <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full my-0" />
    </main>
  );
}

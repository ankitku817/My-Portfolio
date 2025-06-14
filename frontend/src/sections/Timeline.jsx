import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";

const timelineEvents = [
  {
    id: 1,
    date: "Aug 2024 – Dec 2024",
    title: "Web Developer Intern",
    location: "NullClass Edtech Pvt Ltd",
    description:
      "Developed and maintained web apps using MongoDB, Express, React, and Node.js. Built RESTful APIs and integrated third-party services. Contributed to both frontend and backend for seamless user experiences.",
    icon: <FaBriefcase className="text-indigo-500" />,
  },
  {
    id: 2,
    date: "2021 – 2025",
    title: "B.Tech - Computer Science & Engineering",
    location: "Amritsar Group of Colleges, Punjab",
    description:
      "Graduated with a CGPA of 7.30. Specialized in software engineering and full-stack web development.",
    icon: <FaGraduationCap className="text-green-500" />,
  },
  {
    id: 3,
    date: "2019 – 2021",
    title: "Higher Secondary (12th Grade)",
    location: "L.M. +2 High School, Bihar",
    description:
      "Achieved 77.2% in the Bihar School Examination Board with focus on science subjects.",
    icon: <FaGraduationCap className="text-blue-500" />,
  },
  {
    id: 4,
    date: "2019",
    title: "Matriculation (10th Grade)",
    location: "L.M. +2 High School, Bihar",
    description:
      "Secured 73.8% in Bihar Board exams with strong foundation in mathematics and science.",
    icon: <FaStar className="text-yellow-400" />,
  },
  {
    id: 5,
    date: "June – Aug 2023",
    title: "Web Development Training",
    location: "Internshala",
    description:
      "Completed an 8-week intensive training covering HTML, CSS, JavaScript, and backend basics.",
    icon: <FaBriefcase className="text-purple-500" />,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="min-h-screen w-full py-2 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
          My Journey
        </h2>

        <div className="relative border-l-4 border-indigo-500 dark:border-indigo-700 pl-6">
          {timelineEvents.map(({ id, date, title, location, description, icon }) => (
            <motion.div
              key={id}
              className="mb-14 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: id * 0.2 }}
            >
              {/* Icon */}
              <div className="absolute -left-6 top-0 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-indigo-400 dark:border-indigo-600 shadow-lg group-hover:scale-110 transition-transform">
                {icon}
              </div>

              {/* Content */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-shadow hover:shadow-indigo-400/40">
                <time className="block mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {date}
                </time>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm font-medium text-indigo-500 dark:text-indigo-300 mb-2">{location}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

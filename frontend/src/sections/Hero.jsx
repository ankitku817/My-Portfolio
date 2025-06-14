import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/Profile.jpg";
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white px-6 md:px-20 py-12 relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-pink-400 animate-fadeInUp">
          <img
            src={profilePic}
            alt="Ankit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left animate-fadeInUp delay-200">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow">
            Hi, I'm <span className="text-pink-400">Ankit Kumar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
            I'm a <span className="text-pink-300 font-semibold">Full Stack Developer</span> skilled in MERN stack,
            passionate about building scalable, user-friendly web applications. Currently open to a
            <span className="font-bold text-white"> full-time opportunity</span> to grow and contribute.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-base text-gray-300 mb-6">
            <p><span className="font-semibold text-white">🎓 College:</span> AGC Amritsar Punjab</p>
            <p><span className="font-semibold text-white">🎂 Age:</span> 21</p>
            <p><span className="font-semibold text-white">📅 Batch:</span> 2021 – 2025</p>
            <p><span className="font-semibold text-white">📍 Location:</span> Amritsar Punjab</p>
          </div>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/ankitku817"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-kumar-a3a7bb2b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <svg
          className="w-8 h-8 text-pink-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
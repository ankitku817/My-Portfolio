// src/components/SocialIcons.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialIcons = ({ size = 22, className = "" }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href="https://github.com/ankitku817"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        aria-label="GitHub"
      >
        <FaGithub size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/ankit-kumar-a3a7bb2b3"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={size} />
      </a>
      <a
        href="mailto:ankitkumcse@gmail.com"
        className="hover:text-white transition"
        aria-label="Email"
      >
        <FaEnvelope size={size} />
      </a>
    </div>
  );
};

export default SocialIcons;

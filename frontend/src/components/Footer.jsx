import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-6 px-4 mt-auto'>
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between'>
        <p className='text-sm text-center sm:text-left mb-2 sm:mb-0'>
          &copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.
        </p>
        <div className='flex space-x-4'>
          <a href='https://github.com/ankitku817'
            target='_blank'
            rel='noonpener noreferrer'
            className='hover:text-white transition'
            aria-label='GitHub'
          >
            <FaGithub size={20} />
          </a>
          <a
            href='https://www.linkedin.com/in/ankit-kumar-a3a7bb2b3'
            target='_blank'
            rel='noonpener noreferrer'
            className='hover:text-white transition'
            aria-label='LinkedIn'>
            <FaLinkedin size={20} />
            </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
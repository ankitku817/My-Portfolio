import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
  
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
    setDarkMode(!darkMode);
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          AnkitDev
        </Link>

        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`hover:text-blue-600 transition-colors ${activePath === path ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === path) {
                    const el = document.getElementById(name.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = path;
                  }
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleDarkMode}
          className="hidden md:flex items-center text-gray-700 dark:text-gray-300 focus:outline-none mr-4"
          aria-label="Toggle dark mode"
          title="Toggle Dark Mode"
        >
          {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
        </button>
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <ul>
          {navLinks.map(({ name, path }) => (
            <li key={name} className="border-b border-gray-200 dark:border-gray-700">
              <Link
                to={path}
                className={`block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 ${
                  activePath === path ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  if (location.pathname === path) {
                    const el = document.getElementById(name.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = path;
                  }
                }}
              >
                {name}
              </Link>
            </li>
          ))}
          <li className="px-6 py-3 flex items-center">
            <span className="text-gray-700 dark:text-gray-300 mr-2">Dark Mode</span>
            <button onClick={toggleDarkMode}>
              {darkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-4">
      <FiAlertCircle className="text-9xl mb-8 animate-pulse text-yellow-300 drop-shadow-lg" />

      <h1 className="text-6xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
        404
      </h1>

      <p className="text-xl max-w-md text-center mb-8 drop-shadow-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-purple-900 font-semibold text-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        aria-label="Go back to home page"
      >
        Go Back Home
      </Link>
    </div>
  );
}

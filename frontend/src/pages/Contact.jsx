import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Simple form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length) {
  //     setErrors(validationErrors);
  //     return;
  //   }
  //   setSubmitting(true);
  //   setSuccess(false);
  //   setTimeout(() => {
  //     setSubmitting(false);
  //     setSuccess(true);
  //     setFormData({ name: '', email: '', message: '' });
  //   }, 1500);
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrors({ message: error.message });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 py-16 sm:py-20"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gradient bg-gradient-to-r from-purple-500 to-pink-500">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4 text-purple-600">
            <FaMapMarkerAlt size={28} />
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">Amritsar, Punjab India</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-purple-600">
            <FaEnvelope size={28} />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-700 dark:text-gray-300">ankitkumcse@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-purple-600">
            <FaPhone size={28} />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-700 dark:text-gray-300">+91 9835968493</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-8 italic">
            Feel free to reach out for collaboration or just a friendly hello!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col space-y-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                dark:bg-gray-900 dark:text-gray-100`}
            />
            {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                dark:bg-gray-900 dark:text-gray-100`}
            />
            {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className={`w-full px-4 py-3 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                dark:bg-gray-900 dark:text-gray-100`}
            />
            {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-md shadow-md transition duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {submitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>

          {success && (
            <p className="text-green-500 font-semibold mt-4 text-center">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}

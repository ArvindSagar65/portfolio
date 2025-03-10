import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import animationData from "../src/assets/space-animation.json";

function Contact() {
  return (
    <section
      id="contact-section"
      className="relative w-full min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-b from-[#000000] to-[#000000] text-white px-12 overflow-hidden"
    >
      {/* Falling Stars Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: "100vh", opacity: 1 }}
            transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute w-[2px] h-[8px] bg-white opacity-70"
            style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * -100}vh` }}
          />
        ))}
      </div>

      {/* Floating Lottie Animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-10 w-32 h-32"
      >
        <Lottie animationData={animationData} loop autoplay />
      </motion.div>

      {/* Contact Content */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold text-blue-400">Contact Me</h2>
        <p className="text-lg mt-3 text-gray-300">Let's connect across the galaxy!</p>
      </motion.div>

      {/* Social Media Icons */}
      <div className="mt-8 flex gap-6">
        {[
          { href: "https://github.com/ArvindSagar65", icon: <FaGithub />, color: "text-white" },
          { href: "https://www.linkedin.com/in/arvind-sagar-a03162293/", icon: <FaLinkedin />, color: "text-blue-400" },
          { href: "https://x.com/MoistMa06863744", icon: <FaTwitter />, color: "text-blue-500" },
        ].map(({ href, icon, color }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer ${color} text-4xl`}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      {/* Download Resume Button */}
      <motion.a
        href="/assets/resume.pdf"
        download
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg flex items-center gap-2 
                  shadow-lg hover:bg-blue-700 transition-transform duration-300"
      >
        <FaDownload /> Download Resume
      </motion.a>

      {/* Blog Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl mt-12 p-6 bg-gray-900 bg-opacity-90 rounded-lg border border-gray-700 shadow-lg"
      >
        <h3 className="text-3xl font-bold text-blue-300 mb-4">Latest Blog Posts</h3>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-white">🚀 Exploring the Cosmos of Web Dev</h4>
            <p className="text-gray-300">A journey into the latest web technologies and best practices.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-white">🎨 Designing for the Future</h4>
            <p className="text-gray-300">How design trends are evolving in 2025 and beyond.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;

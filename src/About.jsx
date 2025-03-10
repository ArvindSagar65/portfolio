import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import codingAnimation from "/src/assets/coding.json";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { FaReact, FaAws, FaPython, FaJava, FaJs, FaNodeJs, FaArrowUp } from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { icon: <FaReact className="text-blue-400" />, name: "React", description: "A JavaScript library for building UIs." },
  { icon: <SiTailwindcss className="text-blue-500" />, name: "Tailwind CSS", description: "A utility-first CSS framework." },
  { icon: <SiDjango className="text-green-600" />, name: "Django", description: "A Python framework for web apps." },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript", description: "A versatile programming language." },
  { icon: <FaAws className="text-orange-500" />, name: "AWS", description: "Cloud computing services by Amazon." },
  { icon: <FaPython className="text-blue-600" />, name: "Python", description: "A high-level programming language." },
  { icon: <FaJava className="text-red-500" />, name: "Java", description: "A widely-used object-oriented language." },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", description: "JavaScript runtime for backend." },
];

const About = () => {
  const [showChart, setShowChart] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setShowChart(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = {
    labels: ["React", "Tailwind", "Django", "JavaScript", "AWS", "Python"],
    datasets: [
      {
        data: [30, 20, 15, 15, 10, 10],
        backgroundColor: ["#00FFFF", "#FF00FF", "#800080", "#FFD700", "#FF4500", "#1E90FF"],
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-10 bg-black text-white w-full overflow-hidden">
      {/* Stars Falling Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-2 bg-white rounded-full opacity-80"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, 1000], opacity: [1, 0] }}
            transition={{ duration: Math.random() * 5 + 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        <div className="text-center md:text-left max-w-xl">
          <p className="text-lg md:text-xl">
            Hi, I'm <span className="text-pink-500 font-bold">Arvind!</span> I love building websites and applications that bring ideas to life.
            I specialize in modern web development and coding in multiple programming languages.
          </p>
          <div className="mt-6">
            <Lottie animationData={codingAnimation} className="w-72 md:w-96" />
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-4xl relative">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {tech.icon}
                {hoveredTech === tech && (
                  <div className="absolute bottom-12 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg w-max opacity-90">
                    {tech.name}: {tech.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {showChart && (
          <div className="relative w-80 md:w-96 transition-opacity duration-700 ease-in-out">
            <div className="absolute inset-0 bg-black opacity-50 rounded-full shadow-2xl" />
            <Pie data={data} className="relative" />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  { id: 1, title: "Project one", description: "coming soon....." },
  { id: 2, title: "Project two", description: "" },
  { id: 3, title: "Project three", description: "" },
  { id: 4, title: "Project four", description: "" },
];

function Project() {
  const [index, setIndex] = useState(0);
  const [animationData, setAnimationData] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    fetch("/assets/space-animation.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  const changeProject = (direction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (direction === "next" ? (prev + 1) % projects.length : (prev - 1 + projects.length) % projects.length));
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <section id="projects" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-12 overflow-hidden">
      {/* Falling Stars Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              opacity: Math.random(),
            }}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {animationData && (
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="absolute top-10 right-10 w-32 h-32">
          <Lottie animationData={animationData} loop autoplay />
        </motion.div>
      )}

      <div className="relative w-full max-w-5xl h-96 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isTransitioning && (
            <motion.div
              key={projects[index].id}
              initial={{ x: 200, opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ x: 0, opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full h-96 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl shadow-2xl text-center px-10 border border-gray-600 backdrop-blur-lg relative"
            >
              <motion.div className="absolute inset-0 w-full h-full rounded-2xl border border-blue-500 opacity-50 blur-md" animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
              <motion.h3 className="text-4xl font-semibold text-blue-400" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                {projects[index].title}
              </motion.h3>
              <motion.p className="text-lg mt-3 text-gray-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                {projects[index].description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Particle Break Effect */}
        {isTransitioning && (
          <motion.div
            key={`particles-${index}`}
            className="absolute w-full h-96 flex flex-wrap justify-center items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-blue-500 rounded-full absolute"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                animate={{
                  x: Math.random() > 0.5 ? 100 : -100,
                  y: Math.random() > 0.5 ? 100 : -100,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        )}
      </div>

      <motion.button onClick={() => changeProject("prev")} whileHover={{ scale: 1.2, rotate: -10, boxShadow: "0px 0px 20px rgba(0,255,255,0.8)" }} whileTap={{ scale: 0.9 }} className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-blue-400 p-6 rounded-full shadow-xl border border-blue-500 hover:bg-gray-700 transition flex items-center justify-center">
        <FaArrowLeft className="text-2xl" />
      </motion.button>
      <motion.button onClick={() => changeProject("next")} whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0px 0px 20px rgba(0,255,255,0.8)" }} whileTap={{ scale: 0.9 }} className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-blue-400 p-6 rounded-full shadow-xl border border-blue-500 hover:bg-gray-700 transition flex items-center justify-center">
        <FaArrowRight className="text-2xl" />
      </motion.button>
    </section>
  );
}

export default Project;

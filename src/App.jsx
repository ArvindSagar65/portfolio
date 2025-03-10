import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Loader from "./Loader";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="min-h-screen text-white text-center bg-black relative">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <About />
          <Project />
          <Contact />
        </>
      )}
      <ScrollToTop /> {/* Ensure it's outside the loading condition */}
    </div>
  );
}

export default App;

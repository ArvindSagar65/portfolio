import React, { useEffect } from "react";
import "./index.css";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const canvas = document.getElementById("starCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let connections = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      connections.forEach((conn, index) => {
        ctx.beginPath();
        ctx.moveTo(conn.x1, conn.y1);
        ctx.lineTo(conn.x2, conn.y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${conn.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        conn.opacity -= 0.02;
        if (conn.opacity <= 0) connections.splice(index, 1);
      });

      requestAnimationFrame(animateStars);
    }
    animateStars();

    canvas.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      let nearbyStars = stars.filter(
        (star) => Math.hypot(star.x - clientX, star.y - clientY) < 80
      );
      if (nearbyStars.length > 1) {
        for (let i = 0; i < nearbyStars.length - 1; i++) {
          connections.push({
            x1: nearbyStars[i].x,
            y1: nearbyStars[i].y,
            x2: nearbyStars[i + 1].x,
            y2: nearbyStars[i + 1].y,
            opacity: 1,
          });
        }
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden">
      <canvas id="starCanvas" className="absolute top-0 left-0 w-full h-full z-0" />

      <h1 className="title relative z-10 animated-text">
        Welcome To My Website
      </h1>

      <div className="mt-8 flex gap-4 z-10">
        <button
          className="px-6 py-2 bg-purple-700 rounded-full text-white transition-transform hover:scale-110 shadow-md"
          onClick={() => scrollToSection("about")}
        >
          About Me
        </button>
        <button
          className="px-6 py-2 bg-indigo-700 rounded-full text-white transition-transform hover:scale-110 shadow-md"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className="px-6 py-2 bg-teal-700 rounded-full text-white transition-transform hover:scale-110 shadow-md"
          onClick={() => scrollToSection("contact-section")}
        >
          More
        </button>
      </div>
    </div>
  );
}

export default Hero;

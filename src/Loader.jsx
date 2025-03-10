import React from "react";
import Lottie from "lottie-react";
import animationData from "./assets/Animation - 1741417118584.json"; // Corrected path

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Lottie animationData={animationData} loop={true} className="w-48 h-48" />
    </div>
  );
};

export default Loader;

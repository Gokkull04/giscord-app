import React, { useState } from "react";
import backgroundImage from "./assets/background.jpg";

const ImageZoomEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    setPosition({ x, y });
    setShowDescription(x < 0.5); // Show description when cursor is on the left side
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute w-[120%] h-[120%] transition-transform duration-500"
        style={{
          transform: `scale(${1 + position.x * 0.4}) rotate(${
            position.x > 0.5 ? (position.x - 0.5) * 30 : position.x * -10
          }deg)`,
        }}
      >
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {showDescription && (
        <div className="absolute left-10 text-white max-w-xs opacity-80 transition-opacity duration-500">
          <h2 className="text-2xl font-semibold">Welcome to our website</h2>
          <p className="text-base">
            Our motive is to create the projects given by the clients <br />{" "}
            within the given period of time.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageZoomEffect;
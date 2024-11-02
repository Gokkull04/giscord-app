import React, { useState } from "react";

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
        className="absolute w-[120%] h-[120%] bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: "url('https://your-image-url.com/image.jpg')", // Replace with your image URL
          transform: `scale(${1 + position.x * 0.2}) rotate(${
            position.x * 10 - 5
          }deg)`,
        }}
      />
      {showDescription && (
        <div className="absolute left-10 text-white max-w-xs opacity-80 transition-opacity duration-500">
          <h2 className="text-2xl font-semibold">Image Description</h2>
          <p className="text-base">
            This is a description that appears when the cursor is on the left
            side.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageZoomEffect;

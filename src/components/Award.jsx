import React, { useState } from "react";
import img1 from "../assets/massart.png";

const Award = () => {
  const awards = [img1, img1, img1, img1, img1];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? awards.length - 1 : prev - 1
    );
  };

  return (
    <section className="award-slider-container">
      <button className="arrow left" onClick={prevSlide}>
        ←
      </button>

      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {awards.map((award, index) => (
            <div className="slide" key={index}>
              <img src={award} alt="Award" />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        →
      </button>
    </section>
  );
};

export default Award;
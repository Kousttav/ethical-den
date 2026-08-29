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
    <section className="award">
      <div className="award-heading">
        <h1>Award</h1>
        <p>
          Learning provides the environment and inspiration to create
          and exhibit that brings people together to build connections
          to community.
        </p>
      </div>

      {/* Desktop */}
      <div className="award-container">
        {awards.map((award, index) => (
          <div className="award-item" key={index}>
            <img src={award} alt="Award" />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="award-mobile-slider">
        <button className="arrow left" onClick={prevSlide}>
          ←
        </button>

        <div className="mobile-slide">
          <img src={awards[current]} alt="Award" />
        </div>

        <button className="arrow right" onClick={nextSlide}>
          →
        </button>
      </div>
    </section>
  );
};

export default Award;
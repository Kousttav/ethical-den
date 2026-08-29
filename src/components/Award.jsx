import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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
      </div>
    </section>
  );
};

export default Award;
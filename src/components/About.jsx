import React, { useState, useEffect } from "react";
import image1 from "../assets/12.png";
import image2 from "../assets/13.png";
import image3 from "../assets/14.png";

const About = () => {
  const images = [image1, image2, image3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="about-page">
      <div className="left-section">
        <div className="content">
          <h2>
            About <span>Tala</span>
          </h2>

          <p>
            Tala Prattoy upholds the art aspects of Durga Puja.
            Essence of creativity combining the tools and methods
            of art and installations interpreting the formative
            stages of the festival. Tala Prattoy's work emphasis
            has always been on Durga Puja as a specific art genre
            where the public space is being transformed into an
            art venue.
          </p>
        </div>

        {/* Desktop Image */}
        <img src={image3} alt="" className="desktop-img" />
      </div>

      {/* Desktop Images */}
      <div className="right-section">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
      </div>

      {/* Mobile Slider */}
      <div className="mobile-slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="slider-image"
              />
            </div>
          ))}
        </div>

        <button className="slider-btn prev" onClick={prevSlide}>
          ❮
        </button>

        <button className="slider-btn next" onClick={nextSlide}>
          ❯
        </button>

        
      </div>
    </section>
  );
};

export default About;
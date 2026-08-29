import React from "react";
import img from "../assets/35.png";

const Vision = () => {
  return (
    <section className="vision">
      <div className="vision-container">
        <img src={img} alt="Our Vision" className="vision-image" />

        <div className="vision-card">
          <h2>Our Vision</h2>

          <p>
            Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.
          </p>

          <div className="vision-nav">
            <span>←</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
import React from "react";
import { timelineData } from "./TimelineData";

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="timeline-container">
        {timelineData.map((item) => (
          <div className="timeline-row" key={item.year}>
            <div className="timeline-left">
              <div className="timeline-marker">
                <span className="year">{item.year}</span>
                <span className="dot"></span>
              </div>

              <p>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.</p>
            </div>

            <div className="timeline-right">
              <img src={item.image} alt={item.year} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
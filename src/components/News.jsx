import React from "react";
import styles from "./News.module.css";

import img5 from "../assets/31.png";
import img6 from "../assets/32.png";
import img2 from "../assets/33.png";
import img1 from "../assets/34.png";
import img4 from "../assets/30.png";
import img3 from "../assets/29.png";

const newsData = [
  {
    image: img1,
    title: "Encouraging Craftsmanship",
    desc: "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
  },
  {
    image: img2,
    title: "Encouraging Craftsmanship",
    desc: "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
  },
  {
    image: img3,
    title: "Encouraging Craftsmanship",
    desc: "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
  },
  {
    image: img4,
    title: "Encouraging Craftsmanship",
    desc: "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
  },
  {
    image: img5,
    title: "Encouraging Craftsmanship",
    desc: "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
  },
  {
    image: img6,
    title: "Encouraging Craftsmanship",
    desc: "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
  },
];

const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles.heading}>
        <h2>
          Tala In <span>News</span>
        </h2>
      </div>

      <div className={styles.newsGrid}>
        {newsData.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt="" />

            <div className={styles.overlay}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
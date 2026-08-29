import React from 'react'
import img1 from "../assets/16.png";
import img2 from "../assets/17.png";
import img3 from "../assets/18.png";
import img4 from "../assets/19.png";
import img5 from "../assets/20.png";

const Features = () => {
    return (
        <section className="features" id='Features'>

            <div className="features-heading">
                <h2>
                    Objective & <span>features</span>
                </h2>

                <p>
                    Learning provides the environment and inspiration to create and
                    exhibit that brings people together to build connections to community.
                </p>
            </div>

            <div className="features-grid">

                <div className="feature-card">
                    <img src={img1} alt="" />

                    <div className="feature-content">
                        <h3>Durga Puja Art 2024</h3>

                        <p>
                            Tala Prattoy, endeavouring towards global art forever,
                            projects this year's Durga Puja Art as celebrating the
                            journey of a Durga Puja Artist.
                        </p>
                    </div>
                </div>

                <div className="feature-card">
                    <img src={img2} alt="" />

                    <div className="feature-content">
                        <h3>Watch Art with Artist</h3>

                        <p>
                            2024 introduces a never-seen-before guided walkthrough
                            in Tala Prattoy Durga Puja Art venue.
                        </p>
                    </div>
                </div>

                <div className="feature-card">
                    <img src={img3} alt="" />

                    <div className="feature-content">
                        <h3>Encouraging Craftsmanship</h3>

                        <p>
                            Learning provides the environment and inspiration to create
                            and exhibit that brings people together.
                        </p>
                    </div>
                </div>

                <div className="feature-card">
                    <img src={img4} alt="" />

                    <div className="feature-content">
                        <h3>Promotion of Installation Art</h3>

                        <p>
                            Installation Art is an artistic genre of multi-dimensional
                            works which are generally site-specific.
                        </p>
                    </div>
                </div>

            </div>
            <img className="last-image" src={img5} alt="" />
        </section>
        
    )
}

export default Features

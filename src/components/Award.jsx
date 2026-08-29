import React from 'react';
import img1 from "../assets/massart.png";

const Award = () => {
    return (
        <>
            <section className="award">
                <div className="award-heading">
                    <h1>Award</h1>
                    <p>
                        Learning provides the environment and inspiration to create and
                        exhibit that brings people together to build connections to community.
                    </p>
                </div>

                <div className="award-container">
                    {[...Array(5)].map((_, index) => (
                        <div className="award-item" key={index}>
                            <img src={img1} alt="Award" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Award;
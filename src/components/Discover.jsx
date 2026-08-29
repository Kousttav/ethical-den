import React from 'react'
import image1 from "../assets/11.png";
import { FaRegCirclePlay } from "react-icons/fa6";
const Discover = () => {
    return (
        <div className="discover" id='Dis'>

            <div className="video-box">
                <img src={image1} alt="" />
                <FaRegCirclePlay className="play-icon" />
            </div>

            <div className="dis-content">
                <h1>
                    Discover <span>Tala</span>
                </h1>

                <p>
                    Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.
                </p>
            </div>

        </div>
    )
}

export default Discover

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";

const Hero = () => {
    return (
        <section className="hero">

            <div className="gallery">

                <div className="column up">
                    <img src={img1} alt="" />
                    <img src={img6} alt="" />
                    <img src={img1} alt="" />
                    <img src={img6} alt="" />
                </div>

                <div className="column down">
                    <img src={img2} alt="" />
                    <img src={img7} alt="" />
                    <img src={img2} alt="" />
                    <img src={img7} alt="" />
                </div>

                <div className="column up">
                    <img src={img3} alt="" />
                    <img src={img8} alt="" />
                    <img src={img3} alt="" />
                    <img src={img8} alt="" />
                </div>

                <div className="column down">
                    <img src={img4} alt="" />
                    <img src={img9} alt="" />
                    <img src={img4} alt="" />
                    <img src={img9} alt="" />
                </div>

                <div className="column up">
                    <img src={img5} alt="" />
                    <img src={img10} alt="" />
                    <img src={img5} alt="" />
                    <img src={img10} alt="" />
                </div>

            </div>

            <div className="hero-content">
                <h1>Tala Prattoy</h1>

                <div className="btn-group">
                    <button className="primary">
                        Art Walkthrough
                    </button>

                    <button className="secondary">
                        Privileged Entry
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Hero;
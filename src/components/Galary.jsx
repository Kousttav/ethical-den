import styles from "./Galary.module.css";

import img1 from "../assets/21.png";
import img4 from "../assets/22.png";
import img3 from "../assets/23.png";
import img5 from "../assets/24.png";
import img8 from "../assets/25.png";
import img7 from "../assets/26.png";
import img2 from "../assets/27.png";
import img6 from "../assets/28.png";

const Galary = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <section className={styles.gallery}>
            <div className={styles["gallery-heading"]}>
                <h2>Gallery</h2>
                <p>
                    Learning provides the environment and inspiration to create and
                    exhibit that brings people together to build connections to
                    community.
                </p>
            </div>

            <div className={styles["gallery-grid"]}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`gallery-${index}`}
                        className={
                            index % 4 === 0 || index % 4 === 3
                                ? styles.rectangle
                                : styles.square
                        }
                    />
                ))}
            </div>  
        </section>
    );
};

export default Galary;
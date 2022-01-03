import gsap from "gsap";
import { useRef, useEffect } from "react";
import styles from "./NewMovies.module.css"

function NewMovies({ movie1Img, movie2Img, movie3Img, movie4Img, movie5Img, movie3Title, movie3Poster, movie3Rating, movie3RunTime }) {
    // useEffect(() => {
    //     gsap.from(".movie5", {
    //         y: 100,
    //         opacity: 0,
    //         delay: 1,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: ".movie5"
    //         }
    //     })
    // }, []);
    return (
        <div className={styles.fullPage}>
            <div className={styles.imgDiv}>
                <div>
                    <img src={movie1Img} className="movie1" />
                </div>
                <div>
                    <img src={movie2Img} className="movie2" />
                </div>
                <div>
                    <img src={movie3Img} className="movie3" />
                </div>
                <div>
                    <img src={movie4Img} className="movie4" />
                </div>
                <div>
                    <img src={movie5Img} className="movie5" className={styles.movie5} />
                </div>
            </div>
        </div>
    );
}

export default NewMovies;
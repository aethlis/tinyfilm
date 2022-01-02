import { useState } from "react";
import styles from "./NewMovies.module.css"

function NewMovies({ movie1Img, movie2Img, movie3Img, movie4Img, movie5Img, movie3Title, movie3Poster, movie3Rating, movie3RunTime }) {
    function onMouseOver() {
        console.log(0);
        return (
            < div className={styles.title}>
                {movie3Title}
            </div >
        );
    }
    return (
        <div>
            <div>
                <img src={movie1Img} className={styles.img1} />
            </div>
            <div>
                <img src={movie2Img} className={styles.img2} />
            </div>
            <div>
                <img src={movie3Img} className={styles.img3} onMouseOver={onMouseOver} />
            </div>
            <div>
                <img src={movie4Img} className={styles.img4} />
            </div>
            <div>
                <img src={movie5Img} className={styles.img5} />
            </div>
        </div>
    );
}

export default NewMovies;
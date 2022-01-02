import gsap from "gsap/gsap-core";
import propTypes from "prop-types";
import { useRef } from "react";
import styles from "./NewMovies.module.css"

function NewMovies({ movie1, movie2, movie3, movie4, movie5 }) {
    return (
        <div>
            <div>
                <img src={movie1} className={styles.img} />
            </div>
            <div>
                <img src={movie2} className={styles.img} />
            </div>
            <div>
                <img src={movie3} className={styles.img} />
            </div>
            <div>
                <img src={movie4} className={styles.img} />
            </div>
            <div>
                <img src={movie5} className={styles.img} />
            </div>
        </div>
    );
}

export default NewMovies;
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import styles from "./NewMovies.module.css"

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function NewMovies({ movie1BgImg, movie1Poster, movie1Title, movie1Rating, movie1RunTime, movie2BgImg, movie2Title, movie2Poster, movie2Rating, movie2RunTime, movie3BgImg, movie3Title, movie3Poster, movie3Rating, movie3RunTime, movie4BgImg, movie4Title, movie4Poster, movie4Rating, movie4RunTime, movie5BgImg, movie5Title, movie5Poster, movie5Rating, movie5RunTime }) {
    const bgImg1 = useRef();
    const bgImg2 = useRef();
    const bgImg3 = useRef();
    const bgImg4 = useRef();
    const bgImg5 = useRef();

    const movie1Data = useRef();
    const movie2Data = useRef();
    const movie3Data = useRef();
    const movie4Data = useRef();
    const movie5Data = useRef();

    useEffect(() => {
        gsap.to(bgImg2.current, {
            zIndex: 99,
            delay: 0.3,
            scrollTrigger: {
                trigger: movie2Data.current,
                start: "30% center",
                toggleActions: "restart none resume none",
                markers: true,
            }
        })
    }, [])

    return (
        <div>
            <div className={styles.bgImg}>
                <section>
                    <img src={movie1BgImg} className={styles.bgImg1} ref={bgImg1} />
                </section>
                <section>
                    <img src={movie2BgImg} className={styles.bgImg2} ref={bgImg2} />
                </section>
                <section>
                    <img src={movie3BgImg} className={styles.bgImg3} ref={bgImg3} />
                </section>
                <section>
                    <img src={movie4BgImg} className={styles.bgImg4} ref={bgImg4} />
                </section>
                <section>
                    <img src={movie5BgImg} className={styles.bgImg5} ref={bgImg5} />
                </section>
                <section className={styles.bgB}>
                </section>
            </div>
            <div className={styles.movie1Data} ref={movie1Data}>
                <div className={styles.movieContent}>
                    <div className={styles.moviePoster}>
                        <img src={movie1Poster} />
                    </div>
                    <div className={styles.movieContentText}>
                        <div className={styles.movieTitle}>
                            {movie1Title}
                        </div>
                        <div className={styles.movieRating}>
                            {movie1Rating}
                        </div>
                        <div className={styles.movieRuntime}>
                            {movie1RunTime}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.movie2Data} ref={movie2Data}>
                <div className={styles.movieContent}>
                    <div className={styles.moviePoster}>
                        <img src={movie2Poster} />
                    </div>
                    <div className={styles.movieContentText}>
                        <div className={styles.movieTitle}>
                            {movie2Title}
                        </div>
                        <div className={styles.movieRating}>
                            {movie2Rating}
                        </div>
                        <div className={styles.movieRuntime}>
                            {movie2RunTime}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.movie3Data} ref={movie3Data}>
                <div className={styles.movieContent}>
                    <div className={styles.moviePoster}>
                        <img src={movie3Poster} />
                    </div>
                    <div className={styles.movieContentText}>
                        <div className={styles.movieTitle}>
                            {movie3Title}
                        </div>
                        <div className={styles.movieRating}>
                            {movie3Rating}
                        </div>
                        <div className={styles.movieRuntime}>
                            {movie3RunTime}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.movie4Data} ref={movie4Data}>
                <div className={styles.movieContent}>
                    <div className={styles.moviePoster}>
                        <img src={movie4Poster} />
                    </div>
                    <div className={styles.movieContentText}>
                        <div className={styles.movieTitle}>
                            {movie4Title}
                        </div>
                        <div className={styles.movieRating}>
                            {movie4Rating}
                        </div>
                        <div className={styles.movieRuntime}>
                            {movie4RunTime}
                        </div>
                    </div>
                </div>
            </div><div className={styles.movie5Data} ref={movie5Data}>
                <div className={styles.movieContent}>
                    <div className={styles.moviePoster}>
                        <img src={movie5Poster} />
                    </div>
                    <div className={styles.movieContentText}>
                        <div className={styles.movieTitle}>
                            {movie5Title}
                        </div>
                        <div className={styles.movieRating}>
                            {movie5Rating}
                        </div>
                        <div className={styles.movieRuntime}>
                            {movie5RunTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewMovies;
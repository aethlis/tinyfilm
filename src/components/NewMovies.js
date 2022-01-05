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
            // delay: 0.2,
            scrollTrigger: {
                trigger: movie2Data.current,
                start: "40% 70%",
                end: "bottom 100%",
                toggleActions: "play pause resume reset",
                // markers: true,
            }
        })
        gsap.to(bgImg3.current, {
            zIndex: 99,
            // delay: 0.2,
            scrollTrigger: {
                trigger: movie3Data.current,
                start: "40% 70%",
                end: "bottom 100%",
                toggleActions: "play pause resume reset",
                // markers: true,
            }
        })
        gsap.to(bgImg4.current, {
            zIndex: 99,
            // delay: 0.2,
            scrollTrigger: {
                trigger: movie4Data.current,
                start: "40% 70%",
                end: "bottom 100%",
                toggleActions: "play pause resume reset",
                // markers: true,
            }
        })
        gsap.to(bgImg5.current, {
            zIndex: 99,
            // delay: 0.2,
            scrollTrigger: {
                trigger: movie5Data.current,
                start: "40% 70%",
                end: "bottom 100%",
                toggleActions: "play pause resume reset",
                // markers: true,
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
                            제목
                            <br />
                            {movie1Title}
                        </div>
                        <div className={styles.movieRating}>
                            평점 {movie1Rating}점
                        </div>
                        <div className={styles.movieRuntime}>
                            러닝타임 {movie1RunTime}분
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
                            제목
                            <br />
                            {movie2Title}
                        </div>
                        <div className={styles.movieRating}>
                            평점 {movie2Rating}점
                        </div>
                        <div className={styles.movieRuntime}>
                            러닝타임 {movie2RunTime}분
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
                            제목
                            <br />
                            {movie3Title}
                        </div>
                        <div className={styles.movieRating}>
                            평점 {movie3Rating}점
                        </div>
                        <div className={styles.movieRuntime}>
                            러닝타임 {movie3RunTime}분
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
                            제목
                            <br />
                            {movie4Title}
                        </div>
                        <div className={styles.movieRating}>
                            평점 {movie4Rating}점
                        </div>
                        <div className={styles.movieRuntime}>
                            러닝타임 {movie4RunTime}분
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.movie5Data} ref={movie5Data}>
                <div className={styles.movieContent}>
                    <div className={styles.moviePoster}>
                        <img src={movie5Poster} />
                    </div>
                    <div className={styles.movieContentText}>
                        <div className={styles.movieTitle}>
                            제목
                            <br />
                            {movie5Title}
                        </div>
                        <div className={styles.movieRating}>
                            평점 {movie5Rating}점
                        </div>
                        <div className={styles.movieRuntime}>
                            러닝타임 {movie5RunTime}분
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.scrollBar}>
                <div className={styles.pageBtn1}></div>
                <div className={styles.pageBtn2}></div>
                <div className={styles.pageBtn3}></div>
                <div className={styles.pageBtn4}></div>
                <div className={styles.pageBtn5}></div>
            </div>
        </div>
    );
}

export default NewMovies;
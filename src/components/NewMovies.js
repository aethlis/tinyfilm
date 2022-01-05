import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import styles from "./NewMovies.module.css"

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function NewMovies({ movie1BgImg, movie1Poster, movie1Title, movie1Rating, movie1RunTime, movie2BgImg, movie2Title, movie2Poster, movie2Rating, movie2RunTime, movie3BgImg, movie3Title, movie3Poster, movie3Rating, movie3RunTime, movie4BgImg, movie4Title, movie4Poster, movie4Rating, movie4RunTime, movie5BgImg, movie5Title, movie5Poster, movie5Rating, movie5RunTime }) {
    // const imgDiv = useRef();
    // const movie1 = useRef();
    // const movie2 = useRef();
    // const movie3 = useRef();
    // const movie4 = useRef();
    // const movie5 = useRef();

    // const bGMovie1 = useRef();
    // const bGMovie2 = useRef();
    // const bGMovie3 = useRef();
    // const bGMovie4 = useRef();
    // const bGMovie5 = useRef();

    // useEffect(() => {
    //     gsap.to(movie2.current, {
    //         y: -255,
    //         scrollTrigger: {
    //             markers: true,
    //             trigger: bGMovie2.current,
    //             toggleActions: "restart none reverse none"
    //         },
    //     })
    //     gsap.to(movie3.current, {
    //         y: -510,
    //         scrollTrigger: {
    //             markers: true,
    //             trigger: bGMovie3.current,
    //             toggleActions: "restart none reverse none"
    //         },
    //     })
    // }, [])

    return (
        <div>
            <section>
                <img src={movie1BgImg} className={styles.bgImg} />
            </section>
            <section>
                <img src={movie2BgImg} className={styles.bgImg} />
            </section>
            <section>
                <img src={movie3BgImg} className={styles.bgImg} />
            </section>
            <section>
                <img src={movie4BgImg} className={styles.bgImg} />
            </section>
            <section>
                <img src={movie5BgImg} className={styles.bgImg} />
            </section>
            <section className={styles.bgB}>
            </section>
            <div className={styles.movie1Data}>
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
            <div className={styles.movie2Data}>
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
            <div className={styles.movie3Data}>
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
            </div><div className={styles.movie4Data}>
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
            </div><div className={styles.movie5Data}>
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
        // <div >
        //     <div className={styles.fullPage}>
        //         <div className={styles.BGImg}>
        //             <section>
        //                 <img src={movie1Img} ref={bGMovie1} className={styles.bGMovie1} />
        //             </section>
        //             <section>
        //                 <img src={movie2Img} ref={bGMovie2} />
        //             </section>
        //             <section>
        //                 <img src={movie3Img} ref={bGMovie3} />
        //             </section>
        //             <section>
        //                 <img src={movie4Img} ref={bGMovie4} />
        //             </section>
        //             <section>
        //                 <img src={movie5Img} ref={bGMovie5} />
        //             </section>
        //         </div>
        //         <div className={styles.bGB}></div>
        //         <div className={styles.imgDiv} ref={imgDiv} >
        //             <section>
        //                 <img src={movie1Img} className={styles.movie1} ref={movie1} />
        //             </section>
        //             <section>
        //                 <img src={movie2Img} className={styles.movie2} ref={movie2} />
        //             </section>
        //             <section>
        //                 <img src={movie3Img} className={styles.movie3} ref={movie3} />
        //             </section>
        //             <section>
        //                 <img src={movie4Img} className={styles.movie4} ref={movie4} />
        //             </section>
        //             <section>
        //                 <img src={movie5Img} className={styles.movie5} ref={movie5} />
        //             </section>
        //         </div>
        //     </div>
        // </div>
    );
}

export default NewMovies;
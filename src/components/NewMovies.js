import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import styles from "./NewMovies.module.css"

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function NewMovies({ movie1Img, movie2Img, movie3Img, movie4Img, movie5Img, movie3Title, movie3Poster, movie3Rating, movie3RunTime }) {
    const imgDiv = useRef();
    const movie1 = useRef();
    const movie2 = useRef();
    const movie3 = useRef();
    const movie4 = useRef();
    const movie5 = useRef();

    const bGMovie1 = useRef();
    const bGMovie2 = useRef();

    useEffect(() => {
        gsap.to(movie2.current, {
            y: -255,
            scrollTrigger: {
                markers: true,
                trigger: bGMovie2.current,
            },
        })
    }, [])

    return (
        <div >
            <div className={styles.fullPage}>
                <div className={styles.BGImg}>
                    <section>
                        <img src={movie1Img} ref={bGMovie1} className={styles.bGMovie1} />
                    </section>
                    <section>
                        <img src={movie2Img} ref={bGMovie2} />
                    </section>
                    <section>
                        <img src={movie3Img} />
                    </section>
                    <section>
                        <img src={movie4Img} />
                    </section>
                    <section>
                        <img src={movie5Img} />
                    </section>
                </div>
                <div className={styles.bGB}></div>
                <div className={styles.imgDiv} ref={imgDiv} >
                    <section>
                        <img src={movie1Img} className={styles.movie1} ref={movie1} />
                    </section>
                    <section>
                        <img src={movie2Img} className={styles.movie2} ref={movie2} />
                    </section>
                    <section>
                        <img src={movie3Img} className={styles.movie3} ref={movie3} />
                    </section>
                    <section>
                        <img src={movie4Img} className={styles.movie4} ref={movie4} />
                    </section>
                    <section>
                        <img src={movie5Img} className={styles.movie5} ref={movie5} />
                    </section>
                </div>
            </div>
            <div className={styles.hihi}>구현이 덜 되었어요..아이구 미안합니다 ^^</div>
        </div>
    );
}

export default NewMovies;
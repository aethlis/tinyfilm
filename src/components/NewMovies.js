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

    useEffect(() => {
        gsap.to(`.${styles.movie2}`, {
            opacity: 1,
            scrollTrigger: {
                markers: true,
                start: imgDiv.current.offsetTop,
            },
        })
        // gsap.to(`.${styles.movie3}`, {
        //     delay: 1,
        //     duration: 1,
        //     opacity: 1,
        //     scrollTrigger: {
        //         trigger: ,
        //     }
        // })
    }, [])

    // function getStart() {
    //     return (
    //         imgDiv.current.offsetTop
    //     );
    // }
    useEffect(() => {
        console.log(imgDiv.current.offsetTop)
    }, [imgDiv])

    return (
        <div className={styles.fullPage}>
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
    );
}

export default NewMovies;
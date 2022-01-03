import gsap from "gsap";
import { useRef, useEffect } from "react";
import styles from "./NewMovies.module.css"

function NewMovies({ movie1Img, movie2Img, movie3Img, movie4Img, movie5Img, movie3Title, movie3Poster, movie3Rating, movie3RunTime }) {
    const img2 = useRef(null);
    const img5 = useRef(null);
    useEffect(() => {
        gsap.to(img5.current, {
            x: 100,
            duration: 2,
            opacity: 1,
            scrollTrigger: {
                trigger: img5,
                markers: true,
                start: "top",
                end: "bottom",
                toggleActions: "restart none none none",
            },
        })
    }, []);
    return (
        <div className={styles.fullPage}>
            <div className={styles.imgDiv}>
                <div>
                    <img src={movie1Img} />
                </div>
                <div>
                    <img src={movie2Img} ref={img2} />
                </div>
                <div>
                    <img src={movie3Img} />
                </div>
                <div>
                    <img src={movie4Img} />
                </div>
                <div>
                    <img src={movie5Img} ref={img5} />
                </div>
            </div>
        </div>
    );
}

export default NewMovies;
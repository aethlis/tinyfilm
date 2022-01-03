import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import styles from "./NewMovies.module.css"

gsap.registerPlugin(Draggable);

function NewMovies({ movie1Img, movie2Img, movie3Img, movie4Img, movie5Img, movie3Title, movie3Poster, movie3Rating, movie3RunTime }) {
    const dragInstance = useRef(null);
    const dragTarget = useRef(null);
    const dragTarget1 = useRef(null);
    const dragTarget2 = useRef(null);
    const dragTarget3 = useRef(null);
    const dragTarget4 = useRef(null);

    useEffect(() => {
        dragInstance.current = Draggable.create(dragTarget.current, {
            type: "y",
        });
        dragInstance.current = Draggable.create(dragTarget1.current, {
            type: "y",
        });
        dragInstance.current = Draggable.create(dragTarget2.current, {
            type: "y",
        });
        dragInstance.current = Draggable.create(dragTarget3.current, {
            type: "y",
        });
        dragInstance.current = Draggable.create(dragTarget4.current, {
            type: "y",
        });
    }, []);

    return (
        <div>
            <div>
                <img src={movie1Img} className={styles.img1} ref={dragTarget} />
            </div>
            <div>
                <img src={movie2Img} className={styles.img2} ref={dragTarget1} />
            </div>
            <div>
                <img src={movie3Img} className={styles.img3} ref={dragTarget2} />
            </div>
            <div>
                <img src={movie4Img} className={styles.img4} ref={dragTarget3} />
            </div>
            <div>
                <img src={movie5Img} className={styles.img5} ref={dragTarget4} />
            </div>
        </div>
    );
}

export default NewMovies;
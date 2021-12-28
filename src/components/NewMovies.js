import gsap from "gsap/gsap-core";
import propTypes from "prop-types";
import { useRef } from "react";
import styles from "./NewMovies.module.css"
import NewMoviesData from "../components/NewMoviesData";

// function NewMovies({ backgroundImg, index }) {
//     const img = useRef();
//     const onWheel = () => {
//         gsap.to(img.current, {
//             rotation: 100,
//         })
//     }
//     return (
//         <div>
//             <div className={styles.newMoviesCoverImg}>
//                 <img ref={img} src={backgroundImg} className={`movie${index}`} onWheel={onWheel} />
//             </div>
//         </div >
//     );
// };
function NewMovies({ movie1, movie2, movie3, movie4, movie5 }) {
    return (
        <NewMoviesData
            backgroundImg1={movie1.background_image}
            backgroundImg2={movie2.background_image}
            backgroundImg3={movie3.background_image}
            backgroundImg4={movie4.background_image}
            backgroundImg5={movie5.background_image}
        />
    );
}

export default NewMovies;
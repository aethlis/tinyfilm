import propTypes from "prop-types";
import styles from "./NewMovies.module.css"

function NewMovies({ backgroundImg, index }) {
    return (
        <div>
            <div className={styles.newMoviesCoverImg}>
                <img src={backgroundImg} className={`movie${index}`} />
            </div>
        </div >
    );
}

export default NewMovies;
import propTypes, { array } from "prop-types";
import styles from "./NewMainMovie.module.css"

function NewMainMovie({ id ,coverImg, title }) {
    return (
        <div>
            <div className={styles.newMainMovieCoverImg} id={id}>
                <img src={coverImg} />
            </div>
            <h1>{title}</h1>
        </div>
    );
}

// NewMovie.propTypes = {
//     coverImg: propTypes.isRequired,
// }

export default NewMainMovie;
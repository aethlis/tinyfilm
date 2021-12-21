import styles from "./MovieGrid.module.css"
// import { useMovieAPI } from "../contexts/FetchAPI"
// import { useContext } from "react";
// import { FetchAPI } from "../contexts/FetchAPI";
import PropTypes from 'prop-types';

function MovieGrid({id, summary, coverImg, title, mouseOver}) {
    // const {context} = useContext(FetchAPI)
    return (
        <div className={styles.movie_wrap} id={id}>
            <div className={styles.functionElement} onClick={mouseOver}>
                <div className={styles.img_wrapper}>
                    <img id={styles.coverImg} src={coverImg} alt={id} />
                </div>
                <div className={styles.text_box}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.summary}>{summary.length > 130 ? `${summary.slice(0, 130)}...` : summary}</div>
                </div>
            </div>
        </div>
    )
}

MovieGrid.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieGrid;
import HeaderNoBG from "../components/HeaderNoBG"
import styles from "./Weekly.module.css";
import backgroundTexture from "../img/backgroundTexture.jpeg";
import WeeklyMovies from "../components/WeeklyMovies";
import { useMovieAPI } from "../contexts/FetchAPI";
import { useHoverOver } from "../contexts/HoverContext";
import SearchResult from "../components/SearchResult";
// import { useEffect } from "react";

function Weekly() {
    const { movies } = useMovieAPI();
    const { VIEWER } = useHoverOver();
    if (movies.length < 50) {
        return (<div />)
    }
    // useEffect(() => {
    //     console.log(movies[15].title);
    // }, [movies[15]])
    return (
        <div className={styles.fullPage}>
            <HeaderNoBG />
            {!VIEWER ? (
                <div className={styles.paperBG}></div>
            ) : null }
            {VIEWER ? (
                <div className={styles.SearchResultContainer}>
                    <SearchResult />
                </div>
            ) : null }
            {!VIEWER ? (
                <div className={styles.weeklyPickPage}>
                    <div className={styles.intro}>
                        WEEKLY PICK
                    </div>
                    <div className={styles.weeklyMovies}>
                        <WeeklyMovies
                            weeklyMovie1Img={movies[14].background_image}
                            weeklyMovie1Title={movies[14].title}
                            weeklyMovie1Intro={movies[14].summary}
                            weeklyMovie2Img={movies[20].background_image}
                            weeklyMovie2Title={movies[20].title}
                            weeklyMovie2Intro={movies[20].summary}
                        />
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default Weekly;
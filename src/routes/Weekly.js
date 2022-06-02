import HeaderNoBG from "../components/HeaderNoBG"
import styles from "./Weekly.module.css";
import backgroundTexture from "../img/backgroundTexture.jpeg";
import WeeklyMovies from "../components/WeeklyMovies";
import { useMovieAPI } from "../contexts/FetchAPI";
import { useHoverOver } from "../contexts/HoverContext";
import SearchResult from "../components/SearchResult";
// import { useEffect } from "react";

function Weekly() {
    const { movies, FilterAPI, loading, WeeklyOne, WeeklyTwo } = useMovieAPI();
    const { VIEWER } = useHoverOver();
    // if (movies.length < 50) {
    //     return (<div />)
    // }
    // useEffect(() => {
    //     console.log(movies[15].title);
    // }, [movies[15]])
    return (
        <div className={styles.fullPage}>
            <HeaderNoBG />
            {!VIEWER ? (
                <div className={styles.paperBG}></div>
            ) : null}
            {VIEWER ? (
                <div className={styles.SearchResultContainer}>
                    <SearchResult />
                </div>
            ) : null}
            {!VIEWER ? (
                <div className={styles.weeklyPickPage}>
                    <div className={styles.intro}>
                        WEEKLY PICK
                    </div>
                    <div className={styles.weeklyMovies}>
                        {!loading ? 
                            <WeeklyMovies
                                weeklyMovie1Img={WeeklyOne?.background_image}
                                weeklyMovie1Title={WeeklyOne?.title}
                                weeklyMovie1Intro={WeeklyOne?.plot}
                                weeklyMovie2Img={WeeklyTwo?.background_image}
                                weeklyMovie2Title={WeeklyTwo?.title}
                                weeklyMovie2Intro={WeeklyTwo?.plot}
                        />
                         : null}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Weekly;
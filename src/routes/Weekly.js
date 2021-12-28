import Header from "../components/Header";
import styles from "./Weekly.module.css";
import backgroundTexture from "../img/backgroundTexture.jpeg";
import WeeklyMovies from "../components/WeeklyMovies";
import { useMovieAPI } from "../contexts/FetchAPI";
// import { useEffect } from "react";

function Weekly() {
    const { movies } = useMovieAPI();
    if (movies.length < 50) {
        return (<div />)
    }
    // useEffect(() => {
    //     console.log(movies[15].title);
    // }, [movies[15]])
    return (
        <div>
            <img src={backgroundTexture} className={styles.backgroundImg} />
            <Header />
            <div className={styles.intro}>
                WEEKLY PICK
            </div>
            <div className={styles.line}>
                <div className={styles.widthLine}>
                </div>
                <div className={styles.heightLine}>
                </div>
            </div>
            <div>
                <WeeklyMovies
                    weeklyMovie1Img={movies[15].background_image}
                    weeklyMovie1Title={movies[15].title}
                    weeklyMovie1Intro={movies[15].summary}
                    weeklyMovie2Img={movies[20].background_image}
                    weeklyMovie2Title={movies[20].title}
                    weeklyMovie2Intro={movies[20].summary}
                />
            </div>
        </div>
    )
}

export default Weekly;
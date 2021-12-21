import Header from "../components/Header";
import styles from "./Mainpage.module.css";
import PlayButton from "../components/PlayButton";
// import Intropage from "../components/Intropage"
// import TestImg from "../img/TestImg.png";
import MovieGrid from "../components/MovieGrid";
import { useMovieAPI } from "../contexts/FetchAPI";
import { FetchAPI } from "../contexts/FetchAPI";
import ReactDOM from 'react-dom'
// import { useContext } from 'react';

function ContentAd() {
    return (
        <div className={styles.ContentAd}>
            {/* <img src={TestImg} alt="TestImg" className={styles.testingImg} /> */}
            <div className={styles.textinfo}>
                <div className={styles.textbox}>
                    <div className={styles.title}>title</div>
                    <div className={styles.summary}>Just an expression of mind and soul, deep within a humans brain and heart.</div>
                    <div className={styles.buttonwrap}>
                        <PlayButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Mainpage() {
    const {movies} = useMovieAPI();
    return (
        <div>
            <Header />
            <div className={styles.fullpage}>
                <div className={styles.ContentAd_container}>
                    <ContentAd />
                </div>
                <div className={styles.movie_container}>
                    <div className={styles.movie_wrap}>
                        {movies.map((movie) => {
                            return (
                                <MovieGrid
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    coverImg={movie.background_image_original}
                                    summary={movie.summary}
                                />
                            )
                        })}
                    </div>
                </div>
                {/* <div className={styles.movie_container}>
                        <div className={styles.movie_wrap}>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                            <MovieGrid/>
                        </div>
                </div> */}
            </div>
        </div>
    )
}

export default Mainpage;
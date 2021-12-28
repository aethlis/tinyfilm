import Header from "../components/Header";
import styles from "./Mainpage.module.css";
import PlayButton from "../components/PlayButton";
// import Intropage from "../components/Intropage"
// import TestImg from "../img/TestImg.png";
import MovieGrid from "../components/MovieGrid";
import HoverShow from "../components/MovieHoverOver";
import { useMovieAPI } from "../contexts/FetchAPI";
import { useHoverOver } from "../contexts/HoverContext";
import { useEffect } from "react";
import GenreFilter from "../components/GenreFilter";
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
                        <PlayButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Mainpage() {
    const { movies } = useMovieAPI();
    const { ID, COVERIMG, BGIMG, HIDE, TITLE, SUMMARY, GENRES, RUNTIME } = useHoverOver();
    const disableScroll = () => {
        const x = window.scrollX;
        const y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, y); }
    }
    const enableScroll = () => {
        window.onscroll = function () { }
    }
    useEffect(() => {
        if (HIDE !== true) {
            disableScroll()
        } else if (HIDE !== false) {
            enableScroll()
        }
    }, [HIDE]);
    return (
        <div>
            <Header />
            <div className={styles.fullpage}>
                <div className={styles.ContentAd_container}>
                    <ContentAd />
                </div>
                <div className={styles.filterWrapper}>
                    <GenreFilter />
                </div>
                <div className={styles.movie_container}>
                    <div className={styles.movie_wrap}>
                        {movies.map((movie) => {
                            return (
                                <MovieGrid
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    coverImg={movie.large_cover_image}
                                    bgImg={movie.background_image_original}
                                    summary={movie.summary}
                                    runtime={movie.runtime}
                                    genres={movie.genres}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className={styles.footer}></div>

                {!HIDE ? 
                    <HoverShow 
                        id={ID}
                        title={TITLE}
                        coverImg={COVERIMG}
                        bgImg={BGIMG}
                        summary={SUMMARY}
                        genres={GENRES}
                        hidden={HIDE}
                        runtime={RUNTIME}
                    /> : null
                }

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
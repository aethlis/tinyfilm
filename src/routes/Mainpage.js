import Header from "../components/Header";
import styles from "./Mainpage.module.css";
import PlayButton from "../components/PlayButton";
// import Intropage from "../components/Intropage"
// import TestImg from "../img/TestImg.png";
import MovieGrid from "../components/MovieGrid";
import HoverShow from "../components/MovieHoverOver";
import { useMovieAPI } from "../contexts/FetchAPI";
import { useHoverOver } from "../contexts/HoverContext";
import { useEffect, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import SearchResult from "../components/SearchResult";
import { useGenreFilt } from "../contexts/FilterContext";
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
    const { GenreFilt, setGenreFilt, SelectedGenre, setSelectedGenre } = useGenreFilt();
    const { movies } = useMovieAPI();
    const { ID, COVERIMG, BGIMG, HIDE, TITLE, SUMMARY, GENRES, RUNTIME, VIEWER } = useHoverOver();

    const body = document.querySelector("body")
    const disableScroll = () => {
        const x = window.scrollX;
        const y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, y) }
        body.style.overflowX = "hidden"
    }
    const enableScroll = () => {
        window.onscroll = function () {}
        body.style.overflowX = "visible"
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
            {VIEWER ? (
                <div className={styles.SearchResultContainer}>
                    <SearchResult />
                </div>
            ) : null }
            <div className={styles.fullpage}>
                {!VIEWER ? (
                    <div className={styles.mainpageItem}>
                        <div className={styles.ContentAd_container}>
                            <ContentAd />
                        </div>
                        <div className={styles.filterWrapper}>
                            <GenreFilter />
                        </div>
                        <div className={styles.movie_container}>
                            <div className={styles.movie_wrap}>
                                {(SelectedGenre === "") ? (
                                    movies.map((movie) => {
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
                                    })
                                ) : (
                                    GenreFilt.map((movie) => {
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
                                    })
                                )}
                            </div>
                        </div>
                        <div className={styles.footer}></div>
                    </div>
                ) : null }
                {/* {(SRCHDIS !== "") ? <SearchResult /> : null} */}



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
            </div>
        </div>
    )
}

export default Mainpage;
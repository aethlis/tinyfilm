import Header from "../components/Header"
import styles from "./Mainpage.module.css"
import PlayButton from "../components/PlayButton"
// import Intropage from "../components/Intropage"
// import TestImg from "../img/TestImg.png"
import MovieGrid from "../components/MovieGrid"
import { useState } from "react"

// function FetchMovie() {
//     const [movies, setMovies] = useState([])
//     const [loading, setLoading] = useState("")

//     const [id, setId] = useState("")
//     const [title, setTitle] = useState("")
//     const [summary, setSummary] = useState("")
//     const [coverImg, setImg] = useState("")
//     const [runtime, setRuntime] = useState("")
//     const [genres, setGenres] = useState([])
//     return (
//         Mainpage(loading, movies)
//     )
// }

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

function Mainpage(loading, movies) {
    return (
        <div>
            <Header />
            <div className={styles.fullpage}>
                <div className={styles.ContentAd_container}>
                    <ContentAd />
                </div>
                {/* <div>
                    {movies.map((movie) => {
                        <MovieGrid
                            // id={}
                            // coverImg={}
                            // title={}
                            // summary={}
                        />
                    })}
                </div> */}
                <div className={styles.movie_container}>
                    <div className={styles.movie_wrap}>
                        <MovieGrid/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainpage;
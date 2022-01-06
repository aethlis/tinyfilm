import React, { useEffect } from "react";
import HeaderNoBG from "../components/HeaderNoBG";
import NewMovies from "../components/NewMovies";
import { useMovieAPI } from "../contexts/FetchAPI";

function New() {
    const { movies } = useMovieAPI();
    console.log(movies);
    if (movies.length < 5) {
        return (<div />)
    }
    return (
        <div>
            <HeaderNoBG />
            <NewMovies
                movie1BgImg={movies[0].background_image}
                movie2BgImg={movies[1].background_image}
                movie3BgImg={movies[2].background_image}
                movie4BgImg={movies[3].background_image}
                movie5BgImg={movies[4].background_image}
                movie1Title={movies[0].title}
                movie2Title={movies[1].title}
                movie3Title={movies[2].title}
                movie4Title={movies[3].title}
                movie5Title={movies[4].title}
                movie1Poster={movies[0].medium_cover_image}
                movie2Poster={movies[1].medium_cover_image}
                movie3Poster={movies[2].medium_cover_image}
                movie4Poster={movies[3].medium_cover_image}
                movie5Poster={movies[4].medium_cover_image}
                movie1Rating={movies[0].rating}
                movie2Rating={movies[1].rating}
                movie3Rating={movies[2].rating}
                movie4Rating={movies[3].rating}
                movie5Rating={movies[4].rating}
                movie1RunTime={movies[0].runtime}
                movie2RunTime={movies[1].runtime}
                movie3RunTime={movies[2].runtime}
                movie4RunTime={movies[3].runtime}
                movie5RunTime={movies[4].runtime}
            />
        </div >
    );
}

export default New;
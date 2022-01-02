import React, { useEffect } from "react";
import Header from "../components/Header";
import NewMovies from "../components/NewMovies";
import { useMovieAPI } from "../contexts/FetchAPI";

function New() {
    const { movies } = useMovieAPI();
    if (movies.length < 5) {
        return (<div />)
    }
    return (
        <div>
            <Header />
            <NewMovies
                movie1={movies[0].background_image}
                movie2={movies[1].background_image}
                movie3={movies[2].background_image}
                movie4={movies[3].background_image}
                movie5={movies[4].background_image}
            />
        </div >
    );
}

export default New;
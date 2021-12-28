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
                movie1={movies[0]}
                movie2={movies[1]}
                movie3={movies[2]}
                movie4={movies[3]}
                movie5={movies[4]}
            />
            {/* {movies.map((newMovies) => (
                <NewMovies
                    backgroundImg={newMovies.background_image}
                    key={newMovies.id}
                    index={movies.indexOf(newMovies)}
                />
            ))} */}
        </div >
    );
}

export default New;
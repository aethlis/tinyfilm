import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NewMovies from "../components/NewMovies";
import { useMovieAPI } from "../contexts/FetchAPI";

function New() {
    const { movies } = useMovieAPI();
    return (
        <div>
            <Header />
            {movies.map((newMovies) => (
                <NewMovies
                    backgroundImg={newMovies.background_image}
                    key={newMovies.id}
                    index={movies.indexOf(newMovies)}
                />
            ))}
        </div >
    );
}

export default New;
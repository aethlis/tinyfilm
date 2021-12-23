import React, { createContext, useContext, useState, useEffect } from 'react';
import App from "../App"

export const FetchAPI = createContext();

export function useMovieAPI() {
    return useContext(FetchAPI)
}

export function FetchAPIProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    // const [id, setId] = useState("")
    // const [title, setTitle] = useState("")
    // const [summary, setSummary] = useState("")
    // const [coverImg, setImg] = useState("")
    // const [runtime, setRuntime] = useState("")
    // const [genres, setGenres] = useState([])
    // const [apiFetched, apifetching] = useState([movies, loading, id, summary, coverImg, runtime, genres])
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        console.log(json)
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <FetchAPI.Provider value={{ movies, loading, setLoading }}>
            {children}
        </FetchAPI.Provider>
    )
}
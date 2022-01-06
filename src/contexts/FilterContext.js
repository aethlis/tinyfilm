import React, { createContext, useContext, useState, useEffect } from 'react';
import App from "../App"
import { useMovieAPI } from './FetchAPI';

export const FiltGenre = createContext();

export function useGenreFilt() {
    return useContext(FiltGenre)
}

export function FiltGenreProvider({ children }) {
    const { movies } = useMovieAPI();
    const [GenreFilt, setGenreFilt] = useState([])
    const [SelectedGenre, setSelectedGenre] = useState("")

    useEffect(() => {
        const filteredData = movies.filter((item) => {
            return (
                Object.values(item.genres).join('').toLowerCase().includes(SelectedGenre.toLowerCase())
            )
        });
        setGenreFilt(filteredData);
    }, [SelectedGenre])

    return (
        <FiltGenre.Provider value={{ GenreFilt, setGenreFilt, SelectedGenre, setSelectedGenre }}>
            {children}
        </FiltGenre.Provider>
    )
}
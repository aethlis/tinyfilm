import React, { createContext, useContext, useState, useEffect } from 'react';
import App from "../App"

export const FiltGenre = createContext();

export function useGenreFilt() {
    return useContext(FiltGenre)
}

export function FiltGenreProvider({ children }) {
    const [GenreFilt, setGenreFilt] = useState([])
    const [SelectedGenre, setSelectedGenre] = useState("")

    return (
        <FiltGenre.Provider value={{ GenreFilt, setGenreFilt, SelectedGenre, setSelectedGenre }}>
            {children}
        </FiltGenre.Provider>
    )
}
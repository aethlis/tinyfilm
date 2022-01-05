import React, { createContext, useContext, useState, useEffect } from 'react';
import App from "../App"

export const SearchFilter = createContext();

export function useSearchFilter() {
    return useContext(SearchFilter)
}

export function SearchFilterProvider({ children }) {
    const [searchedMovies, setSearchedMovies] = useState([])
    const [isEmpty, setIfEmpty] = useState(0)

    return (
        <SearchFilter.Provider value={{ isEmpty, setIfEmpty, searchedMovies, setSearchedMovies }}>
            {children}
        </SearchFilter.Provider>
    )
}
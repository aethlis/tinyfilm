import { useEffect, useState } from "react";
import { useMovieAPI } from "../contexts/FetchAPI";
import { useHoverOver } from "../contexts/HoverContext";
import { useSearchFilter } from "../contexts/SearchFilter";
import styles from "./Search.module.css"

function SearchBar() {
    const { setSearchedMovies, setIfEmpty } = useSearchFilter();
    const { movies } = useMovieAPI();

    const { setSRCHDIS } = useHoverOver();

    const [inputVal, setVal] = useState("")
    
    useEffect(() => {
        const filteredData = movies.filter((item) => {
            return (
                Object.values(item.title).join('').toLowerCase().includes(inputVal.toLowerCase())
            )
        });
        setSearchedMovies(filteredData);
        setSRCHDIS(inputVal)
        setIfEmpty(filteredData.length)
    }, [inputVal])

    return (
        <div className={styles.searchWrap}>
            <form onSubmit={e => e.preventDefault()} name="searchForm">
                <input className={styles.searchBar} onChange={async (event) => {
                    await setVal(event.target.value)
                }} type="text" placeholder="search..." />
            </form>
        </div>
    )
}

export default SearchBar;
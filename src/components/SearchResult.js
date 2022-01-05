import { useSearchFilter } from "../contexts/SearchFilter";
import styles from "./SearchResult.module.css"
import MovieGrid from "./MovieGrid";
import react from "react";

function SearchResult() {
    const { searchedMovies, isEmpty } = useSearchFilter();

    return (
        <div className={styles.SearchFullpage}>
            <div className={styles.title}>검색 결과: {isEmpty}</div>
            <div className={styles.movieContainer}>
                <div className={styles.movieWrap}>
                    {searchedMovies.map((movie) => {
                        return (
                            <MovieGrid
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                coverImg={movie.large_cover_image}
                                bgImg={movie.background_image_original}
                                summary={movie.summary}
                                runtime={movie.runtime}
                                genres={movie.genres}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
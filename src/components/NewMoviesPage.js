import react from "react"
import { useMovieAPI } from "../contexts/FetchAPI";

const { FieldMovies } = useMovieAPI();

function NewMoviesPage() {
    return (
        <div>
            {FieldMovies.map((movie) => {
                return (
                    <div>{movie}</div>
                )
            })}
        </div>
    )
}

export default NewMoviesPage;
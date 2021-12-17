import { useEffect, useState } from "react";
import Header from "../components/Header";
import NewMainMovie from "../components/NewMainMovie";

function New() {
    const [newMainMovies, setnewMainMovies] = useState([]);
    const getnewMainMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year`
            )
        ).json();
        setnewMainMovies(json.data.movies);
        console.log(json);
    };
    useEffect(() => {
        getnewMainMovies();
    }, []);
    return (
        <div>
            <Header />
            {newMainMovies.map((newMainMovie) => (
                <NewMainMovie
                    coverImg={newMainMovie.medium_cover_image}
                    title={newMainMovie.title}
                    id={newMainMovie.id}
                />
            ))}
        </div >
    );
}

export default New;
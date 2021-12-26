import propTypes from "prop-types";
import styles from "./NewMovies.module.css"
import NewMoviesData from "../components/NewMoviesData";

function NewMovies({ movie1, movie2, movie3, movie4, movie5 }) {
    return (
        <NewMoviesData
            backgroundImg1={movie1.background_image}
            backgroundImg2={movie2.background_image}
            backgroundImg3={movie3.background_image}
            backgroundImg4={movie4.background_image}
            backgroundImg5={movie5.background_image}
        />
    );
}

export default NewMovies;
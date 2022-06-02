import React, { createContext, useContext, useState, useEffect } from 'react';
// import App from "../App"

export const FetchAPI = createContext();

export function useMovieAPI() {
    return useContext(FetchAPI)
}

export function FetchAPIProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [FieldMovie, setFieldMovie] = useState([])
    const [FilterAPI, setFilterAPI] = useState([])
    const [WeeklyOne, setWeekOne] = useState({})
    const [WeeklyTwo, setWeekTwo] = useState({})

    const [loading, setLoading] = useState(true)

    // const [item2, set]

    // const getMovies = async () => {
    //     const json = await (
    //         await fetch(
    //             `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&limit=50&sort_by=year`
    //         )
    //     ).json();
    //     setMovies(json.data.movies);
    // };

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://tinyfilm-database.herokuapp.com/api/movies?populate=*`
            )
        ).json();
        setMovies(json.data);
    };

    const getFilters = async () => {
        const json = await (
            await fetch(
                `https://tinyfilm-database.herokuapp.com/api/movies?populate[filters][populate][data][populate][attributes][populate][keyword][populate]=*`
            )
        ).json();
        setFieldMovie(json.data);
    };

    // const getFilterAPI = async () => {
    //     const json = await (
    //         await fetch(
    //             `https://tinyfilm-database.herokuapp.com/api/filters?populate[movies][populate][data][populate]=*`
    //         )
    //     ).json();
    //     setFilterAPI(json.data);
    // };

    useEffect(() => {
        getMovies();
        getFilters();
        // testing();
        // console.log(testA)
    }, []);

    const CloneDArray = []

    const ApiCloning = FieldMovie.forEach((e) => {
        CloneDArray.push(
            {
                id : e.id,
                title : `${e.attributes.title}`,
                createdAt : `${e.attributes.createdAt}`,
                updatedAt : `${e.attributes.updatedAt}`,
                publishedAt : `${e.attributes.publishedAt}`,
                plot : `${e.attributes.plot}`,
                production_intention : `${e.attributes.production_intention}`,
                movie_director : `${e.attributes.movie_director}`,
                production_period : `${e.attributes.production_period}`,
                production_year : `${e.attributes.production_year}`,
                money : `${e.attributes.money}`,
                actor : `${e.attributes.actor}`,
                director_photography : `${e.attributes.director_photography}`,
                director_sound : `${e.attributes.director_sound}`,
                runtime : `${e.attributes.runtime}`,
                filming_equipmen : `${e.attributes.filming_equipmen}`,
                filters : 
                    e.attributes.filters.data.map((i) => {
                        return (
                            i.attributes.keyword
                        )   
                    })
            }
        )
    })

    useEffect(() => {
        setFilterAPI(CloneDArray)
        setLoading(false)
        setWeekOne(CloneDArray[14])
        setWeekTwo(CloneDArray[20])
    }, [FieldMovie])

    useEffect(() => {
        // console.log(FilterAPI)
    }, [FilterAPI])


    
    return (
        <FetchAPI.Provider value={{ FilterAPI ,FieldMovie, movies, loading, setLoading, WeeklyOne, WeeklyTwo }}>
            {children}
        </FetchAPI.Provider>
    )
}
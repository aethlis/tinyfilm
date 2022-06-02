import React, { createContext, useContext, useState, useEffect } from 'react';
import App from "../App"
import { useMovieAPI } from './FetchAPI';




export const FiltGenre = createContext();

export function useGenreFilt() {
    return useContext(FiltGenre)
}

export function FiltGenreProvider({ children }) {
    const { FilterAPI } = useMovieAPI();

    const [GenreFilt, setGenreFilt] = useState([]) //Value For UI Print
    const [SelectedGenre, setSelectedGenre] = useState("") //value returned from Filter

    const [BudgetFilt, setBudgetFilt] = useState([]) //Value For UI Print
    const [SelectedBudget, setSelectedBudget] = useState("") //value returned from Filter

    const [InterFilt, setInterFilt] = useState([])

    const [ifAll, setIfAll] = useState(false)

    useEffect(() => {
        setSelectedBudget("")
        setSelectedGenre("")
    }, [])
    
    // useEffect(() => {
    //     if (SelectedGenre === "" && SelectedBudget === "") {
    //         setIfAll(true)
    //     }
    //     else {
    //         setIfAll(false)
    //     }
    // }, [SelectedGenre, SelectedBudget])

    //Trying to filter all at once
    // useEffect(() => {
    //     const stringArray = SelectedBudget.split(/\s+/)
    //     const FirstBudget = () => {
    //         if (SelectedBudget !== "") {
    //             parseInt(stringArray[0])
    //         } else if (SelectedBudget === "") {
    //             return (
    //                 parseInt("0")
    //             )
    //         }
    //     }
    //     const SecondBudget = () => {
    //         if (SelectedBudget !== "") {
    //             return (
    //                 parseInt(stringArray[1])
    //             )
    //         } else if (SelectedBudget === "") {
    //             return (
    //                 parseInt("30000000000")
    //             )
    //         }
    //     }
    //     const APIFORMAP = FilterAPI.filter(element => (Object.values(element.filters).includes(SelectedGenre)) && (FirstBudget <= element.money && element.money < SecondBudget))
    //     setInterFilt(APIFORMAP)
    // }, [SelectedBudget, SelectedGenre])

    //Genre Filter
    useEffect(() => {
        if (SelectedGenre !== "") {
            const Filteringg = FilterAPI.filter((element) => {
                return (
                    Object.values(element.filters).includes(SelectedGenre)
                )
            })
            setGenreFilt(Filteringg)
        } else if (SelectedGenre === "") {
            setGenreFilt(FilterAPI)
        }
    }, [SelectedGenre, SelectedBudget])

    // useEffect(() => {
    //     const Filteringg = FilterAPI.filter((element) => {
    //         return (
    //             Object.values(element.filters).includes(SelectedGenre)
    //         )
    //     })
    //     setGenreFilt(Filteringg)
    // }, [SelectedGenre,])

    


    //Budget Filter
    useEffect(() => {
        if (SelectedBudget !== "") {
            const stringArray = SelectedBudget.split(/\s+/)
            const FirstBudget = parseInt(stringArray[0])
            const SecondBudget = parseInt(stringArray[1])
            const filteredBudget = FilterAPI.filter((movie) => {
                return (
                    FirstBudget <= movie.money && movie.money < SecondBudget
                )
            });
            setBudgetFilt(filteredBudget);
        } else if (SelectedBudget === "") {
            setBudgetFilt(FilterAPI)
        }
    }, [SelectedBudget, SelectedGenre])

    // useEffect(() => {
    //     const stringArray = SelectedBudget.split(/\s+/)
    //     const FirstBudget = parseInt(stringArray[0])
    //     const SecondBudget = parseInt(stringArray[1])
    //     const filteredBudget = FilterAPI.filter(movie => FirstBudget <= movie.money && movie.money < SecondBudget);
    //     setBudgetFilt(filteredBudget);
    // }, [SelectedBudget])




    // Budget and Genre Combined Filter (Needs Fixing)
    const BudFilterArr = BudgetFilt.map(item => {return (item.id)})
    const GenFilterArr = GenreFilt.map(item => {return (item.id)})
    useEffect(() => {
        const intersectedData = [...new Set(FilterAPI.filter(element => {
            return (
                (GenFilterArr.includes(element.id)) && (BudFilterArr.includes(element.id))
            )
        }))];
        setInterFilt(intersectedData);
    }, [GenreFilt, BudgetFilt])

    useEffect(() => {
        console.log(InterFilt)
        // console.log(InterFilt)
        // console.log(SelectedBudget)
    }, [InterFilt])

    return (
        <FiltGenre.Provider value={{ ifAll, InterFilt, GenreFilt, setGenreFilt, SelectedGenre, setSelectedGenre, BudgetFilt, setBudgetFilt ,SelectedBudget ,setSelectedBudget }}>
            {children}
        </FiltGenre.Provider>
    )
}
import { createContext, useState, useEffect, useContext } from "react";

export const HoverOver = createContext();

export function useHoverOver() {
    return useContext(HoverOver)
}

export function HoverOverProvider({children}) {
    const [ID, setID] = useState("");
    const [COVERIMG, setCOVERIMG] = useState("")
    const [BGIMG, setBGIMG] = useState("")
    const [HIDE, setHIDE] = useState(true)
    const [TITLE, setTITLE] = useState("")
    const [SUMMARY, setSUMMARY] = useState("")
    const [GENRES, setGENRES] = useState([])

    // useEffect(() => {
    //     setID()
    //     setCOVERIMG()
    //     setTITLE()
    //     setSUMMARY()
    //     setGENRES()
    // }, []);
    return (
        <HoverOver.Provider value={{ID, COVERIMG, BGIMG, HIDE, TITLE, SUMMARY, GENRES, setID, setCOVERIMG, setBGIMG, setHIDE, setTITLE, setSUMMARY, setGENRES}}>
            {children}
        </HoverOver.Provider>
    )
}
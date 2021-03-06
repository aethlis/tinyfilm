import { createContext, useState, useContext } from "react";
import { useEffect } from "react";

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
    const [MAKING, setMAKING] = useState("")
    const [GENRES, setGENRES] = useState([])
    const [RUNTIME, setRUNTIME] = useState("")

    const [SRCHDIS, setSRCHDIS] = useState("")
    const [VIEWER, setVIEWER] = useState(false)

    useEffect(() => {
        if (SRCHDIS !== "") {
            return setVIEWER(true)
        } else if (SRCHDIS === "") {
            return setVIEWER(false)
        }
    }, [SRCHDIS])

    const [TOGGLENONE, setNone] = useState(false)

    return (
        <HoverOver.Provider value={{ VIEWER, SRCHDIS, TOGGLENONE, ID, COVERIMG, BGIMG, HIDE, TITLE, SUMMARY, MAKING, GENRES, RUNTIME, setNone, setRUNTIME, setID, setCOVERIMG, setBGIMG, setHIDE, setTITLE, setSUMMARY, setMAKING, setGENRES, setSRCHDIS}}>
            {children}
        </HoverOver.Provider>
    )
}
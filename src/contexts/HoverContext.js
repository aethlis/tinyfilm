import { createContext, useState, useContext } from "react";
import { useEffect } from "react/cjs/react.development";

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
    const [RUNTIME, setRUNTIME] = useState("")

    const [SRCHDIS, setSRCHDIS] = useState("")
    const [VIEWER, setVIEWER] = useState(false)

    useEffect(() => {
        if (SRCHDIS !== "") {
            setVIEWER(true)
        } else if (SRCHDIS === "") {
            setVIEWER(false)
        }
    }, [SRCHDIS])

    const [TOGGLENONE, setNone] = useState(false)

    return (
        <HoverOver.Provider value={{ VIEWER, SRCHDIS, TOGGLENONE, ID, COVERIMG, BGIMG, HIDE, TITLE, SUMMARY, GENRES, RUNTIME, setNone, setRUNTIME, setID, setCOVERIMG, setBGIMG, setHIDE, setTITLE, setSUMMARY, setGENRES, setSRCHDIS}}>
            {children}
        </HoverOver.Provider>
    )
}
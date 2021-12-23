import styles from "./CloseBtn.module.css"
import exitBtn from "../img/closeBtn.svg"
import { useHoverOver } from "../contexts/HoverContext";

function CloseButton() {
    const {setHIDE} = useHoverOver();
    return (
        <div className={styles.closeBtn} onMouseUp={() => {
            setHIDE(true)
        }}>
            <img src={exitBtn} alt="closeButtonFunc" />
        </div>
    )
}

export default CloseButton;
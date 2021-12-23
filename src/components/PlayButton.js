import styles from "./PlayButton.module.css"
import playBtnImage from "../img/playBtn.svg"

function PlayButton() {
    return (
        <div className={styles.playBtn}>
            <img className={styles.arrowItem} src={playBtnImage} alt="playBtn"/>
            <div>재생</div>
        </div>
    )
}

export default PlayButton;
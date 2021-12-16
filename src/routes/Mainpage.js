import Header from "../components/Header"
import styles from "./Mainpage.module.css"
import PlayButton from "../components/PlayButton"
// import Intropage from "../components/Intropage"
// import TestImg from "../img/TestImg.png"

function ContentAd() {
    return (
        <div className={styles.ContentAd}>
            {/* <img src={TestImg} alt="TestImg" className={styles.testingImg} /> */}
            <div className={styles.textinfo}>
                <div className={styles.textbox}>
                    <div className={styles.title}>title</div>
                    <div className={styles.summary}>Just an expression of mind and soul, deep within a humans brain and heart.</div>
                    <div className={styles.buttonwrap}>
                        <PlayButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Mainpage() {
    return (
        <div>
            <Header />
            <div className={styles.fullpage}>
                <div className={styles.ContentAd_container}>
                    <ContentAd />
                </div>
            </div>
        </div>
    )
}

export default Mainpage;
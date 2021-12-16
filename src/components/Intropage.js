import styles from "./Intropage.module.css"
// import Mainpage from "../routes/Mainpage";

function Intropage() {
    return (
        <div className={styles.fullpage}>
            <div className={styles.introtext}>welcome to tinyfilm</div>
        </div>
    )
}

export default Intropage;
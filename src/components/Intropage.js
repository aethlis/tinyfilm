import styles from "./Intropage.module.css"
import {Link} from "react-router-dom"
// import Mainpage from "../routes/Mainpage";

function Intropage() {
    return (
        <div className={styles.fullpage}>
            <Link to="/home">
                <div className={styles.introtext}>welcome to tinyfilm</div>
            </Link>
        </div>
    )
}

export default Intropage;
import { Link } from "react-router-dom";
import blackBrandLogo from "../img/blackBrandLogo.svg"
import styles from "./Header.module.css"
import SearchBar from "./Search"

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <img className={styles.brandLogo} src={blackBrandLogo} alt="brandLogo" />

                    <div className={styles.linker}>
                        <Link to={`/`}>
                            <div className={styles.links} id={styles.linkOne}>홈</div>
                        </Link>
                    </div>

                    <div className={styles.linker}>
                        <Link to={`/weekly`}>
                            <div className={styles.links} id={styles.linkTwo}>WEEKLY_픽</div>
                        </Link>
                    </div>

                    <div className={styles.linker}>
                        <Link to={`/new`}>
                            <div className={styles.links} id={styles.linkThree}>NEW!</div>
                        </Link>
                    </div>
                </div>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Header;
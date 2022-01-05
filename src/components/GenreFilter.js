import { useEffect } from "react/cjs/react.development";
import { useGenreFilt } from "../contexts/FilterContext";
import styles from "./GenreFilter.module.css"

function GenreFilter() {
    // const { SelectedGenre, setSelectedGenre } = useGenreFilt();
    // useEffect(() => {
    //     console.log(SelectedGenre)
    // }, [SelectedGenre])
    return (
        <div className={styles.genreFilter}>
            <div className={styles.moviesTitle}>Movies</div>
            <div className={styles.filters}>
                <div className={styles.genres}>
                    <select className={styles.selectors} name="genre">
                        <option className={styles.Options} value="movies">전체</option>
                        <option className={styles.Options} value="action">액션</option>
                        <option className={styles.Options} value="comedy">코미디</option>
                        <option className={styles.Options} value="drama">드라마</option>
                        <option className={styles.Options} value="fantasy">판타지</option>
                        <option className={styles.Options} value="horror">호러</option>
                        <option className={styles.Options} value="mystery">미스테리</option>
                        <option className={styles.Options} value="romance">로맨스</option>
                        <option className={styles.Options} value="thriller">쓰릴러</option>
                    </select>
                </div>
                <div className={styles.budget}>
                    <select className={styles.selectors}>
                        <option className={styles.Options} value="BudgetAll">전체</option>
                        <option className={styles.Options} value="500">5백만원 이하</option>
                        <option className={styles.Options} value="500">5백만원 ~ 천만원</option>
                        <option className={styles.Options} value="500">천만원 ~ 5천만원</option>
                        <option className={styles.Options} value="500">5천만원 ~ 1억</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default GenreFilter;
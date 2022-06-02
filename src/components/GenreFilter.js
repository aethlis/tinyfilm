// import { useEffect } from "react/cjs/react.development";
import { useGenreFilt } from "../contexts/FilterContext";
import styles from "./GenreFilter.module.css"

function GenreFilter() {
    const { setSelectedGenre, setSelectedBudget } = useGenreFilt();
    // useEffect(() => {
    //     console.log(SelectedGenre)
    // }, [SelectedGenre])
    return (
        <div className={styles.genreFilter}>
            <div className={styles.moviesTitle}>Movies</div>
            <div className={styles.filters}>
                <div className={styles.genres}>
                    <select className={styles.selectors} onChange={event => setSelectedGenre(event.target.value)} name="genre">
                        <option className={styles.Options} value="">전체</option>
                        <option className={styles.Options} value="Action">액션</option>
                        <option className={styles.Options} value="Comedy">코미디</option>
                        <option className={styles.Options} value="Drama">드라마</option>
                        <option className={styles.Options} value="Fantasy">판타지</option>
                        <option className={styles.Options} value="Horror">호러</option>
                        <option className={styles.Options} value="Mystery">미스테리</option>
                        <option className={styles.Options} value="Romance">로맨스</option>
                        <option className={styles.Options} value="Thriller">쓰릴러</option>
                        <option className={styles.Options} value="Biography">바이오그래피</option>
                        <option className={styles.Options} value="Musical">뮤지컬</option>
                        <option className={styles.Options} value="Crime">범죄</option>
                        <option className={styles.Options} value="Adventure">어드밴쳐</option>
                        <option className={styles.Options} value="Sci-Fi">공상 과학</option>
                        <option className={styles.Options} value="Sport">스포츠</option>
                        <option className={styles.Options} value="History">역사</option>
                    </select>
                </div>
                <div className={styles.budget}>
                    <select className={styles.selectors} onChange={event => setSelectedBudget(event.target.value)} name="budget">
                        <option className={styles.Options} value="">전체</option>
                        <option className={styles.Options} value="0 5000000">5백만원 이하</option>
                        <option className={styles.Options} value="5000000 10000000">5백만원 ~ 천만원</option>
                        <option className={styles.Options} value="10000000 50000000">천만원 ~ 5천만원</option>
                        <option className={styles.Options} value="50000000 100000000">5천만원 ~ 1억</option>
                        <option className={styles.Options} value="100000000 500000000">1억 ~ 5억</option>
                        <option className={styles.Options} value="500000000 1000000000">5억 ~ 10억</option>
                        <option className={styles.Options} value="1000000000 2000000000">10억 ~ 20억</option>
                        <option className={styles.Options} value="2000000000 3000000000">20억 ~ 30억</option>
                        <option className={styles.Options} value="10000000000 30000000000">100억 이상</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default GenreFilter;
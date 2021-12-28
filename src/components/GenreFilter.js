import styles from "./GenreFilter.module.css"

function GenreFilter() {
    return (
        <div className={styles.genreFilter}>
            <div className={styles.moviesTitle}>Movies</div>
            <div className={styles.filters}>
                <div className={styles.genres}>
                    <select className={styles.selectors}>
                        <option className={styles.Options} value="Action">액션</option>
                        <option className={styles.Options} value="Comedy">코미디</option>
                        <option className={styles.Options} value="Drama">드라마</option>
                        <option className={styles.Options} value="Fantasy">판타지</option>
                        <option className={styles.Options} value="Horror">호러</option>
                        <option className={styles.Options} value="Mystery">미스테리</option>
                        <option className={styles.Options} value="Romance">로맨스</option>
                        <option className={styles.Options} value="Thriller">쓰릴러</option>
                    </select>
                </div>
                <div className={styles.budget}>
                    <select className={styles.selectors}>
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
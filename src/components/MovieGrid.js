import styles from "./MovieGrid.module.css"

function MovieGrid(id, title, coverImg, summary) {
    return (
        // <div className={styles.movie_wrap}>
        //     <div className={styles.img_wrapper}>
        //         <img id={styles.coverImg} src={coverImg} alt={id} />
        //     </div>
        //     <div className={styles.text_box}>
        //         <div className={styles.title}>{title}</div>
        //         <div className={styles.summary}>{summary}</div>
        //     </div>
        // </div>

        <div className={styles.movie_wrap}>
            <div className={styles.img_wrapper}>
                {/* <img id={styles.coverImg} src={coverImg} alt={id} /> */}
            </div>
            <div className={styles.text_box}>
                <div className={styles.title}> The Dun Dun</div>
                <div className={styles.summary}>Hi Hello AJDNAJNdadasjnfksdfjsfhjshdkhkashdaksdhsndkcnskndjcnsjdjasjhdakhdsjhD</div>
            </div>
        </div>
    )
}

export default MovieGrid;
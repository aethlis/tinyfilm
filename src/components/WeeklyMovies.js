import styles from "./WeeklyMovies.module.css";

function WeeklyMovies({ weeklyMovie1Img, weeklyMovie1Title, weeklyMovie1Intro, weeklyMovie2Img, weeklyMovie2Title, weeklyMovie2Intro }) {
    return (
        <div>
            <div className={styles.left}>
                <div className={styles.weeklyMovie1}>
                    <div className={styles.weeklyMovie1Img}>
                        <img src={weeklyMovie1Img} />
                    </div>
                    <div className={styles.weeklyMovie1Title}>
                        {weeklyMovie1Title}
                    </div>
                    <div className={styles.weeklyMovie1Intro}>
                        {`${weeklyMovie1Intro} 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    `}
                    </div>
                </div>
                <div className={styles.weeklyWatch}>
                    <div className={styles.weeklyWatchTitle}>
                        {`WEEKLY WATCH`}
                    </div>
                    <div className={styles.weeklyWatchContent}>
                        {`
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                `}
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.text}>
                    {`
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    `}

                </div>
                <div className={styles.weeklyPost}>
                    <div className={styles.weeklyPostTitle}>
                        {`WEEKLY POST`}
                    </div>
                    <div className={styles.weeklyPostContent}>
                        <div className={styles.weeklyMovie2Img}>
                            <img src={weeklyMovie2Img} />
                        </div>
                        <div className={styles.weeklyMovie2Title}>
                            {weeklyMovie2Title}
                        </div>
                        <div className={styles.weeklyMovie2Intro}>
                            {`
                            ${weeklyMovie2Intro}
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            `}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyMovies;

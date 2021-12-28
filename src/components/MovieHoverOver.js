import styles from './MovieHoverOver.module.css'
import { useHoverOver } from '../contexts/HoverContext';
import PlayButton from './PlayButton';
import CloseButton from './CloseBtn';

function HoverShow({id, coverImg, title, summary, genres, bgImg, runtime}) {
    const {setHIDE} = useHoverOver();
    return (
        <div className={styles.container}>
            <div className={styles.filter}></div>
            <div className={styles.hoverWrap} id={id}>
                <div className={styles.bgClick} onClick={() => {
                    setHIDE(true)
                }}></div>
                <div className={styles.hoverpage}>
                    <div className={styles.infoWrap}>
                        <div className={styles.videoPlayer} style={{backgroundImage: `url("${bgImg}")`}}>
                            <div className={styles.buttons}>
                                <div className={styles.xbutton}>
                                    <CloseButton />
                                </div>
                                <div className={styles.buttonsAlignment}>
                                    <div className={styles.buttons_title}>{title}</div>
                                    <div className={styles.playAndRuntime}>
                                        <PlayButton />
                                        <div className={styles.runtime}>{runtime}<span className={styles.minutes}>min</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.coverImgWrap}>
                                <img src={coverImg} alt={id} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.titleWrapper}>
                                    <div className={styles.title}>줄거리</div>
                                    <div className={styles.summary}>{summary}</div>
                                </div>

                                <div className={styles.titleWrapperTwo}>
                                    <div className={styles.title}>제작의도</div>
                                    <div className={styles.summary}>{summary}</div>
                                    <div className={styles.genresWrapper}>
                                        <div className={styles.genreList}>장르:</div>
                                        {genres.map((genre) => {
                                            return (
                                                <div className={styles.genres}>{genre},</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverShow;
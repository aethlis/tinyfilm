import styles from './MovieHoverOver.module.css'
import { useHoverOver } from '../contexts/HoverContext';
import PlayButton from './PlayButton';

function HoverShow({id, coverImg, title, summary, genres, bgImg, onClick}) {
    return (
        <div className={styles.container}>
            <div className={styles.filter}></div>
            <div className={styles.hoverWrap} id={id}>
                <div className={styles.hoverpage} onClick={onClick}>
                    <div className={styles.infoWrap}>
                        <div className={styles.videoPlayer}>
                            <div className={styles.buttons}>
                                <div className={styles.buttons_title}>{title}</div>
                                <PlayButton />
                            </div>
                            <img src={bgImg} alt={id} />
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.coverImgWrap}>
                                <img src={coverImg} alt={id} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.summary}>{summary}</div>
                                <div className={styles.genres}>{genres}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoverShow;
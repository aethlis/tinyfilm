import { useSearchFilter } from "../contexts/SearchFilter";
import styles from "./SearchResult.module.css"
import MovieGrid from "./MovieGrid";
import react from "react";

const addMaximumScaleToMetaViewport = () => {
    const el = document.querySelector('meta[name=viewport]');
  
    if (el !== null) {
      let content = el.getAttribute('content');
      let re = /maximum\-scale=[0-9\.]+/g;
  
      if (re.test(content)) {
          content = content.replace(re, 'maximum-scale=1.0');
      } else {
          content = [content, 'maximum-scale=1.0'].join(', ')
      }
  
      el.setAttribute('content', content);
    }
  };
  
  const disableIosTextFieldZoom = addMaximumScaleToMetaViewport;
  
  // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios/9039885#9039885
  const checkIsIOS = () =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (checkIsIOS()) {
    disableIosTextFieldZoom();
  }

function SearchResult() {
    const { searchedMovies, isEmpty } = useSearchFilter();

    return (
        <div className={styles.SearchFullpage}>
            <div className={styles.title}>검색 결과: {isEmpty}</div>
            <div className={styles.movieContainer}>
                <div className={styles.movieWrap}>
                    {searchedMovies.map((movie) => {
                        return (
                            <MovieGrid
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                coverImg={movie.large_cover_image}
                                bgImg={movie.background_image_original}
                                summary={movie.plot}
                                runtime={movie.runtime}
                                genres={[movie.genres]}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
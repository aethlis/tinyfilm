import { useEffect, useRef } from "react";
import "./NewMoviesData.css"
import { gsap } from "gsap";

function NewMoviesData({ backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5 }) {
    const img1Ref = useRef();
    useEffect(() => {
        gsap.to(img1Ref.current, { rotation: "+=360" });
    }, [img1Ref]);
    return (
        <div>
            <div ref={img1Ref}>
                <img src={backgroundImg1} className="img1" />
            </div>
            <div>
                <img src={backgroundImg2} className="img2" />
            </div>
            <div>
                <img src={backgroundImg3} className="img3" />
            </div>
            <div>
                <img src={backgroundImg4} className="img4" />
            </div>
            <div>
                <img src={backgroundImg5} className="img5" />
            </div>
        </div >
    );
}

export default NewMoviesData;
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./NewMoviesData.css"

function NewMoviesData({ backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5 }) {
    // const scrollY = window.scrollY
    // console.log(scrollY);

    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();
    const imgDiv = useRef();

    const onWheel = () => {
        gsap.to(imgDiv.current, {
            rotation: 360,
        }, [imgDiv]);
        // gsap.to(img1.current, {
        //     rotation: 0,
        //     x: 50,
        //     y: 300,
        //     duration: 1,
        //     zIndex: 4,
        // }, [img1]);

        // gsap.to(img2.current, {
        //     rotation: 10,
        //     x: 60,
        //     y: 300,
        //     duration: 1,
        //     zIndex: 3,
        // }, [img1]);

        // gsap.to(img3.current, {
        //     rotation: 10,
        //     x: 70,
        //     y: 300,
        //     duration: 0,
        //     zIndex: 2,
        // })

        // gsap.to(img4.current, {
        //     display: "none",
        //     opacity: 0,
        //     y: 500,
        //     duration: 0,
        // })

        // gsap.to(img5.current, {
        //     display: "none",
        //     opacity: 0,
        //     y: 600,
        //     duration: 0,
        // })
    }
    return (
        <div onWheel={onWheel} ref={imgDiv}>
            <div>
                <img ref={img1} src={backgroundImg1} className="img1" />
            </div>
            <div>
                <img ref={img2} src={backgroundImg2} className="img2" />
            </div>
            <div>
                <img ref={img3} src={backgroundImg3} className="img3" />
            </div>
            <div>
                <img ref={img4} src={backgroundImg4} className="img4" />
            </div>
            <div>
                <img ref={img5} src={backgroundImg5} className="img5" />
            </div>
        </div >
    );
}

export default NewMoviesData;
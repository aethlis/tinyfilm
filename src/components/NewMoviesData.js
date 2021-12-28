import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import "./NewMoviesData.css"
// import Swiper from "swiper";
// import "swiper/css";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


function NewMoviesData({ backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5 }) {
    // const scrollY = window.scrollY
    // console.log(scrollY);

    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(img3.current, {
            scrollTrigger: {
                trigger: img3,
                start: "-30px 10%",
                markers: true,
                toggleActions: "restart none none none",
            },
            rotation: 360,
            duration: 3,
        });
    }, [img3]);

    return (
        <div className="imgDiv">
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
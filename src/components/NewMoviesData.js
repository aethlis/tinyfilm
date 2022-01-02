import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
// import "./NewMoviesData.css"
import { Swiper, SwiperSlide } from 'swiper/react';


function NewMoviesData({ backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5 }) {
    // const scrollY = window.scrollY
    // console.log(scrollY);

    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();

    // gsap.registerPlugin();
    // gsap.to(img3.current, {
    //     scrollTrigger: {
    //         trigger: img3,
    //         start: "-30px 10%",
    //         markers: true,
    //         toggleActions: "restart none none none",
    //     },
    //     rotation: 360,
    //     duration: 3,
    // });

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img ref={img1} src={backgroundImg1} className="img1" /></SwiperSlide>
            <SwiperSlide><img ref={img2} src={backgroundImg2} className="img2" /></SwiperSlide>
            <SwiperSlide><img ref={img3} src={backgroundImg3} className="img3" /></SwiperSlide>
            <SwiperSlide><img ref={img4} src={backgroundImg4} className="img4" /></SwiperSlide>
            <SwiperSlide><img ref={img5} src={backgroundImg5} className="img5" /></SwiperSlide>
        </Swiper>

        /*{ <div>
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
        </div> }*/
    );
}

export default NewMoviesData;
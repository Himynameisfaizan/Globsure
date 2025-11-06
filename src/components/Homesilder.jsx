import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../css/homeslider.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Homesilder = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="parent">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper1"
        >
          <SwiperSlide className="hello">
            <div className="health">
              <i class="ri-heart-pulse-line"></i>
              <h2>Health insurance </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hello">
            <div className="general">
              <i class="ri-home-smile-2-line"></i>
              <h2>Health insurance </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hello">
            <div className="life">
              <i class="ri-heart-pulse-line"></i>
              <h2>Health insurance </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Homesilder;

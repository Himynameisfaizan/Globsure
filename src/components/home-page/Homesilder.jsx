import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/thumbs";
import "../../css/homeslider.css";
import {
  EffectFade,
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

const Homesilder = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="parent">
        <Swiper
          spaceBetween={10}
          // effect={"fade"}
          // effect={"creative"}
          // navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[
            EffectFade,
            EffectCreative,
            FreeMode,
            Navigation,
            Thumbs,
            Autoplay,
          ]}
          className="mySwiper2"
        >
          <SwiperSlide className="slider-content">
            <div className="img">
              <img src="src/assets/image/health bg.jpg" />
            </div>
            <div className="content-detail">
              <h2>
                Globsure International <br />
                Your Partner in Smart, Future Proof{" "}
  

                <span style={{ backgroundImage: "url('src/assets/image/health bg2.jpg')",
                color: "transparent", backgroundClip: "text" }}>
                  Protection
                </span>
              </h2>
            </div>
            <div className="fade-color"></div>
          </SwiperSlide>

          <SwiperSlide className="slider-content">
            <div className="img">
              <img src="src/assets/image/life bg.jpg" />
            </div>
            <div className="content-detail">
              <h2>
                Globsure International <br />
                Your Partner in Smart, Future Proof{" "}
                <span style={{backgroundImage: "url('src/assets/image/health bg2.jpg')",
                color: "transparent", backgroundClip: "text" }}>
                  Protection
                </span>
              </h2>
            </div>
            <div className="fade-color"></div>
          </SwiperSlide>

          <SwiperSlide className="slider-content">
            <div className="img">
              <img src="src/assets/image/car bg.jpg" />
            </div>
            <div className="content-detail">
              <h2>
                Globsure International <br />
                Your Partner in Smart, Future Proof{" "}
                <span style={{ backgroundImage: "url('src/assets/image/health bg2.jpg')",
                color: "transparent", backgroundClip: "text" }}>
                  Protection
                </span>
              </h2>
            </div>
            <div className="fade-color"></div>
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
              <i class="ri-hand-coin-line"></i>
              <h2>General insurance </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide className="hello">
            <div className="life">
              <i class="ri-car-line"></i>
              <h2>Car insurance </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="wrapper">
        <h1>
          Easy & quick process to get life and health <a href="#">insurance</a>.
          Get more help
        </h1>
      </div>
    </>
  );
};

export default Homesilder;

import React from "react";
import "./sliderFooter.css";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "./../../img/rectangle85.png";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const Sliderfooter = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider__item">
          <div className="slider__title">
            <h3 className="title__h3">Сертификаты</h3>
          </div>
          <div className="slider__swiper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={3}
              simulateTouch={true}
              navigation={{
                clickable: true,
              }}
              loop={true}
              autoplay={{
                delay: 4000,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                992: {
                  centeredSlides: true,
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <a
                  href="https://lipsum.app/id/22/1600x1200"
                  data-fancybox="gallery"
                  data-caption="Сертификат 1"
                >
                  <img src={img1} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://lipsum.app/id/22/1600x1200"
                  data-fancybox="gallery"
                  data-caption="Сертификат 1"
                >
                  <img src={img1} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://lipsum.app/id/22/1600x1200"
                  data-fancybox="gallery"
                  data-caption="Сертификат 1"
                >
                  <img src={img1} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://lipsum.app/id/22/1600x1200"
                  data-fancybox="gallery"
                  data-caption="Сертификат 1"
                >
                  <img src={img1} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://lipsum.app/id/22/1600x1200"
                  data-fancybox="gallery"
                  data-caption="Сертификат 1"
                >
                  <img src={img1} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://lipsum.app/id/22/1600x1200"
                  data-fancybox="gallery"
                  data-caption="Сертификат 2"
                >
                  <img src={img1} alt="" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sliderfooter;

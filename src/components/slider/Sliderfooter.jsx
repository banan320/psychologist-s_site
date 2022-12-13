import React from "react";
import "./sliderFooter.css";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "./../../img/сertificate/01.jpg";
import img2 from "./../../img/сertificate/02.jpg";
import img3 from "./../../img/сertificate/03.jpg";
import img4 from "./../../img/сertificate/04.jpg";
import img5 from "./../../img/сertificate/05.jpg";

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
              spaceBetween={30}
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
                290: {
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
                  href={img1}
                  data-fancybox="gallery"
                  data-caption="Диплом КубГу"
                >
                  <img src={img1} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href={img2}
                  data-fancybox="gallery"
                  data-caption="Удостоверение семейной психотерапии"
                >
                  <img src={img2} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href={img3}
                  data-fancybox="gallery"
                  data-caption="Удостоверение судебной и внесудебной экспертизы"
                >
                  <img src={img3} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href={img4}
                  data-fancybox="gallery"
                  data-caption="Диплом кандидата"
                >
                  <img src={img4} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href={img5}
                  data-fancybox="gallery"
                  data-caption="Сертификат Сказкотерапия"
                >
                  <img src={img5} alt="" />
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

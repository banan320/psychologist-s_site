import React from "react";
import "./main.css";

import imgMe from "../../img/header_img.webp";
import Aboutme from "../about/Aboutme";
import Appeals from "../appeals/Appeals";
import Directionjob from "../direction/Directionjob";
import Job from "../job/Job";
import Sliderfooter from "../slider/Sliderfooter";

const Main = () => {
  return (
    <main>
      <section className="main">
        <div className="container">
          <div className="main__container">
            <div className="main__item ">
              <div className="main__text-item">
                <div className="main__title">
                  <h1>Психолог</h1>
                </div>
                <div className="main__subtitle">
                  <h2>Елена Медведева</h2>
                </div>
                <div className="main__text">
                  <p>
                    Многопрофильная квалифицированная психологическая помощь
                  </p>
                </div>

                <div className="main__btn-full">
                  <a
                    className="btn btn__main"
                    href="https://wa.me/79183360886?text=Добрый%20день,%20Елена!%20Я%20хотел%20бы%20получить%20психологическую%20помощь."
                  >
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
              <div className="main__img">
                <img src={imgMe} alt="" className="img__main" width="450px" />
              </div>
              <div className="main__btn">
                <a
                  className="btn btn__main"
                  href="https://wa.me/79183360886?text=Добрый%20день,%20Елена!%20Я%20хотел%20бы%20получить%20психологическую%20помощь."
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Aboutme />
      <Appeals />
      <Directionjob />
      <Job />
      <Sliderfooter />
    </main>
  );
};

export default Main;

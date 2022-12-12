import React from "react";
import imgMe from "../../img/header_img.png";
import Aboutme from "./Aboutme";
import Appeals from "./Appeals";
import Directionjob from "./Directionjob";
import Job from "./Job";
import Sliderfooter from "./Sliderfooter";

const Main = () => {
  return (
    <main>
      <section className="main">
        <div className="container">
          <div className="main__container">
            <div className="main__title">
              <div>
                <h1>Психолог</h1>
              </div>
              <div>
                <h2>Елена Медведева</h2>
              </div>
              <div>
                <p>Многопрофильная квалифицированная психологическая помощь</p>
              </div>

              <div className="main__img">
                <img src={imgMe} alt="" className="img__main" />
              </div>
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

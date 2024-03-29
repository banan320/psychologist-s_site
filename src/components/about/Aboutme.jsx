import React from "react";
import "./aboutme.css";
import imgAbout from "../../img/aboutMe_img.webp";

const Aboutme = () => {
  return (
    <section className="about__main">
      <div className="container">
        <div className="about__container">
          <div className="about__item">
            <div className="about__text">
              <div className="about__title">
                <h3 className="title__h3">Обо мне</h3>
              </div>
              <div>
                <ul className="about__ul">
                  <li>
                    Дипломированный психолог <br />
                    <span> (Кубанский Государственный Университет)</span>
                  </li>
                  <li>Кандидат психологических наук</li>
                  <li>Опыт практической психологии 20 лет</li>
                  <li>Сказкотерапевт</li>
                  <li>Специалист в системной семейнойпсихотерапии</li>
                  <li>
                    Имею квалификацию в судебной <br /> и внесудебной
                    психологической экспертизе детско-родительских отношений
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__img">
              <img src={imgAbout} alt="" className="img__about" width="335px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

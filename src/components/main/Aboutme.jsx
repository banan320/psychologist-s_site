import React from "react";
import imgAbout from "../../img/aboutMe_img.png";

const Aboutme = () => {
  return (
    <section className="about__main">
      <div className="container">
        <div className="about__container">
          <div className="about__item">
            <div>
              <h3 className="title__h3">Обо мне</h3>
            </div>
            <div className="about__text">
              <div>
                <ul className="item__ul">
                  <li>
                    Дипломированный психолог <br />
                    <span> (Кубанский Государственный Университет)</span>
                  </li>
                  <li>Кандидат психологических наук</li>
                  <li>Опыт практической психологии 20 лет</li>
                  <li>Сказкотерапевт</li>
                  <li>
                    Специалист в системной семейной <br /> психотерапии
                  </li>
                  <li>
                    Имею квалификацию в судебной <br /> и внесудебной
                    психологической экспертизе <br /> детско-родительских
                    отношений
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__img">
              <img src={imgAbout} alt="" className="img__about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

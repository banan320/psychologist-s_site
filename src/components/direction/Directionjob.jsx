import React from "react";
import imgCards from "../../img/cards.png";
import "./directionjob.css";

const Directionjob = () => {
  return (
    <section className="direction">
      <div className="container">
        <div className="direction__container">
          <div className="direction__item">
            <div className="direction__text">
              <div className="direction__title">
                <h3 className="title__h3">Направления работы</h3>
              </div>
              <div>
                <ul className="direction__ul">
                  <li>Снятие тревожности</li>
                  <li>Консультативная работа</li>
                  <li>Поиск способов выхода из стресса</li>
                  <li>
                    Налаживание детско-родительских
                    <br /> отношений
                  </li>
                  <li>
                    Коррекция поведения детей
                    <br />
                    <span>(агрессия, застенчивость, страхи и т.д.)</span>
                  </li>
                  <li>
                    Коррекция познавательной деятельности детей
                    <br />
                    <span>(мышление, внимание, память)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="direction__img">
              <img src={imgCards} alt="" className="img__direction" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directionjob;

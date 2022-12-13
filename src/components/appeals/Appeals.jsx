import React from "react";
import "./appeals.css";

const Appeals = () => {
  return (
    <section className="appeals">
      <div className="container">
        <div className="appeals__container">
          <div className="appeals__item">
            <div className="appeals__title">
              <h3 className="title__h3">Почему ко мне обращаются:</h3>
            </div>
            <ul className="item__ul appeals__li">
              <li>
                <span className="item__num num01">01</span>
                Анонимность
                <br /> встреч
              </li>
              <li>
                <span className="item__num">02</span>
                Индивидуальный
                <br /> подход
              </li>
              <li>
                <span className="item__num">03</span>
                Современные
                <br /> методы психологии
              </li>
              <li>
                <span className="item__num">04</span>
                Опыт работы
                <br /> <span>(более 20 лет)</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appeals;

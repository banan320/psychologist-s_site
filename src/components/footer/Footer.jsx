import React from "react";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__item">
            <div className="footer__email-logo">
              <div className="logo__footer">
                <img src={logo} alt="" />
              </div>
              <div className="email__footer">
                <a href="mailto:man.medvedeva72@yandex.ru?subject=Психологическая помощь">
                  man.medvedeva72@yandex.ru
                </a>
              </div>
            </div>

            <div className="footer__number">
              <a className="num__footer" href="tel:+79183360886">
                +7 (918) 336-08-86
              </a>
              <p>Звонки с 10:00 до 20:00</p>
              <a
                className="btn__footer"
                href="https://wa.me/79183360886?text=Добрый%20день,%20Елена!%20Я%20хотел%20бы%20получить%20психологическую%20помощь."
              >
                Написать в WhatsApp
              </a>
            </div>

            <div className="footer__address">
              <div className="address__text">
                <p>г. Краснодар,</p>
                <p>ул. Думенко, 33, оф 5</p>
              </div>

              <div className="footer__map">
                <a href="https://yandex.ru/maps/?um=constructor%3Aad3a71177179318c735dbf0859d2ef75122a0876bf18ec7b010e97867ade671a&source=constructorLink">
                  Посмотреть на карте
                </a>
              </div>
              <div className="policy">
                <a href="#">Политика конфиденциальности</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

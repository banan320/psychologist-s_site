// import "./header.css";
import React from "react";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__address">
            <p>г. Краснодар,</p>
            <p>ул. Думенко, 33, оф 5</p>
          </div>
          <div className="header__logo">
            <img src={logo} alt="" className="logo__header logo" />
          </div>
          <div className="header__number">
            <a href="tel:+79183360886">+7 (918) 336-08-86</a>
            <p>Звонки с 10:00 до 20:00</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

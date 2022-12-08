import React from "react";
import imgMe from "../../img/header_img.png";

const Main = () => {
  return (
    <main className="main">
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

            <div className="main__btn">
              <button className="btn btn__main">Написать в WhatsApp</button>
            </div>
          </div>
          <div className="main__img">
            <img src={imgMe} alt="" className="img__main" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
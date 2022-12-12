import React from "react";
import job01 from "../../img/01_job.png";
import job02 from "../../img/02_job.png";
import job03 from "../../img/03_job.png";
import job04 from "../../img/04_job.png";

const Job = () => {
  return (
    <section className="job">
      <div className="container">
        <div className="job__item">
          <div className="job__title">
            <h3 className="title__h3">Как я работаю</h3>
          </div>

          <div className="job__block">
            <div className="item__ul jobs__items">
              <div className="job__img">
                <img src={job01} alt="" />
              </div>
              <div className="job__text">
                <p>
                  Первичная консультация, <br /> выявление проблем
                </p>
              </div>
            </div>

            <div className="item__ul jobs__items ">
              <div className="job__img">
                <img src={job02} alt="" />
              </div>
              <div className="job__text">
                <p>
                  Разработка индивидуального <br /> плана работы
                </p>
              </div>
            </div>

            <div className="item__ul jobs__items">
              <div className="job__img">
                <img src={job03} alt="" />
              </div>
              <div className="job__text">
                <p>
                  Проработка проблемных
                  <br /> вопросов <br />
                  <span>
                    (коррекция подхода при <br /> необходимости)
                  </span>
                </p>
              </div>
            </div>

            <div className="item__ul jobs__items">
              <div className="job__img">
                <img src={job04} alt="" />
              </div>
              <div className="job__text">
                <p>
                  Сопровождение клиентов после
                  <br /> прохождения терапии
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;

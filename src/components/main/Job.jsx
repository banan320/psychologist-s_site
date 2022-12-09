import React from "react";
import job01 from "../../img/01_job.png";
import job02 from "../../img/02_job.png";
import job03 from "../../img/03_job.png";
import job04 from "../../img/04_job.png";

const Job = () => {
  return (
    <section className="job">
      <div className="job__container">
        <div className="job__item">
          <div className="job__title">
            <h3 className="title__h3">Как я работаю</h3>
          </div>

          <ul className="item__ul job__li">
            <li>
              <img src={job01} alt="" />
              Первичная консультация, <br /> выявление проблем
            </li>
            <li>
              <img src={job02} alt="" />
              Разработка индивидуального <br /> плана работы
            </li>
            <li>
              <img src={job03} alt="" />
              Проработка проблемных
              <br /> вопросов <br />
              <span>
                (коррекция подхода при <br /> необходимости)
              </span>
            </li>
            <li>
              <img src={job04} alt="" />
              Сопровождение клиентов после
              <br /> прохождения терапии
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Job;

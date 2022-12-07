import "./header.css";
import React from "react";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  return (
    <header className={props.className + " " + "header"}>
      <div className="container container__header">
        <div className="address">
          <span>
            <FontAwesomeIcon icon="fa-light fa-location-dot" />
            <FontAwesomeIcon icon={faHome} />
            <i class="fa-light fa-location-dot"></i>
          </span>
          <p>г. Краснодар,</p>
          <p>ул. Думенко, 33, оф 5</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

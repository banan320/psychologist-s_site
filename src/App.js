import "./styles/reset.css";
import "./styles/App.css";
import "./components/header/header.css";
import "./components/main/main.css";
import "./components/main/aboutme.css";
import "./components/main/appeals.css";
import "./components/main/directionjob.css";
import "./components/main/job.css";

import "./styles/media.css";

// import Input from "./input";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  // const [classNames, setClassNames] = useState("name");
  const [classNames, setClassNames] = useState({
    name: "name",
    name2: "name2",
    black: "black",
  });

  return (
    <div className="wrapper">
      <Header />
      {/* className={classNames.black} */}
      {/* <Input className={classNames.name}></Input>
      <Input className={classNames.name2}></Input> */}
      <Main />
    </div>
  );
}

export default App;

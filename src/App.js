import "./styles/App.css";
// import "./components/header/header.css";

import Input from "./input";
import React, { useState } from "react";
import Header from "./components/header/Header";

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
    </div>
  );
}

export default App;

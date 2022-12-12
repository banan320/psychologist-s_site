import "./styles/reset.css";
import "./styles/App.css";
import "./styles/media.css";

import "./components/header/header.css";
import "./components/main/main.css";
import "./components/main/aboutme.css";
import "./components/main/appeals.css";
import "./components/main/directionjob.css";
import "./components/main/job.css";
import "./components/main/sliderFooter.css";
import "./components/footer/footer.css";

import "./styles/media.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

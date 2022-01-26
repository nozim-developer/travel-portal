/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import "./Apps.css";
import Footer from "./Component/Footer/Footer";
import Header_four from "./Component/Header/Header_four";
import Header_one from "./Component/Header/Header_one";
import Header_three from "./Component/Header/Header_three";
import Header_two from "./Component/Header/Header_two";
import Main_top from "./Component/Main/Main_top";
import Main_to_main from "./Component/Main/Main_to_main";

function App() {
  return (
    <div className="App">
      <div className="responsive">
        <div className="html">
          <div className="divv"></div>
              <filter id="glow">
                <fegaussianblur
                  className="blur"
                  result="coloredBlur"
                  stdDeviation="4"
                ></fegaussianblur>
                <femerge>
                  <femergenode in="coloredBlur"></femergenode>
                  <femergenode in="SourceGraphic"></femergenode>
                </femerge>
              </filter>
              <h2 className="h3">Sayt responsive qilinmagan faqat kompyuterdan kirish mumkin!</h2>
          <h2 className="h2"> 406 Not Acceptable</h2>
        </div>
      </div>
      <div className="Respon">
        <Header_one />
        <Header_two />
        <Header_three />
        <Header_four />
        <Main_top />
        <Main_to_main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

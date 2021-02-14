import logo from "./logo.svg";
import "./App.css";
import { firestore } from "./fbase";
import background from "img/KakaoTalk_20210212_021345471.jpg";
import BoothPage from "Page/Booth";

function App() {
  return (
    // <div className="App">
    //   <header
    //     className="App-header"
    //     style={{
    //       backgroundImage: `url(${background})`,
    //       backgroundSize: "100%",
    //     }}
    //   >
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BoothPage />
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { firestore } from "./fbase";
import background from "img/KakaoTalk_20210212_021345471.jpg";
import BoothPage from "Page/Booth";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  rootColor: {
    backgroundColor: "white",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.rootColor}>
      {/* // <div className="App">
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
    // </div> */}
      <BoothPage />
    </div>
  );
}

export default App;

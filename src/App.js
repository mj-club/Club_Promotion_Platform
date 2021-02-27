import logo from "./logo.svg";
import "./App.css";
import { firestore } from "./fbase";
import Booth from "Page/Booth";
import Main from "Page/Main";
import { makeStyles } from "@material-ui/core/styles";
import AppRouter from "components/Router";
const useStyles = makeStyles((theme) => ({
  rootColor: {
    backgroundColor: "white",
  },
}));
// "react-image-mapper": "0.0.15",
function App() {
  const classes = useStyles();
  return (
    // <div className={classes.rootColor}>
    /* // <div className="App">
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
    // </div> */
    /* <Main />
    </div> */
    <AppRouter />
  );
}

export default App;

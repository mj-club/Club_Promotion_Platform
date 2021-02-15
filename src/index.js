import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BBTreeGB from "styles/fonts/BBTreeGB.woff";
import CssBaseline from "@material-ui/core/CssBaseline";
const bbtreegb = {
  fontFamily: "BBTreeGB",
  src: `url(${BBTreeGB}) format('woff')`,
  fontWeight: "normal",
  fontStyle: "normal",
};
const theme = createMuiTheme({
  typography: {
    fontFamily: "BBTreeGB",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [bbtreegb],
      },
    },
  },
});
console.log(theme.typography);
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

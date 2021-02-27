import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./styles/main.scss";
import BBTreeGB from "styles/fonts/BBTreeGB.woff";
import CssBaseline from "@material-ui/core/CssBaseline";
const bbtreegb = {
  fontFamily: "BBTreeGB",
  src: `url(${BBTreeGB}) format('woff')`,
  fontWeight: "normal",
  fontStyle: "normal",
};
const nanumbarungothic = {
  fontFamily: "NanumBarunGothic",
  fontStyle: "normal",
  fontWeight: "400",
  src: `url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff')`,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "NanumBarunGothic",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [nanumbarungothic],
      },
    },
  },
});

console.log(theme.typography);
ReactDOM.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

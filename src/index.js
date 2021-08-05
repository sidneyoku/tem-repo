import React from "react";
import ReactDOM from "react-dom";
import "./styles/global-styles.css";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./templates/Home/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home tem-uma-prop-aqui="PROPPP" numberIncrement={2} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

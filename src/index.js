import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const INVALID_WORDS = ["JepseR", "Morty", "Dumbledore"];
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App invalidWords={INVALID_WORDS} />
  </React.StrictMode>,
  rootElement
);

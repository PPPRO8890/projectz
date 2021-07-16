import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Main from "./Main"
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <Main />
  </BrowserRouter>,

  rootElement
);

import React from "react";
import ReactDOM from "react-dom/client";

import "./includes/styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TodoApp from "./views/containers/TodoApp/TodoApp";
import { Homepage, Mainpage } from "./views/containers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
        <TodoApp/>
    </BrowserRouter>
  </React.StrictMode>,
);
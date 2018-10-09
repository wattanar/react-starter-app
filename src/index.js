import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import "./styles/sanitize.css";
import "./styles/app.css";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

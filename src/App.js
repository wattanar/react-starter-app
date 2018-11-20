import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFoundContainer";
import Home from "./components/Home/HomeContainer";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;

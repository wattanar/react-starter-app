import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hello/:name" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;

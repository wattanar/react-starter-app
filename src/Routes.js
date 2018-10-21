import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:name" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/HomeContainer";
import NotFound from "./components/NotFound/NotFoundContainer";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
   		</Switch>
    </React.Fragment>
  );
};

export default Routes;

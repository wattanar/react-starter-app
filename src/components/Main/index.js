import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Counter from '../Counter';
import NotFound from '../Common/NotFound';

const MainComponent = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default MainComponent;

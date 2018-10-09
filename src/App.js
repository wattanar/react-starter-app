import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import NotFound from './components/Common/NotFound';

export default class App extends React.Component {
  state = {
    projectName: 'React Starter App',
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="app-container">
            <h1>{this.state.projectName}</h1>
            <ul className="app-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter">Simple Counter</Link>
              </li>
              <li>
                <Link to="/404">Not found</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/counter" component={Counter} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

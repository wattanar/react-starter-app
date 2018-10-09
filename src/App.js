import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import NotFound from './components/Common/NotFound';

import './styles/app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: 'React Starter App',
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <header
            className="navbar navbar-block"
            style={{ padding: '10px 20px' }}
          >
            <section className="navbar-section">
              <Link to="/" className="navbar-brand mr-2">
                React Starter App
              </Link>
            </section>
            <section className="navbar-section">
              <Link to="/" className="btn btn-link">
                Home
              </Link>
              <Link to="/counter" className="btn btn-link">
                Counter
              </Link>
              <Link to="/404" className="btn btn-link">
                Not found
              </Link>
            </section>
          </header>
          <div className="container" style={{ padding: '10px 20px' }}>
            <div className="columns">
              <div className="column col-12">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/counter" component={Counter} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

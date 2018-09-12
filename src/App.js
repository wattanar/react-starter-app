import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default class App extends React.Component {
  constructor() {
    super();

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
          <Navbar color="primary" fixed="top" dark expand="md">
            <Container>
              <Link className="navbar-brand" to="/">
                {this.state.appName}
              </Link>
              <NavbarToggler onClick={this.toggle.bind(this)} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Container style={{ marginTop: '70px' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

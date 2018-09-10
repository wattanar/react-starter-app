import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import Home from './pages/Home';
import About from './pages/About';

export default class App extends Component {
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
          <Navbar color="primary" dark expand="md">
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
          <Container style={{ marginTop: '20px' }}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

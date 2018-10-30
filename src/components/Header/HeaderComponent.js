import React from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <Container>
            <Link className="navbar-brand" to="/">
              {this.props.HeaderState.nav_brand}
            </Link>
            <NavbarToggler
              onClick={this.props.navToggle.bind(
                this,
                !this.props.HeaderState.nav_toggle
              )}
            />
            <Collapse isOpen={this.props.HeaderState.nav_toggle} navbar>
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
      </React.Fragment>
    );
  }
}

export default HeaderComponent;

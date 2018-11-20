import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

class NavbarComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand" to="/">
            {this.props.NavbarState.brand}
          </Link>
          <NavbarToggler
            onClick={this.props.touchBurger.bind(
              this,
              !this.props.NavbarState.collapseOpen
            )}
          />
          <Collapse isOpen={this.props.NavbarState.collapseOpen} navbar>
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
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarComponent;

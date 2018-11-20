import React from "react";
import { Container } from "reactstrap";
import NavbarContainer from "../components/Navbar/NavbarContainer";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavbarContainer />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

export default Layout;

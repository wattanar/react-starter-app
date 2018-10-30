import React from "react";
import { Container } from "reactstrap";
import HeaderContainer from "./components/Header/HeaderContainer";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <Container style={bodyStyle}>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

const bodyStyle = {
  marginTop: "20px"
};

export default Layout;

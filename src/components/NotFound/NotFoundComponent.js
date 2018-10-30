import React from "react";

class NotFoundComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={notFoundStyle}>404 - Page not found!</h1>
      </React.Fragment>
    );
  }
}

const notFoundStyle = {
  textAlign: "center",
  margin: "auto",
  padding: "40px"
};

export default NotFoundComponent;

import React from "react";

class HomeComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.HomeState.hello}</h1>
      </React.Fragment>
    );
  }
}

export default HomeComponent;

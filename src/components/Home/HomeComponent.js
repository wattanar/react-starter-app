import React from "react";

class HomeComponent extends React.Component {
  render() {
    let name = this.props.match.params.name;
    let hello = this.props.HomeState.hello;
    return (
      <React.Fragment>
        <h1>
          {hello}, {name !== undefined ? name : "World"}!
        </h1>
      </React.Fragment>
    );
  }
}

export default HomeComponent;

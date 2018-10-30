import React from "react";
import Layout from "../../Layout";

class HomeComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <h1>{this.props.HomeState.hello}</h1>
        </Layout>
      </React.Fragment>
    );
  }
}

export default HomeComponent;

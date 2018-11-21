import React from "react";
import MainLayout from "../../layouts/MainLayout";
import "./HomeStyle.css";

class HomeComponent extends React.Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <MainLayout>
          <div className="hello">
            <h1>{props.HomeState.hello}</h1>
            <div>
              <button onClick={props.helloBack.bind(this)}>Hello Back!</button>
            </div>
          </div>
        </MainLayout>
      </React.Fragment>
    );
  }
}

export default HomeComponent;

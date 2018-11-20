import React from "react";
import MainLayout from "../../layouts/MainLayout";
import "./NotFoundStyle.css";

class NotFoundComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainLayout>
          <div className="hello">
            <h1>Not Found!</h1>
          </div>
        </MainLayout>
      </React.Fragment>
    );
  }
}

export default NotFoundComponent;

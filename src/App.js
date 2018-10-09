import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default class App extends React.Component {
  state = {
    projectName: "React Starter App",
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <h1>{this.state.projectName}</h1>
          <Header />
          <Main />
        </div>
      </React.Fragment>
    );
  }
}

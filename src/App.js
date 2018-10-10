import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <h1>React Starter App</h1>
          <Header />
          <Main />
        </div>
      </React.Fragment>
    );
  }
}

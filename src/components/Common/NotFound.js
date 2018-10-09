import React from "react";
import "./NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className="app-notfound">
        <h1>404 - Page not found!</h1>
        <div>The page you looking for is not exists.</div>
      </div>
    );
  }
}

export default NotFound;

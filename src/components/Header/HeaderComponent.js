import React from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={HeaderStyle}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.HeaderState.projectName}
          </Link>
          <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const HeaderStyle = {
  background: "#1976d2",
  color: "#ffffff"
};

export default HeaderComponent;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul class="app-navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Simple Counter</Link>
      </li>
    </ul>
  );
};

export default Header;
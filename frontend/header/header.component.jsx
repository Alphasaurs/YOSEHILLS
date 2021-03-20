import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="brand" to="/">
      SnowFlake
    </Link>
    <div className="others">
      <Link className="other" to="/sign-in">
        <button className="log-btn">Login/Signup</button>
      </Link>
    </div>
    <div class="line"></div>
  </div>
);

export default Header;

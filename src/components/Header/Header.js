import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import GoogleAuth from "../GoogleAuth/GoogleAuth.js";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Streamy</Link>
          </li>
          <li>
            <Link to="/">Streams</Link>
          </li>
          <GoogleAuth />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Streamer</Link>
          </li>
          <li>
            <Link to="/">Streams</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

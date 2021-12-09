import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.css";

const HeaderMenu = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="">Premium</Link>
          </li>
          <li>
            <Link to="">Support</Link>
          </li>
          <li>
            <Link to="">Download</Link>
          </li>
          <li className="bar"></li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;

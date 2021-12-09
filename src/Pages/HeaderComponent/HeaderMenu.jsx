import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.css";
import { AuthContextApi } from "./../../Apis/AuthContext";

const HeaderMenu = () => {
  let AUTH = useContext(AuthContextApi);

  let AnonymousUser = () => {
    return (
      <Fragment>
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
      </Fragment>
    );
  };

  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <Link to="/">
            <figure className="profile_img">
              {AUTH === null ? (
                "loading.."
              ) : (
                <img src={AUTH.photoURL} alt={AUTH.displayName} />
              )}
              <figcaption>{AUTH.displayName}</figcaption>
            </figure>
          </Link>
        </li>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <nav>
        <ul>{AUTH ? <AuthenticatedUser /> : <AnonymousUser />}</ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;

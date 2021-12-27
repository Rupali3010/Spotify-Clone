import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContextApi } from "../../Apis/AuthContext";
import "./profile.css";

const Profile = () => {
  let { displayName, photoURL } = useContext(AuthContextApi);
  return (
    <section id="profileBlock">
      <article>
        <header>
          <figure>
            <Link to="/userhome/upload-photo">
              <span className="_editIcon">
                <i class="fas fa-pencil-alt"></i>Choose Photo
              </span>
              <img src={photoURL} alt={displayName} />
            </Link>
          </figure>
          <aside>
            <h5>PROFILE</h5>
            <h1>{displayName}</h1>
          </aside>
        </header>
        <main></main>
        <aside></aside>
      </article>
    </section>
  );
};

export default Profile;

import React from "react";
import { Link } from "react-router-dom";

const UserLeftBlock = () => {
  return (
    <div className="userLeftBlock">
      {/* <main>
        <Logo />
      </main> */}
      <ul>
        <li>
          <Link to="/userHome/music-home">
            <svg
              role="img"
              height="24"
              width="24"
              class="Svg-sc-1bi12j5-0 hDgDGI home-active-icon"
              viewBox="0 0 24 24"
            >
              <path d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z"></path>
            </svg>
            <span
              style={{ marginLeft: "8px", fontSize: "14px", color: "#B3B3B3" }}
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <a href="">
            <svg
              role="img"
              height="24"
              width="24"
              class="Svg-sc-1bi12j5-0 hDgDGI search-icon"
              viewBox="0 0 24 24"
            >
              <path d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"></path>
            </svg>
            <span
              style={{ marginLeft: "8px", fontSize: "14px", color: "#B3B3B3" }}
            >
              Search
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              role="img"
              height="24"
              width="24"
              class="Svg-sc-1bi12j5-0 hDgDGI collection-icon"
              viewBox="0 0 24 24"
            >
              <path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"></path>
            </svg>
            <span
              style={{ marginLeft: "8px", fontSize: "14px", color: "#B3B3B3" }}
            >
              Your Library
            </span>
          </a>
        </li>
      </ul>

      <div className="secondDiv">
        <Link to="/userhome/create-play-list" id="createButton">
          <svg
            role="img"
            height="12"
            width="12"
            aria-hidden="true"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 hDgDGI"
          >
            <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
            <path fill="none" d="M0 0h16v16H0z"></path>
          </svg>
        </Link>

        <span
          className="span"
          style={{ fontSize: "14px", color: "#b3b3b3", marginLeft: "15px" }}
        >
          Create Playlist
        </span>
      </div>

      <button class="Heartblock">
        <svg
          role="img"
          height="12"
          width="12"
          aria-hidden="true"
          viewBox="0 0 16 16"
          class="Svg-sc-1bi12j5-0 hDgDGI"
        >
          <path fill="none" d="M0 0h16v16H0z"></path>
          <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
        </svg>
      </button>
      <span style={{ fontSize: "14px", color: "#b3b3b3", marginLeft: "15px" }}>
        Liked Songs
      </span>

      <div>
        <p id="line"></p>
        <p style={{ color: "#fff", margin: "11px" }}>My PlayList #1</p>
        <div className="parentp">
          <p
            style={{ color: "#fff", margin: "11px", top: "25px" }}
            className="childp"
          >
            <i
              className="far fa-arrow-circle-down"
              style={{ padding: "2px" }}
            ></i>
            Install App
          </p>
        </div>
      </div>
    </div>

    // second part
  );
};

export default UserLeftBlock;

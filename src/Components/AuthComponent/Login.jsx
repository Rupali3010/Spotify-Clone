import React from "react";
import Logo from "../../Pages/HeaderComponent/Logo";
import "./auth.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <p className="line"></p>
        <div className="authContent1">
          <h4>To continue, log in to Spotify.</h4>
          <button id="one">
            <i class="fab fa-facebook" style={{ padding: "5px" }}></i>Continue
            with facebook
          </button>
          <button id="two">
            <i class="fab fa-apple" style={{ padding: "5px" }}></i>
            Continue with apple
          </button>
          <button id="three">
            <i class="fab fa-google" style={{ padding: "5px" }}></i>Continue
            with Google
          </button>
          <button id="four">Continue with phone number </button>
          <p className="orBlock1">
            <strong>or</strong>
          </p>
        </div>
        <div className="form-content">
          <LoginForm />
        </div>
      </article>
    </section>
  );
};

export default Login;

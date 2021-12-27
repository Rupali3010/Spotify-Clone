import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../Pages/HeaderComponent/Logo";
import "./auth.css";
import LoginForm from "./LoginForm";
import { toast } from "react-toastify";
import SocialLogin, {
  GoogleProvider,
  FaceBookProvider,
} from "./LoginWithSocialMedia";

const Login = () => {
  let history = useHistory();
  let handleClick = async provider => {
    try {
      await SocialLogin(provider);
      toast.success("Successfully logged in");
      history.push("/userhome/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <p className="line"></p>
        <div className="authContent1">
          <h4>To continue, log in to Spotify.</h4>
          <button
            id="one"
            onClick={() => {
              handleClick(FaceBookProvider);
            }}
          >
            <i class="fab fa-facebook" style={{ padding: "5px" }}></i>Continue
            with facebook
          </button>
          <button id="two">
            <i class="fab fa-apple" style={{ padding: "5px" }}></i>
            Continue with apple
          </button>
          <button id="three" onClick={() => handleClick(GoogleProvider)}>
            <i class="fab fa-google" style={{ padding: "5px" }}></i>Continue
            with Google
          </button>
          <Link id="four" to="/phone-auth">
            Continue with phone number
          </Link>
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

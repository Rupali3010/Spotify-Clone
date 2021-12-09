import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";

const SignupForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    email1: "",
    password: "",
    profile_name: "",
    month: "",
    dd: "",
    yyyy: "",
    gender: "",
    loading: false,
  });
  let {
    email,
    email1,
    password,
    profile_name,
    month,
    dd,
    yyyy,
    gender,
    loading,
  } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log(state);
      setState({ loading: true });
      if (email === email1) {
        let USER_DATA = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        let confirmMessage = `A verification message has been sent to ${email} please verify and login`;
        USER_DATA.user.sendEmailVerification();
        toast.info(confirmMessage);
        toast.success("successfully user registered");
        history.push("/login");
      } else {
        toast.error("confirm email is not matching");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <div>
      <h2>Sign up with your email Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">What's your email?</label>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email1">Confirm your email </label>
          <input
            type="email"
            name="email1"
            placeholder="enter your email"
            className="form-control"
            id="email1"
            value={email1}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            name="password"
            className="password"
            id="password"
            placeholder="Create a password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="profile_name">What should we call you?</label>
          <input
            type="text"
            name="profile_name"
            placeholder="Enter a profile name"
            className="text"
            id="profile_name"
            value={profile_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">What's your date of birth?</label>
          <div className="dateBlock">
            <input
              type="text"
              name="yyyy"
              id="yy"
              placeholder="YYYY"
              required
              value={yyyy}
              onChange={handleChange}
            />
            <input
              type="text"
              name="month"
              id="month"
              placeholder="Month"
              required
              value={month}
              onChange={handleChange}
            />
            <input
              type="text"
              name="dd"
              id="dd"
              placeholder="DD"
              required
              value={dd}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="gender">What's your gender?</label>
          <main className="genderBlock" value={gender}>
            <span>
              <input
                type="radio"
                name="gender"
                value="male"
                id="gender"
                onChange={handleChange}
              />
              Male
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                value="female"
                id="gender"
                onChange={handleChange}
              />
              Female
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                value="non-binary"
                id="gender"
              />
              Non-binary
            </span>
          </main>
        </div>

        <div className="form-group">
          <input type="checkbox" name="text" id="text" />
          <span className="checkBoxContent">
            I would prefer not to receive marketing messages from Spotify
          </span>
        </div>

        <div className="form-group">
          <p className="copyWriteText">
            <p>
              By clicking on sign-up, you agree to Spotify's Terms and
              Conditions of Use.
            </p>
            <br />
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see Spotify's Privacy Policy.
          </p>
        </div>
        <div className="form-group btn-group">
          <button>{loading === true ? "loading" : "Sign Up"}</button>
        </div>
        <div className="form-group">
          <p className="accountBlock">
            Have an account?
            <Link to="/login">Log in. </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignupForm);

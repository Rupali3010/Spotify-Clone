import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
// import OtpVerify from "./OtpVerify";

const PhoneAuth = () => {
  let history = useHistory();
  let [state, setState] = useState({ loading: false, phone: "" });
  let { loading, phone } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      let confirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaContainer);
      let code = window.prompt("enter otp");
      confirmationMessage.confirm(code);
      toast.success("Successfully logged in");
      history.push("/otp-verify");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false, email: "" });
  };
  return (
    <section id="authBlock">
      <article>
        <div className="authContent">
          <h1>Enter Phone Number</h1>
        </div>
        <div className="formContent">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password_reset">Enter Your Phone number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
                <div id="recaptcha-container"></div>
              </div>
              <div className="form-group btn-group">
                <button>{loading ? "loading" : "next"}</button>
                <p>If you still need help, contact Spotify Support.</p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;

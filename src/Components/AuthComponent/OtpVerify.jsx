import React, { useState, useHistory } from "react";
import Logo from "../../Pages/HeaderComponent/Logo";
import "./auth.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";

const OtpVerify = () => {
  let history = useHistory();
  let [state, setState] = useState({ loading: false, otp: "" });
  let { loading, otp } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    try {
      setState({ loading: true });
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      let confirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(otp, recaptchaContainer);
      let code = window.prompt("enter otp");
      confirmationMessage.confirm(code);
      history.push("/userHome/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <div>
          <Logo />
        </div>
        <div className="formContent">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password_reset">Enter Your Code</label>
                <input
                  type="text"
                  placeholder="6-digit code"
                  name="otp"
                  value={otp}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group btn-group">
                <button>NEXT</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default OtpVerify;

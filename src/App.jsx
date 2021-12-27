import React, { useContext, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Pages/HeaderComponent/Navbar";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { AuthContextApi } from "./Apis/AuthContext";
import UserHome from "./UsersComponents/UserHome";
import MyFirstPoral from "./Pages/MyFirstPoral";
import Spinner from "./Pages/Spinner/Spinner";
import ProtectedRoute from "./Helper/ProtectedRoute";
import PublicRoute from "./Helper/PublicRoute";
import PasswordReset from "./Components/AuthComponent/PasswordReset";
import PhoneAuth from "./Components/AuthComponent/PhoneAuth";
import CreatePlayList from "./Components/AudioComponent/CreatePlayList";
import OtpVerify from "./Components/AuthComponent/OtpVerify";

const App = () => {
  let AUTH = useContext(AuthContextApi);
  return (
    <section id="SpotifyMainBlock">
      <article>
        <Router>
          <header>
            <Navbar />
          </header>
          {/* <header>{!USER ? <Navbar /> : "loading"}</header> */}
          <ToastContainer />
          {/* <MyFirstPoral /> */}
          <main>
            {/* dynamic routing starts here */}
            <Switch>
              <PublicRoute path="/" exact>
                <Home />
              </PublicRoute>
              <PublicRoute path="/login" exact>
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Signup />
              </PublicRoute>
              <PublicRoute path="/password-reset">
                <PasswordReset />
              </PublicRoute>

              <PublicRoute path="/phone-auth">
                <PhoneAuth />
              </PublicRoute>

              {/* React Router 4 version Syntax but it is supporting 5 also*/}
              <ProtectedRoute path="/userHome" component={UserHome} />
              {/* <ProtectedRoute
                path="/create-play-list"
                component={CreatePlayList}
              /> */}

              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
            {/* Dynamic routing ends here */}
          </main>
        </Router>
      </article>
    </section>
  );
};

export default App;

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

const App = () => {
  let USER = useContext(AuthContextApi);
  return (
    <section id="SpotifyMainBlock">
      <article>
        <Router>
          <header>
            <Navbar />
          </header>
          {/* <header>{!USER ? <Navbar /> : "loading"}</header> */}
          <ToastContainer />
          <main>
            {/* dynamic routing starts here */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <Signup />
              </Route>

              {/* Authenticated Block Starts */}
              <Route path="/userHome">
                <UserHome />
              </Route>
              {/* Authenticated Block Ends */}

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

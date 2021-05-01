import Signup from "./auth/Signup";
import Profile from "./auth/Profile";
import Login from "./auth/Login";
import UpdateProfile from "./auth/UpdateProfile";
import ForgotPassword from "./auth/ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./drive/Dashboard";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Switch>
            {/* auth */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            {/* profile */}
            <PrivateRoute path="/user" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            {/* drive */}
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute
              exact
              path="/folder/:folderId"
              component={Dashboard}
            />
          </Switch>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;

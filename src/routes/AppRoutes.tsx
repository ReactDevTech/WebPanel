// src/router.js
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.tsx";
import Home from "../pages/Home/Home.tsx";
import Login from "../pages/Login/Login.tsx";
import Signup from "../pages/Signup/Signup.tsx";
import store from "../redux/store.tsx";

const AllRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
  ]);

  return <>{routes}</>;
};

const AppRoutes = () => (
  <Provider store={store}>
    <Router>
      <AllRoutes />
    </Router>
  </Provider>
);

export default AppRoutes;

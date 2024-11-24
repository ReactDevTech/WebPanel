// src/router.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Login from "../pages/Login/Login.tsx";
import Home from "../pages/Home/Home.tsx";
import Signup from "../pages/Signup/Signup.tsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.tsx";

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
  <Router>
    <AllRoutes />
  </Router>
);

export default AppRoutes;

import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage/landingPage";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import ForgotPassword from "./Authentication/ForgotPassword";
import NoPage from "./NoPage";
import PrivateRoute from "./Important/PrivateRoute";

function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;

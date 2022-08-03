import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Login,
  SignUpAsDistrict,
  SignUpAsEducator,
  SignUpAsInstructor,
} from "../../views";
import { AuthLayout } from "./AuthLayout";

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signupAsInstructor" element={<SignUpAsInstructor />} />
          <Route path="signupAsEducator" element={<SignUpAsEducator />} />
          <Route path="signupAsDistrict" element={<SignUpAsDistrict />} />
          <Route path="" element={<Navigate to="login" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

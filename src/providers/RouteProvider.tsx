import React from "react";

import { LoginLayout } from "../pages/login/container/LoginLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { SigninPage } from "../pages/login/pages";
import { DashboardLayout } from "../pages/dashboard/DashboardLayout";

export const RouteProvider: React.FC = () => {
  console.log(window.location.pathname);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              authenticatedElement={<Navigate to="/dashboard" />}
              unauthenticatedElement={<Navigate to="/signin" />}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <LoginLayout>
              <SigninPage />
            </LoginLayout>
          }
        />
        <Route path="/dashboard" element={<DashboardLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

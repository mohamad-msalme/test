import React from "react";

import LoginPage from "../pages/login/container/LogInPage";
import EditDialog from "../pages/dashboard/components/EditDialog";
import DeleteDialog from "../pages/dashboard/components/DeleteDialog";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * The RouteProvider component sets up the routing for different paths in a React application,
 * rendering different components based on the current URL.
 * @returns The RouteProvider component is returning a JSX element that includes a BrowserRouter
 * component from the react-router-dom library. Inside the BrowserRouter component, there is a Routes
 * component that contains multiple Route components. The Route components define different paths and
 * their corresponding components to be rendered when those paths are matched.
 */
const RouteProvider: React.FC<{}> = () => {
  console.log(window.location.pathname);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<></>} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/posts/managment"
          element={<ProtectedRoute element={<DashboardLayout />} />}
        >
          <Route
            index
            path="edit"
            element={<ProtectedRoute element={<EditDialog edit />} />}
          />
          <Route
            index
            path="delete"
            element={<ProtectedRoute element={<DeleteDialog />} />}
          />
          <Route
            index
            path="view"
            element={<ProtectedRoute element={<EditDialog />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RouteProvider as default };

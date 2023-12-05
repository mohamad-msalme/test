import React from "react";

import { SigninPage } from "./pages/login/pages";
import { LoginLayout } from "./pages/login/container/LoginLayout";
import { ProtectedRoute } from "./providers";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { DashboardLayout, NotFoundPage, PostPage } from "./pages";
import {
  DeleteDialog,
  EditDialog,
} from "./pages/dashboard/pages/posts/components";

/* The `createBrowserRouter` function is creating a router configuration for the application. It takes
an array of route objects as an argument. Each route object represents a specific route in the
application. */
export const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute
        unauthenticatedElement={<Navigate to="login" />}
        authenticatedElement={<Navigate to="/posts/management" />}
      />
    ),
    errorElement: <NotFoundPage />,
  },
  {
    element: (
      <ProtectedRoute
        unauthenticatedElement={<LoginLayout />}
        authenticatedElement={<Navigate to="/posts/management" />}
      />
    ),
    children: [
      {
        path: "login",
        element: <SigninPage />,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute
        authenticatedElement={<DashboardLayout />}
        unauthenticatedElement={<Navigate to="login" />}
      />
    ),
    children: [
      {
        path: "posts/management",
        element: <PostPage />,
        children: [
          {
            path: "edit",
            element: <EditDialog edit />,
          },
          {
            path: "view",
            element: <EditDialog />,
          },
          {
            path: "delete",
            element: <DeleteDialog />,
          },
        ],
      },
    ],
  },
]);

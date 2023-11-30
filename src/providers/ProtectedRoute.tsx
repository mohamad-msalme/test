import React from "react";
import { Navigate } from "react-router";
/**
 * The `useLocalStorage` function is a custom React hook that allows you to store and retrieve values
 * in the browser's local storage.
 * @param {string} key - The key parameter is a string that represents the key under which the value
 * will be stored in the localStorage.
 * @param {T} [initialValue] - The `initialValue` parameter is an optional parameter that specifies the
 * initial value for the stored value in the local storage. If the `key` already exists in the local
 * storage, the stored value will be used as the initial value. If the `key` does not exist or if
 * `initialValue
 * @returns The `useLocalStorage` function returns an object with three properties: `value`,
 * `setValue`, and `removeValue`.
 */
import useAuth from "../hooks/useAuth";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/"
    ) {
      // Redirect to /post/managment for authenticated users accessing /login or /
      return <Navigate to="/posts/managment" replace />;
    }

    // Render the protected content for authenticated users
    return element;
  }

  // Redirect to /login for unauthenticated users
  return <Navigate to="/login" replace />;
};

export { ProtectedRoute as default };

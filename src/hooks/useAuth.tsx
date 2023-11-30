import React from "react";
import AuthContext from "../context/AuthContext";

/**
 * The useAuth function is a custom hook that returns the authentication context from the nearest
 * AuthProvider.
 * @returns The `useAuth` function returns the `context` object obtained from
 * `React.useContext(AuthContext)`.
 */
const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth as default };

// ProtectedRoute.tsx
import React from "react";
import useAuth from "../hooks/useAuth";

interface ProtectedRouteProps {
  authenticatedElement: React.ReactNode;
  unauthenticatedElement: React.ReactNode;
}

/**
 * The `ProtectedRoute` component returns either the `authenticatedElement` or the
 * `unauthenticatedElement` based on the `isAuthenticated` value from the `useAuth` hook.
 * @param {ProtectedRouteProps}  - - `authenticatedElement`: The element to render if the user is
 * authenticated.
 * @returns either the `authenticatedElement` or the `unauthenticatedElement` based on the value of
 * `isAuthenticated`.
 */
export const ProtectedRoute = ({
  authenticatedElement,
  unauthenticatedElement,
}: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? authenticatedElement : unauthenticatedElement;
};

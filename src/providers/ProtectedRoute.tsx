// ProtectedRoute.tsx
import React from "react";
import { PathRouteProps } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface ProtectedRouteProps extends PathRouteProps {
  authenticatedElement: React.ReactNode;
  unauthenticatedElement: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  authenticatedElement,
  unauthenticatedElement,
  ...rest
}) => {
  console.log(rest);
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? authenticatedElement : unauthenticatedElement;
};

export default ProtectedRoute;

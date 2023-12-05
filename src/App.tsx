import React from "react";
import { Routes } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { AuthProvider, MuiProvider, ReactQueryProvider } from "./providers";

/**
 * The App component is a React functional component that provides context providers for React Query,
 * authentication, and Material-UI, and renders a router component.
 * @returns The App component is returning a JSX element.
 */
export const App: React.FC = () => {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <MuiProvider>
          <RouterProvider router={Routes} />
        </MuiProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
};

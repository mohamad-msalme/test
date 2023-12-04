import React from "react";
import {
  AuthProvider,
  MuiProvider,
  ReactQueryProvider,
  RouteProvider,
} from "./providers";

const App: React.FC = () => {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <MuiProvider>
          <RouteProvider />
        </MuiProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
};

export { App as default };

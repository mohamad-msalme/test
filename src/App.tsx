import React from "react";
import MuiProvider from "./providers/MuiProvider";
import AuthProvider from "./providers/AuthProvider";
import RouteProvider from "./providers/RouteProvider";
import ReactQueryProvider from "./providers/ReactQueryProvider";

const App: React.FC<{}> = () => {
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

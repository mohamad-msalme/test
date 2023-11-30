import React from "react";
import AuthContext from "../context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

/* The code is defining a functional component called `AuthProvider` that serves as a provider for an
authentication context in a React application. */
const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { value: isAuthenticated, setValue } = useLocalStorage(
    "isAuthenticated",
    false,
  );

  const login = React.useCallback(() => setValue(true), []);

  const logout = React.useCallback(() => setValue(false), []);

  const memoValue = React.useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [login, logout, isAuthenticated],
  );

  return (
    <AuthContext.Provider value={memoValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider as default };

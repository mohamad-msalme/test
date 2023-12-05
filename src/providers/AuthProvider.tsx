import React from "react";
import AuthContext from "../context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

/**
 * The AuthProvider component is a TypeScript React component that provides authentication
 * functionality to its children components.
 * @param  - - `AuthProvider`: The name of the component being exported.
 * @returns The AuthProvider component is returning the AuthContext.Provider component with the value
 * prop set to the memoValue object and the children prop passed as its children.
 */
export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
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

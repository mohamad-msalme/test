import React from "react";
import { useLocation } from "react-router-dom";
interface NavigationItem {
  parent: string;
  pathName: string;
  child?: string;
}

/**
 * The `useNavigationItem` hook is a custom hook in TypeScript React that returns the current
 * navigation item based on the current location pathname.
 * @returns The function `useNavigationItem` returns a `NavigationItem` object.
 */
export const useNavigationItem = (): NavigationItem => {
  const location = useLocation();
  const [navigationItem, setNavigationItem] = React.useState<NavigationItem>({
    parent: "",
    child: "",
    pathName: location.pathname,
  });
  React.useEffect(() => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment !== "");
    setNavigationItem({
      ...navigationItem,
      parent: pathSegments[0] || "",
      child: pathSegments[1] || "",
    });
  }, [location.pathname]);

  return navigationItem;
};

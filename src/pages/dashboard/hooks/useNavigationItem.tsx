import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface NavigationItem {
  parent: string;
  pathName: string;
  child?: string;
}

const useNavigationItem = (): NavigationItem => {
  const location = useLocation();
  const [navigationItem, setNavigationItem] = useState<NavigationItem>({
    parent: "",
    child: "",
    pathName: location.pathname,
  });
  useEffect(() => {
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

export default useNavigationItem;

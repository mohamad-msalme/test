import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
    },
  },
});

/**
 * The ReactQueryProvider component is a wrapper that provides the React Query client to its children
 * components.
 * @param  - The ReactQueryProvider component is a functional component that takes in a single prop
 * called children. The children prop represents the child components that will be rendered inside the
 * ReactQueryProvider component.
 * @returns The ReactQueryProvider component is returning the QueryClientProvider component with the
 * queryClient prop set to the value of queryClient, and the children prop passed as its children.
 */
export const ReactQueryProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

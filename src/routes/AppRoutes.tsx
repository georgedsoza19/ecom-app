import React, { useMemo } from "react";
import { Route, Routes } from "react-router";

export interface RouteObject {
  path: string;
  element: React.ReactNode;
}

const AppRoutes: React.FC = () => {
  const mRoutes = useMemo(() => {
    const appRoutes: RouteObject[] = [
      {
        path: "/app/products",
        element: <h1>Products Page</h1>,
      },
      {
        path: "/app/category",
        element: <h1>category page</h1>,
      },
    ];
    return appRoutes;
  }, []);

  return (
    <Routes>
      {mRoutes.map((routeProps) => (
        <Route key={routeProps.path} {...routeProps} />
      ))}
      <Route path={"*"} element={<h3>Not Found Page</h3>} />
    </Routes>
  );
};

export default AppRoutes;

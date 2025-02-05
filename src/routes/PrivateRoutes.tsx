import React from "react";
import { Navigate, useLocation } from "react-router";
import { isAuthenticated } from "../utils/commanFunctions";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoutes: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Component />;
};

export default PrivateRoutes;

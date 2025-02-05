import React from "react";
import { Navigate, useLocation } from "react-router";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoutes: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const location = useLocation();
  const login = false;
  if (!login) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Component />;
};

export default PrivateRoutes;

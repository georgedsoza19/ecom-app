import { BrowserRouter, Routes, Route } from "react-router";
import PrivateRoutes from "./PrivateRoutes";
import AppRoutes from "./AppRoutes";
import GoogleSignIn from "../pages/GoogleSignIn";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<GoogleSignIn />} />
        <Route path="*" element={<PrivateRoutes component={AppRoutes} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import { BrowserRouter, Route, Routes } from "react-router";
import AppRoutes from "./AppRoutes";
import DashboardRoutes from "./DashboardRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

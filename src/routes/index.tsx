import { BrowserRouter, Route, Routes } from "react-router";
import DashboardRoutes from "./dashboard";
import AppRoutes from "./app";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;

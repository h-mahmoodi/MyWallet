import DashboardLayout from "@src/components/dashboard/layout";
import ProtectedRoutes from "@src/components/dashboard/protected-routes";
import { Route, Routes } from "react-router";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<div>Dashboard Home</div>} />
      </Route>
    </Routes>
  );
};
export default DashboardRoutes;

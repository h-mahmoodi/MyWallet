import { DashboardLayout, ProtectedRoutes } from "@src/components/dashboard";
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

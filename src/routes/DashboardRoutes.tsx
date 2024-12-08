import { DashboardLayout, ProtectedRoutes } from "@src/components/dashboard";
import { DashboardHomePage } from "@src/pages/dashboard";
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
        <Route index element={<DashboardHomePage />} />
      </Route>
    </Routes>
  );
};
export default DashboardRoutes;

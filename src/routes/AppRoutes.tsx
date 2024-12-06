import { AppLayout } from "@src/components/app";
import AppHomePage from "@src/pages/app/home-page";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<AppHomePage />} />
        <Route path="login" element={<div>Login page</div>} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;

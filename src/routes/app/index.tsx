import AppLayout from "@src/components/app/layout";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<div>App Home</div>} />
        <Route path="login" element={<div>Login page</div>} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;

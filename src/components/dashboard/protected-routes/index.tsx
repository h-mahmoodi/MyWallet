import { FC, ReactNode } from "react";
import { Navigate } from "react-router";

type ProtectedRoutesProps = {
  children: ReactNode;
};

const isAuth = false;

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  if (!isAuth) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};
export default ProtectedRoutes;

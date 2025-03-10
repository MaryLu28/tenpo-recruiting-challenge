import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./auth-provider";
import { FullLoader } from "../../components/loaders";

const AuthRequired = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  if (!auth.token && !auth.user) {
    return <Navigate to="/login" replace />;
  }

  if (auth.token && !auth.user) {
    return <FullLoader />;
  }

  return <>{children}</>;
};

export default AuthRequired;

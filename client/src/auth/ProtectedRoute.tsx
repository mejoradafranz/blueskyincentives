import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import type { UserRole } from "../types";

const HOME_BY_ROLE: Record<UserRole, string> = {
  client_admin: "/admin/dashboard",
  employee: "/portal/dashboard",
  superadmin: "/admin/dashboard",
};

export function ProtectedRoute({ allowedRoles }: { allowedRoles: UserRole[] }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={HOME_BY_ROLE[user.role]} replace />;
  }

  return <Outlet />;
}

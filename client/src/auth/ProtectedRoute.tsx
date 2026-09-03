import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import type { UserRole } from "../types";

export function ProtectedRoute({ allowedRoles }: { allowedRoles: UserRole[] }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

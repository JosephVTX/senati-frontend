import { DashboardLayout } from "@/layouts/dashboard-layout";
import Login from "@/pages/auth/login";
import { useAuthStore } from "@/store/auth-store";
import {
  BrowserRouter,
  Route,
  Routes as R,
  Navigate,
  Outlet,
} from "react-router";

const Routes = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAuthStore();

  return (
    <BrowserRouter>
      <R>
        {/* Redirigir a /dashboard si ya tiene token al intentar acceder a /login */}
        <Route
          path="/login"
          element={auth ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Ruta protegida */}
        <Route
          element={
            auth ? (
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          {children}
        </Route>
      </R>
    </BrowserRouter>
  );
};

export { Routes, Route };

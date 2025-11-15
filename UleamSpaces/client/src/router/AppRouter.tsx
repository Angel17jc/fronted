import { ReactNode, useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import EspaciosListPage from '@/pages/espacios/EspaciosListPage';
import ReservasListPage from '@/pages/reservas/ReservasListPage';
import ReservaDetailPage from '@/pages/reservas/ReservaDetailPage';
import NuevaReservaPage from '@/pages/reservas/NuevaReservaPage';
import ReportesPage from '@/pages/reportes/ReportesPage';
import PerfilUsuarioPage from '@/pages/perfil/PerfilUsuarioPage';
import LoginPage from '@/pages/auth/LoginPage';
import NotFound from '@/pages/not-found';
import NotificacionesPage from '@/pages/notificaciones/NotificacionesPage';
import CalendarioPage from '@/pages/calendario/CalendarioPage';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import AdminPlaceholderPage from '@/pages/admin/AdminPlaceholderPage';
import { UserLayout } from '@/components/layouts/UserLayout';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import LandingPage from '@/pages/public/LandingPage';

function Guard({ children, requireAdmin }: { children: ReactNode; requireAdmin?: boolean }) {
  const { isAuthenticated, isLoading, isAdmin } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      navigate('/');
      return;
    }
    if (requireAdmin && !isAdmin) {
      navigate('/app/inicio');
    }
  }, [isAuthenticated, isLoading, navigate, isAdmin, requireAdmin]);

  if (isLoading) {
    return <div className=\"flex h-screen items-center justify-center\">Cargando sesión...</div>;
  }

  if (!isAuthenticated) return null;
  if (requireAdmin && !isAdmin) return null;

  return <>{children}</>;
}

function UserRoutes() {
  return (
    <Guard>
      <UserLayout>
        <Switch>
          <Route path="/app/inicio" component={DashboardPage} />
          <Route path="/app/espacios" component={EspaciosListPage} />
          <Route path="/app/reservas" component={ReservasListPage} />
          <Route path="/app/reservas/nueva" component={NuevaReservaPage} />
          <Route path="/app/reservas/:id" component={ReservaDetailPage as any} />
          <Route path="/app/reportes" component={ReportesPage} />
          <Route path="/app/perfil" component={PerfilUsuarioPage} />
          <Route path="/app/notificaciones" component={NotificacionesPage} />
          <Route path="/app/calendario" component={CalendarioPage} />
          <Route component={NotFound} />
        </Switch>
      </UserLayout>
    </Guard>
  );
}

function AdminRoutes() {
  return (
    <Guard requireAdmin>
      <AdminLayout>
        <Switch>
          <Route path="/admin/dashboard" component={AdminDashboardPage} />
          <Route path="/admin/:section*" component={AdminPlaceholderPage as any} />
          <Route component={NotFound} />
        </Switch>
      </AdminLayout>
    </Guard>
  );
}

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/app/:rest*" component={UserRoutes as any} />
      <Route path="/admin/:rest*" component={AdminRoutes as any} />
      <Route component={NotFound} />
    </Switch>
  );
}

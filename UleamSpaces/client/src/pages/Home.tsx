import { Button } from '@/components/ui/button';
import { SpaceCard } from '@/components/SpaceCard';
import { ReservationCard } from '@/components/ReservationCard';
import { Calendar, Building2, Clock, TrendingUp, Target, BookOpen } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  // Espacios destacados para mostrar en la página principal
  const featuredSpaces = [
    {
      id: '1',
      nombre: 'Auditorio Principal',
      codigo: 'AUD-001',
      categoria: 'Auditorio',
      capacidad: 300,
      ubicacion: 'Edificio A',
      accentColors: { from: '#E63946', to: '#C1121F' },
      bannerIcon: <Building2 className="text-white" size={20} />,
    },
    {
      id: '2',
      nombre: 'Cancha de Fútbol',
      codigo: 'DEP-001',
      categoria: 'Deportivo',
      capacidad: 50,
      ubicacion: 'Área Deportiva',
      accentColors: { from: '#0EA5E9', to: '#0284C7' },
      bannerIcon: <Target className="text-white" size={20} />,
    },
    {
      id: '3',
      nombre: 'Laboratorio de Cómputo 1',
      codigo: 'LAB-001',
      categoria: 'Laboratorio',
      capacidad: 30,
      ubicacion: 'Edificio B',
      accentColors: { from: '#10B981', to: '#0F766E' },
      bannerIcon: <BookOpen className="text-white" size={20} />,
    },
  ];

  // Próximas reservas del usuario
  const upcomingReservations = [
    {
      id: '1',
      espacio: 'Sala de Conferencias',
      fecha: '2025-11-15',
      horaInicio: '14:00',
      horaFin: '16:00',
      tipoEvento: 'Reunión Académica',
      estado: 'aprobada' as const,
    },
    {
      id: '2',
      espacio: 'Auditorio Principal',
      fecha: '2025-11-18',
      horaInicio: '10:00',
      horaFin: '12:00',
      tipoEvento: 'Conferencia',
      estado: 'pendiente' as const,
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Bienvenido, {user?.nombre}
        </h1>
        <p className="text-muted-foreground mt-2">
          Sistema de Reserva de Espacios ULEAM
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Mis Reservas</p>
              <p className="text-3xl font-bold text-foreground mt-2">12</p>
            </div>
            <Calendar className="text-primary" size={32} />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-6 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Espacios Disponibles</p>
              <p className="text-3xl font-bold text-foreground mt-2">45</p>
            </div>
            <Building2 className="text-blue-600" size={32} />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-6 border border-green-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Próxima Reserva</p>
              <p className="text-3xl font-bold text-foreground mt-2">Hoy</p>
            </div>
            <Clock className="text-green-600" size={32} />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg p-6 border border-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tasa Aprobación</p>
              <p className="text-3xl font-bold text-foreground mt-2">95%</p>
            </div>
            <TrendingUp className="text-purple-600" size={32} />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">Espacios Destacados</h2>
          <Button variant="outline" data-testid="button-view-all-spaces">
            Ver Todos
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSpaces.map((space) => (
            <SpaceCard key={space.id} {...space} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">Mis Próximas Reservas</h2>
          <Button data-testid="button-new-reservation">
            Nueva Reserva
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingReservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              {...reservation}
              onCancel={() => console.log(`Cancelar ${reservation.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

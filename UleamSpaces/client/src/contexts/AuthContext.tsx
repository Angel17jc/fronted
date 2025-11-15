import { createContext, useContext, useState, ReactNode } from 'react';

// Tipos de roles de usuario
export type UserRole = 'usuario' | 'admin';

// Interfaz del usuario
export interface User {
  id: string;
  nombre: string;
  email: string;
  rol: UserRole;
  avatar?: string;
  estado: 'activo' | 'inactivo';
}

// Interfaz del contexto de autenticación
interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  login: (user: User) => void;
  logout: () => void;
  switchRole: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Estado del usuario actual (mock para desarrollo)
  const [user, setUser] = useState<User | null>({
    id: '1',
    nombre: 'Juan Pérez',
    email: 'juan.perez@uleam.edu.ec',
    rol: 'admin',
    avatar: 'JP',
    estado: 'activo',
  });

  // Verificar si el usuario es administrador
  const isAdmin = user?.rol === 'admin';

  // Función para iniciar sesión
  const login = (newUser: User) => {
    setUser(newUser);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  // Función para cambiar entre roles (solo para desarrollo)
  const switchRole = () => {
    if (user) {
      setUser({
        ...user,
        rol: user.rol === 'admin' ? 'usuario' : 'admin',
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

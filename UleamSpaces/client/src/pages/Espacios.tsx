import { useState } from 'react';
import { SpaceCard } from '@/components/SpaceCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, Building2, Target, BookOpen, Users } from 'lucide-react';

export default function Espacios() {
  // Estado para búsqueda y filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Lista completa de espacios disponibles
  const spaces = [
    {
      id: '1',
      nombre: 'Auditorio Principal',
      codigo: 'AUD-001',
      categoria: 'Auditorio',
      capacidad: 300,
      ubicacion: 'Edificio A',
      disponible: true,
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
      disponible: true,
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
      disponible: true,
      accentColors: { from: '#10B981', to: '#0F766E' },
      bannerIcon: <Users className="text-white" size={20} />,
    },
    {
      id: '4',
      nombre: 'Sala de Conferencias A',
      codigo: 'SAL-001',
      categoria: 'Sala',
      capacidad: 40,
      ubicacion: 'Edificio C',
      disponible: false,
      accentColors: { from: '#6366F1', to: '#4338CA' },
      bannerIcon: <Building2 className="text-white" size={20} />,
    },
    {
      id: '5',
      nombre: 'Sala de Estudio',
      codigo: 'BIB-001',
      categoria: 'Biblioteca',
      capacidad: 20,
      ubicacion: 'Biblioteca Central',
      disponible: true,
      accentColors: { from: '#F97316', to: '#EA580C' },
      bannerIcon: <BookOpen className="text-white" size={20} />,
    },
    {
      id: '6',
      nombre: 'Laboratorio de Física',
      codigo: 'LAB-002',
      categoria: 'Laboratorio',
      capacidad: 25,
      ubicacion: 'Edificio B',
      disponible: true,
      accentColors: { from: '#0EA5E9', to: '#0284C7' },
      bannerIcon: <Users className="text-white" size={20} />,
    },
  ];

  // Filtrar espacios según búsqueda y categoría
  const filteredSpaces = spaces.filter((space) => {
    const matchesSearch = space.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         space.codigo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || space.categoria === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Explorar Espacios</h1>
        <p className="text-muted-foreground mt-2">
          Encuentra y reserva espacios disponibles en ULEAM
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Buscar por nombre o código..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            data-testid="input-search"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full sm:w-[200px]" data-testid="select-category">
            <Filter size={16} className="mr-2" />
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            <SelectItem value="Auditorio">Auditorio</SelectItem>
            <SelectItem value="Laboratorio">Laboratorio</SelectItem>
            <SelectItem value="Sala">Sala</SelectItem>
            <SelectItem value="Deportivo">Deportivo</SelectItem>
            <SelectItem value="Biblioteca">Biblioteca</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" data-testid="button-filter">
          <Filter size={16} className="mr-2" />
          Más Filtros
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredSpaces.length} de {spaces.length} espacios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpaces.map((space) => (
          <SpaceCard key={space.id} {...space} />
        ))}
      </div>
    </div>
  );
}

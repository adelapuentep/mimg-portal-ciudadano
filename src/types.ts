export interface Tramite {
  id: string;
  name: string;
  category: string;
  description: string;
  requirements?: string[];
  durationDays?: number;
  cost?: string;
}

export interface TramiteReciente {
  id: string;
  name: string;
  date: string;
  code: string;
  status: 'Pendiente' | 'Finalizado' | 'En Proceso' | 'Observado';
  category: string;
}

export interface MetricCard {
  title: string;
  value: string | number;
  subValue?: string | number;
  subText: string;
  color: string;
}

export interface AngularFile {
  name: string;
  path: string;
  language: string;
  content: string;
}

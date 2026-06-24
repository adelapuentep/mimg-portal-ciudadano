import { Tramite, TramiteReciente, MetricCard, AngularFile } from './types';

export const CATEGORIES = [
  { id: 'financiero', name: 'Financiero', icon: 'DollarSign', count: 14, color: 'text-amber-500 bg-amber-50' },
  { id: 'certificados', name: 'Certificados', icon: 'FileText', count: 7, color: 'text-sky-500 bg-sky-50' },
  { id: 'construcciones', name: 'Catastros y Construcciones', icon: 'Home', count: 19, color: 'text-indigo-500 bg-indigo-50' },
  { id: 'negocio', name: 'Negocio al día', icon: 'Briefcase', count: 9, color: 'text-emerald-500 bg-emerald-50' },
  { id: 'via-publica', name: 'Vía Pública', icon: 'MapPin', count: 12, color: 'text-purple-500 bg-purple-50' },
  { id: 'otros', name: 'Otros Trámites', icon: 'Grid', count: 11, color: 'text-rose-500 bg-rose-50' }
];

export const TRAMITES_DATA: Tramite[] = [
  // Financiero
  {
    id: 'f1',
    name: 'Consulta unificada Impuesto Predial y CEM (Contribución Especial de Mejoras)',
    category: 'financiero',
    description: 'Consulte su deuda consolidada del impuesto predial urbano o rústico, así como las tasas por contribución especial de mejoras vigentes.',
    requirements: ['Cédula de identidad', 'Código catastral del predio o nombres completos del propietario'],
    durationDays: 1,
    cost: 'Gratuito'
  },
  {
    id: 'f2',
    name: 'Alcabalas y Plusvalía',
    category: 'financiero',
    description: 'Declaración y cálculo de impuestos por transferencia de dominio de bienes inmuebles en el cantón Guayaquil.',
    requirements: ['Escritura pública de compraventa', 'Certificado de historia de dominio del Registro de la Propiedad', 'Cédulas de comprador y vendedor'],
    durationDays: 5,
    cost: 'Según avalúo comercial'
  },
  {
    id: 'f3',
    name: 'Solicitud de devolución por pago en exceso de tributos',
    category: 'financiero',
    description: 'Permite solicitar el reintegro de valores cancelados de más por concepto de prediales, tasas de habilitación o contribuciones.',
    requirements: ['Solicitud dirigida al Director Financiero', 'Comprobante de pago original', 'Justificación legal de pago en exceso'],
    durationDays: 15,
    cost: 'Gratuito'
  },
  {
    id: 'f4',
    name: 'Exoneración para Personas Adultas Mayores',
    category: 'financiero',
    description: 'Aplicación del beneficio de exoneración del 50% en el Impuesto Predial para ciudadanos mayores de 65 años de acuerdo con la ley.',
    requirements: ['Cédula del beneficiario', 'Copia del pago predial anterior', 'Formulario de solicitud firmado'],
    durationDays: 3,
    cost: 'Gratuito'
  },
  {
    id: 'f5',
    name: 'Impuesto 1.5 x Mil sobre los Activos Totales',
    category: 'financiero',
    description: 'Declaración anual y pago del impuesto del 1.5 por mil obligatorio para personas naturales y jurídicas que ejercen actividades económicas.',
    requirements: ['Declaración del Impuesto a la Renta de SRI', 'Balance general firmado', 'Formulario municipal de activos'],
    durationDays: 2,
    cost: '0.15% de los activos totales netos'
  },
  {
    id: 'f6',
    name: 'Impuesto Patente Municipal',
    category: 'financiero',
    description: 'Inscripción, declaración y renovación anual de la patente para ejercer cualquier actividad comercial, industrial o profesional en Guayaquil.',
    requirements: ['RUC actualizado', 'Cédula de identidad', 'Último pago del impuesto predial del establecimiento'],
    durationDays: 2,
    cost: 'Según capital de operación'
  },
  {
    id: 'f7',
    name: 'Declaración de la Tasa de Recolección de Desechos Sólidos',
    category: 'financiero',
    description: 'Declaración requerida para grandes generadores de desechos sólidos comerciales e industriales para la asignación de tasas de recolección.',
    requirements: ['Estudio de generación de desechos', 'RUC', 'Permiso ambiental si aplica'],
    durationDays: 7,
    cost: 'Según volumen declarado'
  },
  {
    id: 'f8',
    name: 'Pago CEP (Código Electrónico de Pago)',
    category: 'financiero',
    description: 'Realice el pago en línea de sus obligaciones tributarias ingresando su código CEP previamente generado en ventanilla o web.',
    requirements: ['Código CEP válido', 'Tarjeta de débito/crédito o banca web'],
    durationDays: 1,
    cost: 'Costo del tributo'
  },

  // Certificados
  {
    id: 'c1',
    name: 'Avalúo y Registro de Predios Urbanos',
    category: 'certificados',
    description: 'Obtenga el documento oficial con datos de avalúo, superficie, linderos y clave catastral registrados en la Municipalidad.',
    requirements: ['Clave catastral del predio', 'Copia de cédula del propietario', 'Comprobante de pago de la tasa de avalúos'],
    durationDays: 3,
    cost: '$5.00'
  },
  {
    id: 'c2',
    name: 'Certificado de No Adeudar',
    category: 'certificados',
    description: 'Certificación oficial que acredita que el ciudadano no mantiene deudas pendientes de pago con el GAD Municipal de Guayaquil.',
    requirements: ['Cédula de identidad o RUC', 'Comprobante de pago de tasa administrativa'],
    durationDays: 1,
    cost: '$3.50'
  },
  {
    id: 'c3',
    name: 'Tener Predio Catastral',
    category: 'certificados',
    description: 'Emisión de constancia de posesión de predio registrado en el catastro municipal con su respectiva información técnica.',
    requirements: ['Código catastral', 'Escritura inscrita en el Registro de la Propiedad'],
    durationDays: 4,
    cost: '$10.00'
  },
  {
    id: 'c4',
    name: 'Ser Posesionario',
    category: 'certificados',
    description: 'Certificado que acredita la ocupación y posesión legítima de terrenos municipales aptos para planes de regularización.',
    requirements: ['Croquis del terreno', 'Declaración juramentada de posesión pacífica por más de 5 años', 'Cédula de identidad'],
    durationDays: 10,
    cost: '$15.00'
  },

  // Catastros y Construcciones
  {
    id: 'con1',
    name: 'Solicitud de aprobación de planos',
    category: 'construcciones',
    description: 'Presentación y revisión técnica del proyecto arquitectónico para la obtención de permisos de construcción en predios del cantón.',
    requirements: ['Plano arquitectónico firmado por profesional registrado', 'Escrituras del terreno', 'Línea de fábrica actualizada'],
    durationDays: 15,
    cost: 'Según metros cuadrados de construcción'
  },
  {
    id: 'con2',
    name: 'Solicitud de modificación de planos',
    category: 'construcciones',
    description: 'Actualización y registro de cambios en proyectos previamente aprobados o ampliaciones de edificaciones existentes.',
    requirements: ['Planos modificatorios en digital', 'Permiso de construcción anterior', 'Copia de cédula del propietario'],
    durationDays: 10,
    cost: 'Tarifa reducida por m² modificado'
  },
  {
    id: 'con3',
    name: 'Solicitud de regularización de edificaciones',
    category: 'construcciones',
    description: 'Proceso de amnistía técnica para construcciones edificadas sin previo permiso municipal que cumplen con normas de seguridad.',
    requirements: ['Levantamiento físico de la edificación', 'Informe estructural firmado', 'Pago de multa administrativa reducida'],
    durationDays: 20,
    cost: 'Multa variable + tasa administrativa'
  },
  {
    id: 'con4',
    name: 'Solicitud de inspección final',
    category: 'construcciones',
    description: 'Visita técnica final en sitio para constatar que la obra física se ejecutó fielmente al plano aprobado y emitir el Certificado de Habitabilidad.',
    requirements: ['Permiso de construcción aprobado', 'Bitácora de obra', 'Planos aprobados de redes sanitarias y eléctricas'],
    durationDays: 5,
    cost: 'Gratuito'
  },

  // Negocio al Día
  {
    id: 'n1',
    name: 'Licencia Anual de Funcionamiento (Tasa de Habilitación)',
    category: 'negocio',
    description: 'Permiso anual obligatorio que autoriza el funcionamiento de establecimientos comerciales que cumplen con reglas de seguridad y orden.',
    requirements: ['Patente comercial pagada', 'Permiso del Cuerpo de Bomberos', 'Informe de uso de suelo compatible'],
    durationDays: 4,
    cost: 'Calculado según actividad y área'
  },

  // Vía Pública
  {
    id: 'v1',
    name: 'Solicitud de ocupación de vía pública para actividades varias',
    category: 'via-publica',
    description: 'Permiso temporal para la colocación de andamios, tarimas, ferias, rodajes cinematográficos o eventos comunitarios en aceras o calzadas.',
    requirements: ['Croquis de ubicación de la ocupación', 'Garantía de daños materiales si aplica', 'Copia de cédula del solicitante'],
    durationDays: 5,
    cost: 'Tasa por m² diario de ocupación'
  }
];

export const TRAMITES_RECIENTES: TramiteReciente[] = [
  { id: '1', name: 'Solicitud de inspección final', date: '20 may 2026', code: 'CAS-21636-O9N$G7', status: 'Pendiente', category: 'Catastros y Construcciones' },
  { id: '2', name: 'Solicitud de modificación de planos', date: '20 may 2026', code: 'CAS-21636-HDJ5H9', status: 'Pendiente', category: 'Catastros y Construcciones' },
  { id: '3', name: 'Solicitud de regularización', date: '20 may 2026', code: 'CAS-21636-REG821', status: 'Pendiente', category: 'Catastros y Construcciones' },
  { id: '4', name: 'Solicitud de remodelación propiedad horizontal', date: '20 may 2026', code: 'CAS-21636-J4X6T5', status: 'Pendiente', category: 'Catastros y Construcciones' },
  { id: '5', name: 'Solicitud de aprobación de planos', date: '20 may 2026', code: 'CAS-21632-SOP8C7', status: 'Finalizado', category: 'Catastros y Construcciones' },
  { id: '6', name: 'Consulta unificada Impuesto Predial y CEM', date: '18 may 2026', code: 'CAS-21501-PDR302', status: 'Finalizado', category: 'Financiero' },
  { id: '7', name: 'Licencia Anual de Funcionamiento', date: '15 may 2026', code: 'CAS-21440-HAB991', status: 'Observado', category: 'Negocio al día' }
];

export const METRICS: MetricCard[] = [
  { title: 'TRÁMITES', value: 70, subValue: 26, subText: 'Tramites gestionados en 2026', color: 'border-l-4 border-l-[#009cdf]' },
  { title: 'ÚLTIMO PAGO', value: '$ 56.80', subText: 'Realizado el 20 de mayo de 2026', color: 'border-l-4 border-l-[#efc600]' },
  { title: 'BENEFICIOS OBTENIDOS', value: '4', subText: 'Subsidios y exoneraciones activas', color: 'border-l-4 border-l-emerald-500' },
  { title: 'CERTIFICADOS', value: '31', subValue: 9, subText: 'Obtenidos · 9 pendientes de firma', color: 'border-l-4 border-l-purple-500' }
];

export const ANGULAR_CODEBASE: AngularFile[] = [
  {
    name: 'app.config.ts',
    path: 'src/app/app.config.ts',
    language: 'typescript',
    content: `import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding())
  ]
};`
  },
  {
    name: 'app.component.ts',
    path: 'src/app/app.component.ts',
    language: 'typescript',
    content: `import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: \`<router-outlet></router-outlet>\`,
  styles: [\`
    :host {
      display: block;
      min-height: 100vh;
    }
  \`]
})
export class AppComponent {
  title = 'portal-ciudadano-guayaquil';
}`
  },
  {
    name: 'portal.service.ts',
    path: 'src/app/services/portal.service.ts',
    language: 'typescript',
    content: `import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Tramite {
  id: string;
  name: string;
  category: string;
  description: string;
  requirements: string[];
  durationDays: number;
  cost: string;
}

export interface TramiteReciente {
  id: string;
  name: string;
  date: string;
  code: string;
  status: 'Pendiente' | 'Finalizado' | 'En Proceso' | 'Observado';
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  // Signals for state management
  currentUser = signal<{ name: string; ruc: string; isLogged: boolean }>({
    name: 'CARLOS RODRÍGUEZ',
    ruc: '091****849',
    isLogged: false
  });

  private categories = [
    { id: 'financiero', name: 'Financiero', icon: 'DollarSign', count: 14 },
    { id: 'certificados', name: 'Certificados', icon: 'FileText', count: 7 },
    { id: 'construcciones', name: 'Catastros y Construcciones', icon: 'Home', count: 19 },
    { id: 'negocio', name: 'Negocio al día', icon: 'Briefcase', count: 9 },
    { id: 'via-publica', name: 'Vía Pública', icon: 'MapPin', count: 12 },
    { id: 'otros', name: 'Otros Trámites', icon: 'Grid', count: 11 }
  ];

  private tramites: Tramite[] = [
    {
      id: 'f1',
      name: 'Consulta unificada Impuesto Predial y CEM',
      category: 'financiero',
      description: 'Consulte su deuda consolidada del impuesto predial urbano o rústico, así como las tasas por contribución especial de mejoras vigentes.',
      requirements: ['Cédula de identidad', 'Código catastral del predio o nombres completos del propietario'],
      durationDays: 1,
      cost: 'Gratuito'
    },
    {
      id: 'f2',
      name: 'Alcabalas y Plusvalías',
      category: 'financiero',
      description: 'Declaración y cálculo de impuestos por transferencia de dominio de bienes inmuebles en el cantón Guayaquil.',
      requirements: ['Escritura pública de compraventa', 'Certificado de Registro de Propiedad', 'Cédulas de comprador y vendedor'],
      durationDays: 5,
      cost: 'Según avalúo comercial'
    },
    {
      id: 'c1',
      name: 'Avalúo y Registro de Predios Urbanos',
      category: 'certificados',
      description: 'Obtenga el documento oficial con datos de avalúo, superficie, linderos y clave catastral registrados en la Municipalidad.',
      requirements: ['Clave catastral del predio', 'Copia de cédula del propietario', 'Tasa de avalúos'],
      durationDays: 3,
      cost: '$5.00'
    },
    {
      id: 'con1',
      name: 'Solicitud de aprobación de planos',
      category: 'construcciones',
      description: 'Presentación y revisión técnica del proyecto arquitectónico para la obtención de permisos de construcción en predios del cantón.',
      requirements: ['Plano arquitectónico firmado por profesional registrado', 'Escrituras del terreno', 'Línea de fábrica actualizada'],
      durationDays: 15,
      cost: 'Según metros cuadrados de construcción'
    }
  ];

  private tramitesRecientes = signal<TramiteReciente[]>([
    { id: '1', name: 'Solicitud de inspección final', date: '20 may 2026', code: 'CAS-21636-O9N$G7', status: 'Pendiente', category: 'Catastros y Construcciones' },
    { id: '2', name: 'Solicitud de modificación de planos', date: '20 may 2026', code: 'CAS-21636-HDJ5H9', status: 'Pendiente', category: 'Catastros y Construcciones' },
    { id: '5', name: 'Solicitud de aprobación de planos', date: '20 may 2026', code: 'CAS-21632-SOP8C7', status: 'Finalizado', category: 'Catastros y Construcciones' }
  ]);

  getCategories() {
    return this.categories;
  }

  getTramitesByCategory(categoryId: string): Tramite[] {
    return this.tramites.filter(t => t.category === categoryId);
  }

  getTramitesRecientes() {
    return this.tramitesRecientes;
  }

  login(cedula: string, contrasena: string): boolean {
    if (cedula && contrasena) {
      this.currentUser.set({
        name: 'CARLOS RODRÍGUEZ',
        ruc: '091****849',
        isLogged: true
      });
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser.set({
      name: 'Invitado',
      ruc: '',
      isLogged: false
    });
  }

  addTramite(name: string, category: string) {
    const randomId = Math.floor(10000 + Math.random() * 90000);
    const nuevo: TramiteReciente = {
      id: Math.random().toString(),
      name,
      date: 'Hoy',
      code: \`CAS-\${randomId}-TRM\`,
      status: 'Pendiente',
      category
    };
    this.tramitesRecientes.update(list => [nuevo, ...list]);
  }
}`
  },
  {
    name: 'landing.component.ts',
    path: 'src/app/pages/landing/landing.component.ts',
    language: 'typescript',
    content: `import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PortalService } from '../../services/portal.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  private router = inject(Router);
  portalService = inject(PortalService);

  categories = this.portalService.getCategories();
  activeCategory = 'financiero';

  onSelectCategory(catId: string) {
    this.activeCategory = catId;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}`
  },
  {
    name: 'landing.component.html',
    path: 'src/app/pages/landing/landing.component.html',
    language: 'html',
    content: `<!-- Landing Page: Estética de Comunicación combinada con eficiencia de TIC -->
<div class="min-height-screen flex flex-col relative text-white overflow-x-hidden bg-slate-950">
  
  <!-- Imagen de fondo Palacio Municipal con superposición oscura premium (Estilo de Comunicación) -->
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center mix-blend-overlay opacity-30 pointer-events-none"></div>

  <!-- Header Superior -->
  <header class="relative z-10 flex flex-wrap items-center justify-between p-6 bg-gradient-to-b from-[#2e2f63]/90 to-transparent">
    <div class="flex items-center gap-4">
      <!-- Escudo / Logotipo oficial de Guayaquil (Según Manual de Marca) -->
      <div class="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/20 flex items-center gap-3">
        <div class="w-10 h-10 bg-[#009cdf] rounded-full flex items-center justify-center font-bold text-white shadow-lg text-lg">★</div>
        <div class="leading-none text-left">
          <span class="block text-xs font-bold tracking-widest text-[#009cdf]">MUY ILUSTRE</span>
          <span class="block text-[13px] font-extrabold text-white">MUNICIPALIDAD</span>
          <span class="block text-[10px] text-slate-300 font-medium">DE GUAYAQUIL</span>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-6 mt-4 sm:mt-0">
      <div class="text-right hidden md:block">
        <p class="text-xs text-slate-300 font-medium">SERVICIO EN LÍNEA</p>
        <p class="text-[11px] text-sky-400 font-mono">Guayaquil, Ecuador</p>
      </div>
      <button (click)="goToLogin()" class="cursor-pointer bg-[#009cdf] hover:bg-[#009cdf]/80 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 border border-sky-400 flex items-center gap-2 text-sm">
        <span>Inicia Sesión</span>
        <span class="text-[#efc600]">➔</span>
      </button>
    </div>
  </header>

  <!-- Contenido Principal: Híbrido Equilibrado -->
  <main class="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-16 py-12 max-w-7xl mx-auto w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Información Izquierda (Estilo Comunicaciones) -->
      <div class="lg:col-span-5 text-left space-y-6">
        <span class="bg-[#efc600]/20 text-[#efc600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#efc600]/30 inline-block">NUEVO PORTAL UNIFICADO</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight font-display">
          SERVICIOS <br/>
          <span class="text-[#009cdf]">EN LÍNEA</span>
        </h1>
        <p class="text-slate-300 text-sm leading-relaxed max-w-md">
          Es un servicio digital con respuesta inmediata a todo trámite que necesites solucionar en la ciudad de Guayaquil. Rápido, transparente y sin intermediarios.
        </p>

        <!-- Canales de Atención Rápidos -->
        <div class="pt-4 border-t border-white/10 space-y-3">
          <div class="flex items-center gap-3 text-xs text-slate-300">
            <span class="text-[#efc600]">📞</span>
            <span><strong>Línea de Atención:</strong> (+593 4) 2 594 800 ext. 1</span>
          </div>
          <div class="flex items-center gap-3 text-xs text-slate-300">
            <span class="text-[#009cdf]">✉</span>
            <span><strong>Correo:</strong> ventanillauniversal@guayaquil.gob.ec</span>
          </div>
        </div>
      </div>

      <!-- Carrusel Interactivo de Categorías Derecha (Estilo Comunicaciones + Funcionalidad TIC) -->
      <div class="lg:col-span-7 space-y-6">
        <h3 class="text-lg font-bold text-[#efc600] border-b border-white/10 pb-2">CATEGORÍAS DE TRÁMITES</h3>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          @for (cat of categories; track cat.id) {
            <div 
              (click)="onSelectCategory(cat.id)"
              [class.border-[#009cdf]]="activeCategory === cat.id"
              [class.bg-white/10]="activeCategory === cat.id"
              [class.bg-white/5]="activeCategory !== cat.id"
              class="cursor-pointer p-4 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 text-left group"
            >
              <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-[#009cdf]/20 text-[#009cdf] mb-3 font-bold">
                @if (cat.id === 'financiero') { $ }
                @if (cat.id === 'certificados') { 📄 }
                @if (cat.id === 'construcciones') { 🏠 }
                @if (cat.id === 'negocio') { 💼 }
                @if (cat.id === 'via-publica') { 📍 }
                @if (cat.id === 'otros') { ⚙ }
              </div>
              <h4 class="font-bold text-sm text-white group-hover:text-[#efc600] leading-snug transition-colors">{{ cat.name }}</h4>
              <p class="text-[11px] text-slate-400 mt-1">{{ cat.count }} trámites disponibles</p>
            </div>
          }
        </div>

        <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span class="text-xs text-[#009cdf] font-semibold uppercase">Acceso Rápido</span>
            <p class="text-sm text-slate-200 mt-1 font-medium">¿Listo para iniciar tu trámite? Ingresa de forma segura.</p>
          </div>
          <button (click)="goToLogin()" class="cursor-pointer w-full sm:w-auto bg-[#efc600] hover:bg-[#efc600]/90 text-[#2e2f63] font-bold py-2.5 px-6 rounded-xl text-xs transition-colors shadow-lg">
            INICIAR TRÁMITE AHORA
          </button>
        </div>
      </div>

    </div>
  </main>

  <!-- Footer con Slogan Oficial y Logos Requeridos -->
  <footer class="relative z-10 bg-[#2e2f63]/90 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
    <div class="flex items-center gap-4">
      <div class="text-left">
        <p class="text-xs text-slate-400">© 2026 GAD Municipal de Guayaquil</p>
        <p class="text-[10px] text-slate-500">Transparencia y Gestión Ciudadana · LOTAIP Art. 7 Lit. O</p>
      </div>
    </div>

    <!-- Slogan Oficial Según Manual (Attachment 1) -->
    <div class="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
      <div class="text-right leading-none">
        <span class="block text-[11px] font-bold text-white">ASÍ SE HACE</span>
        <span class="block text-[11px] font-extrabold text-[#009cdf]">LA CIUDAD DE TODOS</span>
      </div>
      <div class="h-6 w-[1px] bg-white/20"></div>
      <div class="text-left leading-none">
        <span class="block text-[11px] font-extrabold text-[#efc600]">AQUILES ALCALDE</span>
      </div>
    </div>
  </footer>
</div>`
  },
  {
    name: 'login.component.ts',
    path: 'src/app/pages/login/login.component.ts',
    language: 'typescript',
    content: `import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from '../../services/portal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private router = inject(Router);
  private portalService = inject(PortalService);

  cedula = '';
  password = '';
  errorMessage = '';

  onSubmit() {
    if (!this.cedula || !this.password) {
      this.errorMessage = 'Por favor complete todos los campos requeridos.';
      return;
    }
    
    const success = this.portalService.login(this.cedula, this.password);
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Credenciales inválidas.';
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}`
  },
  {
    name: 'login.component.html',
    path: 'src/app/pages/login/login.component.html',
    language: 'html',
    content: `<div class="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-slate-950 font-sans">
  
  <!-- Lado Izquierdo: Visual (Estilo Comunicaciones) -->
  <div class="hidden lg:flex lg:col-span-7 relative bg-slate-900 items-center justify-center p-12 overflow-hidden">
    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-[#2e2f63]/80 via-[#2e2f63]/40 to-[#009cdf]/40"></div>
    
    <div class="relative z-10 text-left max-w-lg space-y-6">
      <div class="bg-white/15 backdrop-blur-lg p-3 rounded-2xl w-fit border border-white/20">
        <span class="text-white text-2xl font-bold">★</span>
      </div>
      <h2 class="text-4xl font-extrabold text-white tracking-tight leading-tight">
        Bienvenido a la Oficina Virtual Unificada
      </h2>
      <p class="text-slate-200 text-sm leading-relaxed">
        Acceda con su usuario único y gestione de manera centralizada sus pagos prediales, solicitudes de construcción, certificados de no adeudar y patentes municipales.
      </p>
      
      <div class="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 w-fit text-xs text-slate-300">
        <span>🔒 <strong>Transparencia:</strong> Sus datos están protegidos con autenticación única del GAD Municipal.</span>
      </div>
    </div>
  </div>

  <!-- Lado Derecho: Formulario de Ingreso (Según Portal 1.0 pero Modernizado) -->
  <div class="col-span-1 lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 bg-[#2e2f63] text-white">
    <div class="flex justify-between items-center">
      <button (click)="goBack()" class="cursor-pointer text-slate-300 hover:text-white text-xs flex items-center gap-1.5 font-medium">
        <span>⬅</span> Volver al inicio
      </button>
      <span class="text-xs text-sky-400 font-mono">SERVICIOS EN LÍNEA</span>
    </div>

    <div class="max-w-md w-full mx-auto my-auto py-12 space-y-6">
      <div class="space-y-2">
        <h3 class="text-3xl font-extrabold tracking-tight">Iniciar Sesión</h3>
        <p class="text-slate-300 text-xs">Ingrese sus datos de identidad para acceder al portal.</p>
      </div>

      @if (errorMessage) {
        <div class="bg-rose-500/10 border border-rose-500/30 text-rose-300 p-3 rounded-lg text-xs">
          ⚠️ {{ errorMessage }}
        </div>
      }

      <form (submit)="onSubmit()" class="space-y-4">
        <div class="space-y-1 text-left">
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider">Cédula / RUC / Pasaporte</label>
          <input 
            type="text" 
            [(ngModel)]="cedula" 
            name="cedula" 
            placeholder="Ej. 0925345678" 
            class="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#009cdf] focus:border-transparent transition-all"
          />
        </div>

        <div class="space-y-1 text-left">
          <div class="flex justify-between items-center">
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider">Contraseña</label>
            <a href="#" class="text-[11px] text-[#efc600] hover:underline">¿Olvidó su contraseña?</a>
          </div>
          <input 
            type="password" 
            [(ngModel)]="password" 
            name="password" 
            placeholder="••••••••" 
            class="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#009cdf] focus:border-transparent transition-all"
          />
        </div>

        <button type="submit" class="cursor-pointer w-full bg-[#efc600] hover:bg-[#efc600]/90 text-[#2e2f63] font-extrabold py-3 rounded-xl text-sm tracking-wide transition-colors uppercase mt-2">
          Ingresar al Portal
        </button>
      </form>

      <div class="text-center pt-4">
        <p class="text-xs text-slate-400">¿No tiene una cuenta? <a href="#" class="text-sky-400 font-semibold hover:underline">Crear cuenta nueva</a></p>
      </div>
    </div>

    <!-- Slogan en Footer del Formulario -->
    <div class="text-center border-t border-white/10 pt-4 text-[10px] text-slate-400">
      M.I. Municipalidad de Guayaquil · Dirección de Informática (ICT)
    </div>
  </div>

</div>`
  },
  {
    name: 'dashboard.component.ts',
    path: 'src/app/pages/dashboard/dashboard.component.ts',
    language: 'typescript',
    content: `import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService, Tramite, TramiteReciente } from '../../services/portal.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private router = inject(Router);
  portalService = inject(PortalService);

  // Component Signals and states
  currentUser = this.portalService.currentUser;
  categories = this.portalService.getCategories();
  recentTramites = this.portalService.getTramitesRecientes();
  
  selectedCategory = signal<string>('financiero');
  searchQuery = signal<string>('');
  
  showModal = signal<boolean>(false);
  selectedTramite = signal<Tramite | null>(null);

  getFilteredTramites(): Tramite[] {
    const list = this.portalService.getTramitesByCategory(this.selectedCategory());
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return list;
    return list.filter(t => t.name.toLowerCase().includes(query) || t.description.toLowerCase().includes(query));
  }

  onSelectCategory(catId: string) {
    this.selectedCategory.set(catId);
  }

  openProcedure(tramite: Tramite) {
    this.selectedTramite.set(tramite);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
    this.selectedTramite.set(null);
  }

  submitProcedure() {
    if (this.selectedTramite()) {
      this.portalService.addTramite(this.selectedTramite()!.name, this.selectedCategory());
      this.closeModal();
    }
  }

  logout() {
    this.portalService.logout();
    this.router.navigate(['/']);
  }
}`
  },
  {
    name: 'dashboard.component.html',
    path: 'src/app/pages/dashboard/dashboard.component.html',
    language: 'html',
    content: `<div class="min-h-screen bg-slate-50 flex flex-col font-sans">
  
  <!-- Header Principal Unificado (Estilo de Comunicación + Buscador TIC) -->
  <header class="bg-[#2e2f63] text-white px-6 py-4 shadow-md flex flex-wrap items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <div class="bg-white/10 p-2 rounded-xl flex items-center gap-2">
        <span class="text-[#009cdf] text-xl">★</span>
        <div class="text-left leading-none">
          <span class="block text-[11px] font-extrabold">GUAYAQUIL</span>
          <span class="block text-[8px] text-slate-300">SERVICIO EN LÍNEA</span>
        </div>
      </div>
    </div>

    <!-- Buscador Integrado (Propuesta TIC) -->
    <div class="flex-grow max-w-md mx-4 relative">
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
      <input 
        type="text" 
        [ngModel]="searchQuery()"
        (ngModelChange)="searchQuery.set($event)"
        placeholder="¿Qué trámite necesitas hoy? (Ej. predial, planos...)"
        class="w-full bg-slate-950/40 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009cdf]"
      />
    </div>

    <div class="flex items-center gap-4">
      <div class="text-right hidden md:block leading-none">
        <span class="block text-xs font-bold text-[#efc600]">HOLA, {{ currentUser().name }}</span>
        <span class="block text-[9px] text-slate-300">RUC/Cédula: {{ currentUser().ruc }}</span>
      </div>
      <button (click)="logout()" class="cursor-pointer bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-red-500/20 transition-colors">
        Salir
      </button>
    </div>
  </header>

  <!-- Cuerpo de la Aplicación -->
  <div class="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 max-w-7xl w-full mx-auto">
    
    <!-- Sidebar de Categorías Izquierdo (Propuesta TIC con estilo refinado de Comunicaciones) -->
    <aside class="col-span-1 lg:col-span-3 space-y-4">
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div class="bg-slate-100 p-4 border-b border-slate-200">
          <h3 class="font-bold text-xs text-slate-500 uppercase tracking-wider">Categorías de Trámites</h3>
        </div>
        <nav class="p-2 space-y-1">
          @for (cat of categories; track cat.id) {
            <button 
              (click)="onSelectCategory(cat.id)"
              [class.bg-[#009cdf]/10]="selectedCategory() === cat.id"
              [class.text-[#2e2f63]]="selectedCategory() === cat.id"
              [class.border-l-4]="selectedCategory() === cat.id"
              [class.border-l-[#009cdf]]="selectedCategory() === cat.id"
              [class.font-bold]="selectedCategory() === cat.id"
              class="cursor-pointer w-full text-left p-3 rounded-xl hover:bg-slate-50 text-slate-600 transition-all flex items-center justify-between text-xs font-medium border-l-4 border-l-transparent"
            >
              <span class="truncate">{{ cat.name }}</span>
              <span class="bg-slate-100 text-slate-500 font-mono text-[10px] px-2 py-0.5 rounded-full">{{ cat.count }}</span>
            </button>
          }
        </nav>
      </div>
    </aside>

    <!-- Contenido Principal Central -->
    <main class="col-span-1 lg:col-span-9 space-y-6 text-left">
      
      <!-- Banner de Bienvenida -->
      <div class="bg-gradient-to-r from-[#2e2f63] to-[#009cdf] p-6 rounded-2xl text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="text-xs text-[#efc600] font-bold tracking-widest uppercase">Escritorio Ciudadano</span>
          <h2 class="text-2xl font-extrabold mt-1">Buenos días, {{ currentUser().name }} 👋</h2>
          <p class="text-slate-200 text-xs mt-1">Su bandeja está al día. Tiene 3 trámites pendientes de resolución por el departamento catastral.</p>
        </div>
      </div>

      <!-- Cuadricula de Métricas (Propuesta TIC) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-xl border-l-4 border-l-[#009cdf] shadow-sm">
          <p class="text-[10px] text-slate-400 font-bold uppercase">Trámites</p>
          <p class="text-2xl font-black text-slate-800">70</p>
          <p class="text-[10px] text-slate-500">26 Pendientes</p>
        </div>
        <div class="bg-white p-4 rounded-xl border-l-4 border-l-[#efc600] shadow-sm">
          <p class="text-[10px] text-slate-400 font-bold uppercase">Último Pago</p>
          <p class="text-2xl font-black text-slate-800">$ 56.80</p>
          <p class="text-[10px] text-[#009cdf] font-semibold">20 de Mayo 2026</p>
        </div>
        <div class="bg-white p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm">
          <p class="text-[10px] text-slate-400 font-bold uppercase">Beneficios</p>
          <p class="text-2xl font-black text-slate-800">4</p>
          <p class="text-[10px] text-emerald-600 font-semibold">Exoneraciones activas</p>
        </div>
        <div class="bg-white p-4 rounded-xl border-l-4 border-purple-500 shadow-sm">
          <p class="text-[10px] text-slate-400 font-bold uppercase">Certificados</p>
          <p class="text-2xl font-black text-slate-800">31</p>
          <p class="text-[10px] text-purple-600 font-semibold">9 Pendientes firma</p>
        </div>
      </div>

      <!-- Trámites del Sector Seleccionado -->
      <section class="space-y-3">
        <div class="flex items-center justify-between border-b border-slate-200 pb-2">
          <h3 class="font-extrabold text-slate-800 text-sm uppercase tracking-wide">
            Trámites en Sector: <span class="text-[#009cdf] font-black">{{ selectedCategory() | titlecase }}</span>
          </h3>
          <span class="text-[10px] text-slate-400 font-medium">Haga clic en un trámite para iniciar</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (tramite of getFilteredTramites(); track tramite.id) {
            <div 
              (click)="openProcedure(tramite)"
              class="cursor-pointer bg-white p-4 rounded-xl border border-slate-200 hover:border-[#009cdf] hover:shadow-md transition-all group text-left flex flex-col justify-between"
            >
              <div>
                <h4 class="font-bold text-slate-800 text-xs group-hover:text-[#009cdf] transition-colors leading-snug">{{ tramite.name }}</h4>
                <p class="text-slate-500 text-[11px] mt-1 line-clamp-2 leading-relaxed">{{ tramite.description }}</p>
              </div>
              <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                <span>⏱ Demora: <strong>{{ tramite.durationDays }} día(s)</strong></span>
                <span class="text-[#efc600] font-bold bg-[#efc600]/10 px-2 py-0.5 rounded">{{ tramite.cost }}</span>
              </div>
            </div>
          } @empty {
            <div class="col-span-2 py-12 text-center text-slate-400 text-xs">
              No se encontraron trámites para su búsqueda. Intente con otra palabra clave.
            </div>
          }
        </div>
      </section>

      <!-- Tabla "Mis Trámites Recientes" (Propuesta TIC para total trazabilidad del ciudadano) -->
      <section class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div class="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <h4 class="font-extrabold text-slate-800 text-xs uppercase tracking-wide">Mis Trámites Recientes</h4>
          <a href="#" class="text-[11px] text-[#009cdf] font-bold hover:underline">Ver Historial Completo →</a>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="bg-slate-100 text-slate-500 font-semibold border-b border-slate-200 text-[10px] uppercase">
                <th class="p-3">Código de Trámite</th>
                <th class="p-3">Nombre del Trámite</th>
                <th class="p-3">Fecha de Ingreso</th>
                <th class="p-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              @for (rec of recentTramites(); track rec.id) {
                <tr class="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td class="p-3 font-mono text-[10px] text-slate-500">{{ rec.code }}</td>
                  <td class="p-3 font-bold text-slate-700">{{ rec.name }}</td>
                  <td class="p-3 text-slate-400">{{ rec.date }}</td>
                  <td class="p-3">
                    <span 
                      [class.bg-amber-100]="rec.status === 'Pendiente'"
                      [class.text-amber-700]="rec.status === 'Pendiente'"
                      [class.bg-emerald-100]="rec.status === 'Finalizado'"
                      [class.text-emerald-700]="rec.status === 'Finalizado'"
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                    >
                      ● {{ rec.status }}
                    </span>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </section>

    </main>

  </div>

  <!-- Modal de Solicitud de Trámite -->
  @if (showModal()) {
    <div class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div class="p-6 bg-[#2e2f63] text-white">
          <span class="text-[10px] text-[#efc600] font-bold uppercase tracking-wider">OFICINA VIRTUAL MUNICIPAL</span>
          <h3 class="text-lg font-extrabold mt-1 leading-snug">{{ selectedTramite()?.name }}</h3>
        </div>
        
        <div class="p-6 space-y-4 text-left text-xs">
          <div>
            <h4 class="font-bold text-slate-700">Descripción del Trámite:</h4>
            <p class="text-slate-500 mt-1 leading-relaxed">{{ selectedTramite()?.description }}</p>
          </div>

          <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 class="font-bold text-[#2e2f63]">Requisitos obligatorios para adjuntar:</h4>
            <ul class="list-disc list-inside mt-2 space-y-1 text-slate-600 pl-1 leading-relaxed">
              @for (req of selectedTramite()?.requirements; track req) {
                <li>{{ req }}</li>
              }
            </ul>
          </div>

          <div class="grid grid-cols-2 gap-4 pt-2 text-[11px]">
            <div class="bg-slate-50 p-3 rounded-lg text-center">
              <span class="text-slate-400 block">Tiempo Estimado</span>
              <strong class="text-slate-700 text-xs">{{ selectedTramite()?.durationDays }} día(s) laborables</strong>
            </div>
            <div class="bg-slate-50 p-3 rounded-lg text-center">
              <span class="text-slate-400 block">Costo Administrativo</span>
              <strong class="text-[#009cdf] text-xs">{{ selectedTramite()?.cost }}</strong>
            </div>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button (click)="closeModal()" class="cursor-pointer px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-xl font-bold text-xs transition-colors">
            Cancelar
          </button>
          <button (click)="submitProcedure()" class="cursor-pointer px-5 py-2 bg-[#efc600] hover:bg-[#efc600]/95 text-[#2e2f63] rounded-xl font-black text-xs transition-colors shadow">
            INICIAR TRÁMITE ONLINE
          </button>
        </div>
      </div>
    </div>
  }

</div>`
  }
];

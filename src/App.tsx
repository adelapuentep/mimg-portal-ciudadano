import { useState, useMemo } from 'react';
import { 
  Search, 
  Bell, 
  LogOut, 
  DollarSign, 
  FileText, 
  Home, 
  Briefcase, 
  MapPin, 
  Grid, 
  User, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  X, 
  ChevronRight, 
  Copy, 
  FileCode, 
  Menu, 
  Phone, 
  Mail, 
  Info, 
  Lock, 
  ArrowRight,
  ExternalLink,
  Code,
  Sparkles,
  SearchCode
} from 'lucide-react';
import { CATEGORIES, TRAMITES_DATA, TRAMITES_RECIENTES, METRICS, ANGULAR_CODEBASE } from './data';
import { Tramite, TramiteReciente } from './types';

const CATEGORY_IMAGES: Record<string, string> = {
  financiero: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=400',
  certificados: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=400',
  construcciones: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400',
  negocio: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400',
  'via-publica': 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=400',
  otros: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400'
};

export default function App() {
  // Navigation & User session states
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [user, setUser] = useState({
    name: 'CARLOS RODRÍGUEZ',
    ruc: '0912837489001',
    isLogged: false
  });

  // Citizen Portal Functional States
  const [activeCategory, setActiveCategory] = useState('financiero');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTramite, setSelectedTramite] = useState<Tramite | null>(null);
  const [recentTramites, setRecentTramites] = useState<TramiteReciente[]>(TRAMITES_RECIENTES);
  
  // Custom interactive data inputs (for testing other names/RUCs)
  const [inputCedula, setInputCedula] = useState('0912837489');
  const [inputPassword, setInputPassword] = useState('••••••••');
  const [inputName, setInputName] = useState('CARLOS RODRÍGUEZ');

  // Interactive Developer Code Viewer States
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [activeCodeFileIndex, setActiveCodeFileIndex] = useState(1); // Default to app.component.ts
  const [codeSearchQuery, setCodeSearchQuery] = useState('');
  
  // UI Notifications (Toast)
  const [toast, setToast] = useState({ message: '', visible: false });

  const triggerToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ message: '', visible: false });
    }, 3000);
  };

  // Handler for custom code copy
  const handleCopyCode = (content: string) => {
    navigator.clipboard.writeText(content);
    triggerToast('¡Código copiado al portapapeles con éxito!');
  };

  // Handler for mock form submit of any procedure
  const handleStartProcedure = (tramite: Tramite) => {
    const randomId = Math.floor(10000 + Math.random() * 90000);
    const code = `CAS-${randomId}-O9N$G7`;
    
    const nuevo: TramiteReciente = {
      id: Math.random().toString(),
      name: tramite.name,
      date: 'Hoy',
      code: code,
      status: 'Pendiente',
      category: CATEGORIES.find(c => c.id === tramite.category)?.name || 'General'
    };

    setRecentTramites([nuevo, ...recentTramites]);
    setSelectedTramite(null);
    triggerToast(`¡Trámite "${tramite.name}" iniciado! Código de seguimiento: ${code}`);
  };

  // Filter procedures by category and keyword search
  const filteredTramites = useMemo(() => {
    const byCat = TRAMITES_DATA.filter(t => t.category === activeCategory);
    if (!searchQuery.trim()) return byCat;
    return byCat.filter(t => 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  // Filter Angular Code Files inside Developer Tab
  const filteredCodeFiles = useMemo(() => {
    if (!codeSearchQuery.trim()) return ANGULAR_CODEBASE;
    return ANGULAR_CODEBASE.filter(f => 
      f.name.toLowerCase().includes(codeSearchQuery.toLowerCase()) || 
      f.content.toLowerCase().includes(codeSearchQuery.toLowerCase())
    );
  }, [codeSearchQuery]);

  // Dynamically map category ID to iconic component
  const renderCategoryIcon = (catId: string, className = "w-5 h-5") => {
    switch (catId) {
      case 'financiero': return <DollarSign className={className} />;
      case 'certificados': return <FileText className={className} />;
      case 'construcciones': return <Home className={className} />;
      case 'negocio': return <Briefcase className={className} />;
      case 'via-publica': return <MapPin className={className} />;
      default: return <Grid className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row font-sans text-slate-100 selection:bg-[#009cdf] selection:text-white relative overflow-x-hidden">
      
      {/* Toast Notification */}
      {toast.visible && (
        <div id="toast" className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white font-bold py-3 px-6 rounded-2xl shadow-2xl border border-emerald-400 flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span className="text-sm">{toast.message}</span>
        </div>
      )}

      {/* Main Container Split: Citizen Interactive Portal vs Developer Code Panel */}
      <div className={`flex-grow flex flex-col transition-all duration-500 ${isCodeOpen ? 'lg:max-w-[50%]' : 'w-full'}`}>
        
        {/* TOP CONTROLLER BAR: For switching views, logging in, or trigger the Dev workspace */}
        <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex flex-wrap items-center justify-between gap-4 z-20 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-left">
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Entorno de Prototipado Híbrido</p>
              <h2 className="text-xs text-[#009cdf] font-extrabold">Muy Ilustre Municipalidad de Guayaquil</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Simulation Controls for testing */}
            <div className="flex bg-slate-950 rounded-xl p-1 border border-slate-800 text-xs">
              <button 
                id="btn-nav-landing"
                onClick={() => { setCurrentView('landing'); setUser(u => ({...u, isLogged: false})); }}
                className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${currentView === 'landing' ? 'bg-[#009cdf] text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Inicio
              </button>
              <button 
                id="btn-nav-login"
                onClick={() => { setCurrentView('login'); }}
                className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${currentView === 'login' ? 'bg-[#009cdf] text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Login
              </button>
              <button 
                id="btn-nav-dashboard"
                onClick={() => { setCurrentView('dashboard'); setUser(u => ({...u, isLogged: true})); }}
                className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${currentView === 'dashboard' ? 'bg-[#009cdf] text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Escritorio TIC
              </button>
            </div>

            {/* Angular 17 Code Panel Toggle Button */}
            <button 
              id="btn-toggle-code"
              onClick={() => setIsCodeOpen(!isCodeOpen)}
              className={`cursor-pointer flex items-center gap-2 font-bold px-4 py-2 rounded-xl text-xs transition-all ${isCodeOpen ? 'bg-[#efc600] text-slate-900 shadow-lg scale-105' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
            >
              <Code className="w-4 h-4" />
              <span className="hidden md:inline">Ver Código Angular 17</span>
              {isCodeOpen ? '✕' : '📂'}
            </button>
          </div>
        </div>

        {/* SCREEN 1: LANDING VIEW (Immersive aesthetic from Communications proposal, pages 2-4) */}
        {currentView === 'landing' && (
          <div className="flex-grow flex flex-col relative text-white min-h-[85vh] overflow-hidden">
            {/* Municipal Palace Background Illustration with Premium Dark Glassmorphism overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center mix-blend-overlay opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2e2f63]/95 via-[#2e2f63]/70 to-[#009cdf]/40 pointer-events-none"></div>

            {/* Inner Content Container */}
            <div className="relative z-10 flex-grow flex flex-col justify-between max-w-7xl mx-auto w-full p-6 md:p-12">
              
              {/* Header (Attachment 4 Aesthetics) */}
              <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src="/assets/placeholder-mimg-logo-white.svg" 
                    alt="M.I. Municipalidad de Guayaquil" 
                    className="h-12 w-auto object-contain" 
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right hidden md:block">
                    <p className="text-xs text-slate-300 font-bold tracking-wider">OFICINA VIRTUAL</p>
                    <p className="text-[11px] text-sky-400 font-mono font-medium">Guayaquil Independiente</p>
                  </div>
                  <button 
                    id="btn-landing-login"
                    onClick={() => setCurrentView('login')}
                    className="cursor-pointer bg-[#009cdf] hover:bg-[#009cdf]/80 text-white font-bold py-2.5 px-6 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 border border-sky-400 flex items-center gap-2 text-xs"
                  >
                    <span>Inicia Sesión</span>
                    <span className="text-[#efc600]">➔</span>
                  </button>
                </div>
              </header>

              {/* Main Body Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-12">
                
                {/* Brand Slogans and Presentation (Left Block) */}
                <div className="lg:col-span-5 text-left space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#efc600]/20 text-[#efc600] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#efc600]/30 shadow-inner">
                    <Sparkles className="w-3.5 h-3.5 text-[#efc600] animate-pulse" />
                    <span>NUEVO PORTAL UNIFICADO 2026</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight font-display">
                    SERVICIO <br/>
                    <span className="text-[#009cdf]">EN LÍNEA</span>
                  </h1>
                  
                  <p className="text-slate-200 text-sm leading-relaxed max-w-md">
                    Es la ventanilla digital unificada con respuesta ágil e inmediata a todo trámite municipal que necesite resolver en la ciudad de Guayaquil.
                  </p>

                  {/* Immediate Contact channels */}
                  <div className="pt-6 border-t border-white/15 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <Phone className="w-4 h-4 text-[#efc600]" />
                      <span><strong>Línea de Atención:</strong> (+593 4) 2 594 800 ext. 1</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <Mail className="w-4 h-4 text-[#009cdf]" />
                      <span><strong>Correo Electrónico:</strong> ventanillauniversal@guayaquil.gob.ec</span>
                    </div>
                  </div>
                </div>

                {/* Categories Slider representation (Right Block - Immersive card carousel) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <h3 className="text-sm font-black text-[#efc600] tracking-wider uppercase">Categorías Destacadas</h3>
                    <span className="text-[10px] font-mono text-slate-400">Seleccione para ver detalles</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {CATEGORIES.map((cat) => (
                      <div 
                        key={cat.id}
                        id={`category-card-${cat.id}`}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setCurrentView('login');
                          triggerToast(`Por favor, inicie sesión para explorar ${cat.name}`);
                        }}
                        className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 backdrop-blur-md group relative overflow-hidden ${
                          activeCategory === cat.id 
                            ? 'bg-[#2e2f63]/80 border-[#009cdf] shadow-lg scale-[1.02]' 
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        {/* Background photo revealed on hover */}
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl">
                          <img 
                            src={CATEGORY_IMAGES[cat.id] || CATEGORY_IMAGES.otros} 
                            alt="" 
                            className="w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-15 group-hover:scale-100 transition-all duration-500 mix-blend-overlay"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-[#009cdf]/20 text-[#009cdf] mb-3 transition-colors relative z-10">
                          {renderCategoryIcon(cat.id, "w-5 h-5 text-white group-hover:text-[#efc600]")}
                        </div>
                        <h4 className="font-extrabold text-xs text-white group-hover:text-[#efc600] leading-snug transition-colors relative z-10">{cat.name}</h4>
                        <p className="text-[10px] text-slate-400 mt-1 relative z-10">{cat.count} trámites disponibles</p>
                        
                        {/* Interactive glow effect on hover */}
                        <div className="absolute top-0 right-0 w-8 h-8 bg-[#009cdf]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                      </div>
                    ))}
                  </div>

                  {/* Combined Interactive Action Prompt */}
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/25 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                    <div className="text-left">
                      <span className="text-[10px] text-[#009cdf] font-extrabold uppercase tracking-widest">Trámites e Impuestos</span>
                      <p className="text-xs text-slate-200 mt-1 font-medium">Consulte Impuesto Predial unificado, Patentes, Planos o adquiera sus Certificados.</p>
                    </div>
                    <button 
                      id="btn-landing-cta"
                      onClick={() => setCurrentView('login')}
                      className="cursor-pointer w-full sm:w-auto bg-[#efc600] hover:bg-[#efc600]/90 text-[#2e2f63] font-black py-3 px-6 rounded-xl text-xs transition-colors shadow-lg whitespace-nowrap"
                    >
                      INICIAR TRÁMITE AHORA
                    </button>
                  </div>
                </div>

              </div>

              {/* Footer with Mandatory Branding & Slogans (Attachment 1 Guidelines) */}
              <footer className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
                <div className="text-center md:text-left space-y-1">
                  <p>© 2026 Muy Ilustre Municipalidad de Guayaquil</p>
                  <p className="text-[10px] text-slate-500 font-medium">Transparencia activa garantizada por la Dirección de Informática (ICT) · LOTAIP Art. 7</p>
                </div>

                {/* Slogans Box replaced with SVG Footer Logo */}
                <img 
                  src="/assets/placeholder-ashlcdtaa-fc.svg" 
                  alt="Aquiles Alcalde - Así se hace la ciudad de todos" 
                  className="h-10 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
              </footer>

            </div>
          </div>
        )}

        {/* SCREEN 2: LOGIN VIEW (Split Screen Experience, page 6) */}
        {currentView === 'login' && (
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] bg-slate-950">
            
            {/* Split Left Block: Immersive visual brand (Communications Proposal) */}
            <div className="hidden lg:flex lg:col-span-7 relative bg-slate-900 items-center justify-center p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2e2f63]/90 via-[#2e2f63]/40 to-[#009cdf]/40"></div>
              
              <div className="relative z-10 text-left max-w-lg space-y-6">
                <img 
                  src="/assets/placeholder-mimg-logo-white.svg" 
                  alt="M.I. Municipalidad de Guayaquil" 
                  className="h-14 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-3xl font-black text-white tracking-tight leading-tight font-display">
                  Oficina Virtual Unificada del Ciudadano
                </h2>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Ingrese de forma segura con sus credenciales municipales para gestionar pagos, descargar certificados oficiales, revisar estado de planos y catastros.
                </p>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 w-fit text-xs text-slate-300">
                  <span>🔒 Seguridad avanzada con clave única de autenticación ciudadana.</span>
                </div>
              </div>
            </div>

            {/* Split Right Block: Access Form (Modernised layout from Portal 1.0) */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 bg-[#2e2f63] text-white text-left relative">
              <div className="flex justify-between items-center">
                <button 
                  id="btn-login-back"
                  onClick={() => setCurrentView('landing')} 
                  className="cursor-pointer text-slate-300 hover:text-white text-xs flex items-center gap-1.5 font-bold uppercase tracking-wider"
                >
                  <span>⬅</span> Volver al inicio
                </button>
                <span className="text-[10px] text-sky-400 font-mono tracking-widest font-extrabold">SERVICIOS EN LÍNEA</span>
              </div>

              <div className="max-w-md w-full mx-auto my-auto py-12 space-y-6">
                <div className="space-y-2 text-left">
                  <h3 className="text-3xl font-black font-display text-white">Inicia Sesión</h3>
                  <p className="text-slate-300 text-xs">Ingrese su identificación y clave ciudadana.</p>
                </div>

                <div className="space-y-4">
                  {/* Interactive Name Setup just for demonstration */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-[#efc600] uppercase tracking-wider">Nombre del Ciudadano (Simulado)</label>
                    <input 
                      type="text" 
                      value={inputName} 
                      onChange={(e) => setInputName(e.target.value)} 
                      className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#009cdf]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Cédula / RUC / Pasaporte</label>
                    <input 
                      type="text" 
                      value={inputCedula} 
                      onChange={(e) => setInputCedula(e.target.value)} 
                      placeholder="Ej. 0912837489" 
                      className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#009cdf]"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Contraseña</label>
                      <a href="#forgot" onClick={(e) => { e.preventDefault(); triggerToast('Soporte de contraseñas: Contacte al (+593 4) 2 594 800 ext. 1'); }} className="text-[10px] text-[#efc600] font-bold hover:underline">¿Olvidó su clave?</a>
                    </div>
                    <input 
                      type="password" 
                      value={inputPassword} 
                      onChange={(e) => setInputPassword(e.target.value)} 
                      placeholder="••••••••" 
                      className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#009cdf]"
                    />
                  </div>

                  <button 
                    id="btn-login-submit"
                    onClick={() => {
                      if (!inputCedula || !inputName) {
                        triggerToast('Por favor ingrese cédula y nombre para la simulación.');
                        return;
                      }
                      setUser({ name: inputName, ruc: inputCedula, isLogged: true });
                      setCurrentView('dashboard');
                      triggerToast(`¡Bienvenido al Portal Ciudadano, ${inputName}!`);
                    }}
                    className="cursor-pointer w-full bg-[#efc600] hover:bg-[#efc600]/90 text-[#2e2f63] font-black py-3.5 rounded-xl text-xs tracking-widest transition-colors uppercase mt-2 shadow-lg"
                  >
                    Ingresar al Escritorio
                  </button>
                </div>

                <div className="text-center pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-300">¿No está registrado en el portal? <a href="#register" onClick={(e) => { e.preventDefault(); triggerToast('Enlace de registro activado.'); }} className="text-sky-400 font-bold hover:underline">Regístrese aquí</a></p>
                </div>
              </div>

              {/* ICT Slogan */}
              <div className="text-center border-t border-white/10 pt-4 text-[10px] text-slate-400">
                Dirección de Tecnologías de la Información (ICT) · Guayaquil Unida
              </div>
            </div>

          </div>
        )}

        {/* SCREEN 3: DASHBOARD VIEW (Ultra functional ICT Layout with Premium Communications Aesthetics) */}
        {currentView === 'dashboard' && (
          <div className="flex-grow flex flex-col bg-slate-50 text-slate-800 text-left min-h-[85vh]">
            
            {/* Search and Quick action bar (TIC page 1) */}
            <div className="bg-[#2e2f63] text-white px-6 py-4 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 z-10 border-b border-white/10">
              <div className="flex items-center gap-4">
                <img 
                  src="/assets/placeholder-mimg-logo-white.svg" 
                  alt="M.I. Municipalidad de Guayaquil" 
                  className="h-10 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Dynamic Search Box (TIC Layout Priority) */}
              <div className="flex-grow max-w-lg mx-4 relative w-full md:w-auto">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search className="w-4 h-4" />
                </span>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="¿Qué trámite necesitas buscar hoy? (Ej. predial, catastro...)"
                  className="w-full bg-slate-950/40 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#009cdf] transition-all"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">✕</button>
                )}
              </div>

              {/* User badge and actions */}
              <div className="flex items-center gap-4 self-stretch justify-between md:self-auto">
                <div className="text-right leading-none">
                  <span className="block text-xs font-black text-[#efc600] tracking-wide">HOLA, {user.name}</span>
                  <span className="block text-[9px] text-slate-300 font-mono mt-0.5">Identificación: {user.ruc}</span>
                </div>
                <div className="h-8 w-[1px] bg-white/20"></div>
                <button 
                  id="btn-dashboard-logout"
                  onClick={() => {
                    setUser(u => ({...u, isLogged: false}));
                    setCurrentView('landing');
                    triggerToast('Sesión cerrada correctamente.');
                  }}
                  className="cursor-pointer bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-white p-2 rounded-xl border border-red-500/20 transition-all"
                  title="Cerrar Sesión"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Workspace Frame */}
            <div className="flex-grow max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Category selector sidebar (ICT Page 1 Left side) with styled graphics */}
              <aside className="col-span-1 lg:col-span-3 space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3.5 border-b border-slate-200">
                    <h3 className="font-extrabold text-xs text-slate-500 uppercase tracking-wider">Categorías de Trámites</h3>
                  </div>
                  <nav className="p-2 space-y-1">
                    {CATEGORIES.map((cat) => (
                      <button 
                        key={cat.id}
                        id={`dashboard-category-${cat.id}`}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full text-left px-3 py-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between text-xs font-bold border-l-4 ${
                          activeCategory === cat.id 
                            ? 'bg-[#009cdf]/10 text-[#2e2f63] border-l-[#009cdf] shadow-inner' 
                            : 'text-slate-600 border-l-transparent hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`p-1.5 rounded-lg ${activeCategory === cat.id ? 'bg-[#009cdf]/20 text-[#009cdf]' : 'bg-slate-100 text-slate-500'}`}>
                            {renderCategoryIcon(cat.id, "w-3.5 h-3.5")}
                          </span>
                          <span className="truncate">{cat.name}</span>
                        </div>
                        <span className="bg-slate-100 text-slate-500 font-mono text-[9px] px-2 py-0.5 rounded-full">{cat.count}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Left quick help banner (Communications graphics) */}
                <div className="bg-gradient-to-br from-[#2e2f63] to-[#009cdf] p-5 rounded-2xl text-white text-xs space-y-3 shadow-md relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
                  <h4 className="font-black text-sm text-[#efc600]">¿Necesita Soporte Directo?</h4>
                  <p className="text-slate-200 leading-relaxed">Nuestros agentes de TIC le atenderán vía telemática para resolver cualquier inconveniente.</p>
                  <div className="pt-2 border-t border-white/10 space-y-2 font-medium">
                    <p className="flex items-center gap-2">📞 <span className="text-slate-200">Línea: (+593) 4 2594 800</span></p>
                    <p className="flex items-center gap-2">✉ <span className="text-slate-200">soporte@guayaquil.gob.ec</span></p>
                  </div>
                </div>
              </aside>

              {/* Main functional workspace (Center & Right grid) */}
              <main className="col-span-1 lg:col-span-9 space-y-6 text-left">
                
                {/* Dynamic Welcome Message */}
                <div className="bg-gradient-to-r from-[#2e2f63] to-[#009cdf] p-6 rounded-3xl text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="relative z-10">
                    <span className="bg-[#efc600]/20 text-[#efc600] border border-[#efc600]/30 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase">Portal Ciudadano Oficial</span>
                    <h2 className="text-2xl font-black mt-2">Buenos días, {user.name} 👋</h2>
                    <p className="text-slate-200 text-xs mt-1 leading-relaxed">Su bandeja fiscal y técnica está conectada en tiempo real. Puede gestionar sus trámites de forma directa.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-center relative z-10 self-stretch sm:self-auto">
                    <p className="text-[10px] text-[#efc600] font-black uppercase tracking-wider">Fecha Actual</p>
                    <p className="text-sm font-bold mt-1 font-mono">24 de Junio, 2026</p>
                    <p className="text-[9px] text-slate-300 font-mono mt-0.5">Hora: 10:54 A.M.</p>
                  </div>
                </div>

                {/* High-Impact Statistics Grid (TIC Dashboard requirements) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {METRICS.map((card, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{card.title}</p>
                        <p className="text-2xl font-black text-slate-800 mt-2 tracking-tight">{card.value}</p>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium mt-1 leading-tight">{card.subText}</p>
                    </div>
                  ))}
                </div>

                {/* Live Filterable Civic Procedures list */}
                <section className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2">
                    <div>
                      <h3 className="font-black text-slate-800 text-xs uppercase tracking-wider">
                        Trámites del sector: <span className="text-[#009cdf]">{CATEGORIES.find(c => c.id === activeCategory)?.name}</span>
                      </h3>
                      <p className="text-[10px] text-slate-400 mt-0.5">Haga clic en cualquier tarjeta para ver requisitos e iniciar en línea de manera inmediata.</p>
                    </div>
                    <span className="bg-sky-50 text-[#009cdf] border border-sky-100 font-bold text-[9px] px-2.5 py-1 rounded-full self-start">
                      {filteredTramites.length} trámites cargados
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredTramites.map((tramite) => (
                      <div 
                        key={tramite.id}
                        id={`tramite-item-${tramite.id}`}
                        onClick={() => setSelectedTramite(tramite)}
                        className="cursor-pointer bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#009cdf] hover:shadow-md transition-all flex flex-col justify-between text-left group"
                      >
                        <div>
                          <h4 className="font-bold text-slate-800 text-xs group-hover:text-[#009cdf] transition-colors leading-snug line-clamp-2">{tramite.name}</h4>
                          <p className="text-slate-500 text-[11px] mt-1.5 leading-relaxed line-clamp-2">{tramite.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400">
                          <span className="flex items-center gap-1">⏱ Resolución: <strong className="text-slate-600">{tramite.durationDays} día(s)</strong></span>
                          <span className="text-[#efc600] font-bold bg-[#efc600]/10 border border-[#efc600]/20 px-2 py-0.5 rounded-lg text-[9px]">{tramite.cost}</span>
                        </div>
                      </div>
                    ))}
                    
                    {filteredTramites.length === 0 && (
                      <div className="col-span-2 py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                        <p className="text-sm">No se encontraron trámites coincidentes en esta categoría.</p>
                        <p className="text-xs text-slate-400 mt-1">Intente cambiar la palabra clave o la categoría seleccionada.</p>
                      </div>
                    )}
                  </div>
                </section>

                {/* Citizen Procedure Tracker Table (ICT layout page 2) */}
                <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Mis Trámites Recientes (Trazabilidad en tiempo real)</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Consulte el estado técnico e historial del expediente.</p>
                    </div>
                    <span className="text-[10px] text-[#009cdf] font-bold hover:underline cursor-pointer">Ver historial completo →</span>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="bg-slate-100 text-slate-500 font-semibold border-b border-slate-200 text-[9px] uppercase tracking-wider">
                          <th className="p-3">Código de Trámite</th>
                          <th className="p-3">Nombre del Trámite</th>
                          <th className="p-3">Fecha de Ingreso</th>
                          <th className="p-3">Categoría</th>
                          <th className="p-3">Estado actual</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentTramites.map((rec) => (
                          <tr key={rec.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                            <td className="p-3 font-mono text-[10px] text-[#009cdf] font-bold">{rec.code}</td>
                            <td className="p-3 font-bold text-slate-700 leading-snug">{rec.name}</td>
                            <td className="p-3 text-slate-400 whitespace-nowrap">{rec.date}</td>
                            <td className="p-3 text-slate-500 whitespace-nowrap">{rec.category}</td>
                            <td className="p-3">
                              <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold inline-flex items-center gap-1 ${
                                rec.status === 'Pendiente' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                                rec.status === 'Finalizado' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                                rec.status === 'Observado' ? 'bg-rose-100 text-rose-700 border border-rose-200' :
                                'bg-sky-100 text-sky-700 border border-sky-200'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  rec.status === 'Pendiente' ? 'bg-amber-500' :
                                  rec.status === 'Finalizado' ? 'bg-emerald-500' :
                                  rec.status === 'Observado' ? 'bg-rose-500' :
                                  'bg-sky-500'
                                }`}></span>
                                {rec.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

              </main>

            </div>

            {/* Custom Interactive submission modal */}
            {selectedTramite && (
              <div id="procedure-modal" className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-left">
                  
                  {/* Modal Header */}
                  <div className="p-6 bg-[#2e2f63] text-white flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-[#efc600] font-black tracking-widest uppercase">Formulario de Inicio</span>
                      <h3 className="text-base font-black mt-1 leading-snug">{selectedTramite.name}</h3>
                    </div>
                    <button onClick={() => setSelectedTramite(null)} className="text-slate-300 hover:text-white bg-white/10 p-1.5 rounded-xl">✕</button>
                  </div>

                  {/* Modal Body */}
                  <div className="p-6 space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-slate-700">Descripción:</h4>
                      <p className="text-slate-500 mt-1 leading-relaxed">{selectedTramite.description}</p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="font-extrabold text-[#2e2f63] flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-[#009cdf]" />
                        <span>Requisitos Obligatorios (Deben subirse en formato PDF):</span>
                      </h4>
                      <ul className="list-disc list-inside mt-2.5 space-y-1.5 text-slate-600 pl-1 leading-relaxed">
                        {selectedTramite.requirements?.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        )) || (
                          <>
                            <li>Cédula de identidad</li>
                            <li>Formulario único municipal firmado</li>
                          </>
                        )}
                      </ul>
                    </div>

                    {/* Simulated document upload */}
                    <div className="space-y-1 text-left">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Cargar Expediente Técnico (.zip o .pdf)</label>
                      <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center bg-slate-50 hover:bg-slate-100/50 hover:border-[#009cdf] transition-all cursor-pointer">
                        <span className="text-xl">📁</span>
                        <p className="text-[11px] font-bold text-slate-600 mt-1">Arrastre o seleccione sus documentos requeridos</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">Tamaño máximo admitido: 25 MB</p>
                      </div>
                    </div>

                    {/* Meta info boxes */}
                    <div className="grid grid-cols-2 gap-4 pt-2 text-[10px]">
                      <div className="bg-slate-50 p-3 rounded-xl text-center border border-slate-100">
                        <span className="text-slate-400 block font-medium">Resolución Técnica</span>
                        <strong className="text-slate-700 text-xs">{selectedTramite.durationDays} día(s) hábiles</strong>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl text-center border border-slate-100">
                        <span className="text-slate-400 block font-medium">Costo de Tasa</span>
                        <strong className="text-[#009cdf] text-xs">{selectedTramite.cost}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Modal Action Footer */}
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
                    <button 
                      id="btn-modal-cancel"
                      onClick={() => setSelectedTramite(null)} 
                      className="cursor-pointer px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-xl font-bold text-xs transition-colors"
                    >
                      Cancelar
                    </button>
                    <button 
                      id="btn-modal-submit"
                      onClick={() => handleStartProcedure(selectedTramite)}
                      className="cursor-pointer px-5 py-2.5 bg-[#efc600] hover:bg-[#efc600]/95 text-[#2e2f63] rounded-xl font-black text-xs transition-colors shadow-md uppercase tracking-wider"
                    >
                      INICIAR TRÁMITE ONLINE
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* DEVELOPER WORKSPACE PANEL (Angular 17 Production-Ready Code Viewer) */}
      {isCodeOpen && (
        <div id="developer-panel" className="w-full lg:w-[50%] bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col z-30 shadow-2xl relative">
          
          {/* Developer Panel Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-left">
              <span className="p-1.5 rounded-lg bg-[#efc600]/20 text-[#efc600]">
                <FileCode className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                  Workspace de Angular 17+
                  <span className="bg-[#009cdf] text-white text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider">STANDALONE</span>
                </h3>
                <p className="text-[10px] text-slate-400">Entrega de código fuente limpio para el equipo de desarrollo ICT.</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsCodeOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 hover:bg-slate-700"
              title="Cerrar Panel de Código"
            >
              ✕
            </button>
          </div>

          {/* Quick Explanation Summary Block */}
          <div className="p-4 bg-slate-950/60 border-b border-slate-800 text-left text-xs leading-relaxed space-y-3">
            <h4 className="font-bold text-[#efc600] flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Resumen de Fusión Arquitectónica (TIC + Comunicación)
            </h4>
            <p className="text-slate-300">
              Este prototipo equilibra la <strong>trazabilidad, velocidad y estructuración del Escritorio de TIC</strong> con la <strong>experiencia inmersiva y de alto impacto del departamento de Comunicación</strong>, respetando la paleta de colores oficial de la Municipalidad de Guayaquil (<strong>Azul Marino Ming `#2e2f63`</strong>, <strong>Celeste Ming `#009cdf`</strong> y <strong>Amarillo `#efc600`</strong>).
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <p className="text-[#009cdf] font-bold text-[10px] uppercase">Aporte ICT (Tercer adjunto)</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Estructura limpia, buscador de trámites inmediato, widgets numéricos y trazabilidad del expediente.</p>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <p className="text-[#efc600] font-bold text-[10px] uppercase">Aporte Comunicación (Cuarto adjunto)</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Estilo inmersivo con Palacio de Guayaquil, glassmorphism con bordes curvos y transiciones limpias.</p>
              </div>
            </div>
          </div>

          {/* Codebase File Navigator */}
          <div className="flex-grow flex flex-col min-h-[400px]">
            
            {/* Search inside Codebase */}
            <div className="p-3 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
              <SearchCode className="w-4 h-4 text-slate-400" />
              <input 
                type="text"
                value={codeSearchQuery}
                onChange={(e) => setCodeSearchQuery(e.target.value)}
                placeholder="Buscar archivos o código (Ej. service, landing, component)..."
                className="bg-transparent text-xs text-white placeholder-slate-500 outline-none w-full"
              />
              {codeSearchQuery && (
                <button onClick={() => setCodeSearchQuery('')} className="text-slate-400 hover:text-white text-xs">✕</button>
              )}
            </div>

            {/* Layout Split: Left vertical file list, Right code content */}
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden relative">
              
              {/* Left sidebar: File Tree */}
              <div className="w-full md:w-48 bg-slate-950/50 border-b md:border-b-0 md:border-r border-slate-800 overflow-y-auto max-h-[150px] md:max-h-none text-left p-2">
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-2 py-1">Estructura del Proyecto</p>
                <div className="space-y-1 mt-1">
                  {filteredCodeFiles.map((file, idx) => {
                    const originalIndex = ANGULAR_CODEBASE.findIndex(f => f.name === file.name);
                    return (
                      <button 
                        key={file.name}
                        onClick={() => setActiveCodeFileIndex(originalIndex)}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 truncate ${
                          activeCodeFileIndex === originalIndex 
                            ? 'bg-[#009cdf] text-white font-bold shadow' 
                            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                        }`}
                      >
                        <span className="text-[11px]">
                          {file.name.endsWith('.html') ? '🌐' : file.name.endsWith('.ts') ? '⚙️' : '🎨'}
                        </span>
                        <span className="truncate">{file.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right View: Live code reader with search results and copying */}
              <div className="flex-grow flex flex-col bg-slate-900 overflow-hidden relative text-left">
                
                {/* File Path and Actions */}
                <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="truncate">📁 {ANGULAR_CODEBASE[activeCodeFileIndex]?.path}</span>
                  <button 
                    onClick={() => handleCopyCode(ANGULAR_CODEBASE[activeCodeFileIndex].content)}
                    className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-2.5 py-1 rounded flex items-center gap-1 transition-all"
                  >
                    <Copy className="w-3 h-3 text-[#efc600]" />
                    <span>Copiar</span>
                  </button>
                </div>

                {/* Actual code contents inside scrollable area */}
                <div className="flex-grow overflow-auto p-4 font-mono text-xs text-slate-300 bg-slate-950/40 relative">
                  <pre className="text-left select-all whitespace-pre leading-relaxed">
                    <code>{ANGULAR_CODEBASE[activeCodeFileIndex]?.content}</code>
                  </pre>
                </div>

                {/* Floating helpful copy button inside code block */}
                <div className="absolute right-4 bottom-4">
                  <button 
                    onClick={() => handleCopyCode(ANGULAR_CODEBASE[activeCodeFileIndex].content)}
                    className="cursor-pointer bg-[#efc600] hover:bg-[#efc600]/90 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-2xl hover:scale-105 transition-all"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copiar todo el archivo</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Quick Angular Architecture Overview */}
          <div className="bg-slate-950 p-4 border-t border-slate-800 text-left text-xs space-y-2">
            <h5 className="font-extrabold text-white text-[11px] uppercase tracking-wider">Aspectos Clave de Implementación Angular:</h5>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1 text-[11px]">
              <li><strong className="text-slate-300">Standalone Components:</strong> No requiere <code className="text-sky-400">NgModule</code>, imports simplificados.</li>
              <li><strong className="text-slate-300">Modern Control Flow:</strong> Reemplaza directivas heredadas con <code className="text-sky-400">@if</code> y <code className="text-sky-400">@for</code>.</li>
              <li><strong className="text-slate-300">Angular Signals:</strong> Empleado en <code className="text-emerald-400">PortalService</code> para actualizaciones reactivas síncronas.</li>
            </ul>
          </div>

        </div>
      )}

    </div>
  );
}

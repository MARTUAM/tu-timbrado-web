
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './src/components/Logo';
import { 
  User,
  Building2,
  Layers,
  Infinity,
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  Check, 
  Heart, 
  Clock, 
  Lock, 
  AlertCircle, 
  Instagram, 
  Facebook,
  Youtube,
  Twitter,
  Music,
  MessageCircle, 
  Menu,
  X,
  Plus,
  ArrowLeft,
  FileText,
  Gavel,
  ShieldCheck,
  RotateCcw,
  CreditCard,
  UserCheck,
  HelpCircle,
  AlertTriangle,
  Info,
  Users,
  Truck,
  Briefcase,
  Home,
  TrendingUp,
  PlusCircle,
  MinusCircle,
  Coins,
  ArrowUpRight,
  ArrowDownLeft,
  UserCog,
  FileCheck,
  ClipboardCheck,
  Zap,
  Smartphone,
  ShieldAlert,
  Settings,
  Activity,
  Mail,
  Phone,
  Send,
  MapPin,
  Fingerprint,
  Loader2
} from 'lucide-react';

// --- Shared Components & Utilities ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants: any = {
    primary: 'bg-yellow-400 hover:bg-yellow-500 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
    secondary: 'bg-black hover:bg-gray-800 text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]',
    outline: 'border-2 border-black hover:bg-gray-50 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
    ghost: 'text-gray-600 hover:text-black hover:bg-gray-50'
  };

  return (
    <button 
      className={`px-8 py-3 rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SketchCard = ({ children, className = '', skew = '', onClick }: any) => (
  <div 
    onClick={onClick}
    className={`sketch-card p-6 bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer hover:-translate-y-1 active:translate-y-0 active:shadow-none ${skew} ${className}`}
  >
    {children}
  </div>
);

// --- Sections ---

const Navbar = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-left">
            <Logo className="w-40 md:w-52 h-auto" />
          </button>
          
          <div className="hidden lg:flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3 py-1.5 rounded-full shadow-sm">
            <div className="w-5 h-5 bg-cyan-500 text-white rounded-full flex items-center justify-center border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] scale-75">
              <Check className="w-3 h-3 stroke-[4]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-900">Software Certificado por el SAT</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-bold text-gray-500 uppercase tracking-wider">
            <button onClick={() => onNavigate('faq')} className="hover:text-black transition-colors">FAQ</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-black transition-colors">Contacto</button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex scale-90 px-8 py-3 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all">Acceder</Button>
          <Button variant="primary" className="hidden md:flex scale-90">Empezar gratis</Button>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-black p-6 md:hidden flex flex-col gap-6 shadow-xl">
          <div className="flex items-center gap-2 bg-cyan-50 border border-cyan-200 px-3 py-2 rounded-xl mb-2">
            <div className="w-5 h-5 bg-cyan-500 text-white rounded-full flex items-center justify-center border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] scale-75">
              <Check className="w-3 h-3 stroke-[4]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-900">Software Certificado por el SAT</span>
          </div>
          <button onClick={() => { onNavigate('faq'); setMobileMenuOpen(false); }} className="font-bold text-xl text-left">FAQ</button>
          <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="font-bold text-xl text-left">Contacto</button>
          <Button variant="primary" className="w-full">Empezar gratis</Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 flex items-center min-h-[85vh] bg-white">
      <div className="max-w-7xl mx-auto w-full bg-yellow-50 rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center p-8 lg:p-16">
          {/* Left Side: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 relative z-20">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-medium leading-[1.05] mb-6 tracking-tight text-black drop-shadow-sm max-w-2xl mx-auto lg:mx-0">
              Factura en segundos, <br /> 
              <span className="relative inline-block mt-2">
                No en horas
                <span className="absolute bottom-2 left-0 w-full h-4 bg-cyan-400/80 -z-10 rotate-1 shadow-sm animate-draw-underline"></span>
              </span> como la competencia.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Factura desde cualquier dispositivo conectado a internet.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-10">
              <div className="flex items-center gap-2.5 group cursor-help">
                <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <User className="w-4.5 h-4.5 text-black" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">Persona Física</span>
              </div>
              <div className="flex items-center gap-2.5 group cursor-help">
                <div className="w-9 h-9 rounded-full bg-cyan-400 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <Building2 className="w-4.5 h-4.5 text-black" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">Persona Moral</span>
              </div>
              <div className="flex items-center gap-2.5 group cursor-help">
                <div className="w-9 h-9 rounded-full bg-pink-400 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <Layers className="w-4.5 h-4.5 text-black" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">MultiRFC</span>
              </div>
              <div className="flex items-center gap-2.5 group cursor-help">
                <div className="w-9 h-9 rounded-full bg-lime-400 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <Infinity className="w-4.5 h-4.5 text-black" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">Sin Vigencia</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              <Button variant="primary" className="text-base py-4 px-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                Empezar gratis <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-tighter">
                <Check className="w-3.5 h-3.5 text-green-500 stroke-[4]" /> No requiere tarjeta
              </div>
            </div>
          </div>

          {/* Right Side: Computer Image */}
          <div className="relative h-[350px] lg:h-[450px] w-full flex items-center justify-center lg:justify-end order-1 lg:order-2">
            {/* Decorative background blob */}
            <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse right-0" />
            
            {/* Computer Frame */}
            <div className="relative w-[280px] lg:w-[420px] h-[200px] lg:h-[280px] border-4 border-black rounded-2xl bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden group rotate-2 hover:rotate-0 transition-all duration-500 z-10 translate-x-0 lg:translate-x-4">
              {/* Browser Top Bar */}
              <div className="h-6 lg:h-8 border-b-4 border-black bg-gray-100 flex items-center px-3 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-black"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-black"></div>
              </div>
              {/* Screen Content */}
              <div className="relative w-full h-[calc(100%-1.5rem)] lg:h-[calc(100%-2rem)]">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
                  alt="Sistema de facturación en línea" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent flex items-end p-4">
                  <div className="bg-black text-white text-[10px] font-black px-3 py-1.5 rounded-lg border-2 border-white shadow-lg uppercase tracking-widest">
                    Panel de Control
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements around computer */}
            <div className="absolute top-10 lg:top-16 right-0 lg:-right-6 bg-pink-400 text-black px-3 py-1.5 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12 z-20 font-black text-[9px] uppercase tracking-widest">
              100% Nube
            </div>
            <div className="absolute bottom-10 lg:bottom-16 left-10 lg:-left-4 bg-lime-400 text-black px-3 py-1.5 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 z-20 font-black text-[9px] uppercase tracking-widest">
              Rápido y Seguro
            </div>
            
            {/* Doodle SVGs */}
            <svg className="absolute top-0 left-1/4 w-10 h-10 text-yellow-400 drop-shadow-md animate-spin-slow z-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <svg className="absolute bottom-0 right-1/4 w-12 h-12 stroke-blue-500 drop-shadow-sm z-0 -rotate-12" viewBox="0 0 50 50" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 25 L15 10 L25 40 L35 10 L45 25" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    { icon: <FileCheck className="w-6 h-6" />, title: "Facturación", desc: "Emisión de CFDI 4.0 rápida y con validez oficial ante el SAT.", color: "bg-yellow-400" },
    { icon: <Users className="w-6 h-6" />, title: "Nómina", desc: "Timbrado exacto de sueldos, salarios y retenciones de tus empleados.", color: "bg-cyan-400" },
    { icon: <Coins className="w-6 h-6" />, title: "Complemento de pagos", desc: "Registro de parcialidades y liquidación de facturas pendientes.", color: "bg-yellow-300" },
    { icon: <Truck className="w-6 h-6" />, title: "Carta Porte", desc: "Acreditación legal de mercancías y transporte en territorio nacional.", color: "bg-pink-400" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Recibo de honorarios", desc: "Comprobantes profesionales para servicios independientes y consultoría.", color: "bg-lime-400" },
    { icon: <Home className="w-6 h-6" />, title: "Recibo de arrendamiento", desc: "Gestión de rentas para locales, oficinas o vivienda.", color: "bg-purple-300" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Recibo de ingresos", desc: "Control total de entradas de efectivo y cobros realizados.", color: "bg-orange-300" },
    { icon: <Heart className="w-6 h-6" />, title: "Recibo donativo", desc: "Comprobantes deducibles para donatarias autorizadas y asociaciones.", color: "bg-red-300" },
    { icon: <PlusCircle className="w-6 h-6" />, title: "Nota de cargo", desc: "Ajuste de saldos para incrementar el monto de una factura emitida.", color: "bg-blue-300" },
    { icon: <MinusCircle className="w-6 h-6" />, title: "Nota de crédito", desc: "Aplicación de descuentos, bonificaciones o devoluciones comerciales.", color: "bg-teal-300" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Constancias de retenciones", desc: "Reporte oficial de impuestos ritenidos a terceros.", color: "bg-indigo-300" }
  ];

  useEffect(() => {
    let animationFrameId: number;
    const scroll = () => {
      if (scrollRef.current && !isPaused && !selectedService) {
        scrollRef.current.scrollLeft += 0.8;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, selectedService]);

  return (
    <section id="services" className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="bg-yellow-400 text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">nuestros servicios</span>
          <h2 className="text-5xl md:text-6xl font-serif font-medium">Fácil, Sin Límites.</h2>
          <p className="text-gray-400 font-bold uppercase text-[12px] tracking-widest mt-2">toca cada carta para ver el servicio</p>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-hidden pb-12 pt-4 px-4 whitespace-nowrap"
            style={{ scrollbarWidth: 'none' }}
          >
            {[...services, ...services].map((service, i) => (
              <div key={i} className="inline-block min-w-[200px] md:min-w-[240px] whitespace-normal">
                <SketchCard 
                  onClick={() => setSelectedService(service)}
                  className="flex flex-col items-center text-center h-full min-h-[140px] justify-center" 
                  skew={i % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                >
                  <div className={`w-12 h-12 ${service.color} border-2 border-black rounded-xl flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold leading-tight font-serif">{service.title}</h3>
                </SketchCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal / Overlay de Detalle */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm transition-all animate-in fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="max-w-md w-full bg-white border-4 border-black rounded-3xl p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative rotate-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`w-16 h-16 ${selectedService.color} border-2 border-black rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
              {selectedService.icon}
            </div>
            <h3 className="text-4xl font-serif font-medium mb-4 text-black">{selectedService.title}</h3>
            <p className="text-black text-xl leading-relaxed mb-8">
              {selectedService.desc}
            </p>
            <button 
              onClick={() => setSelectedService(null)}
              className="text-gray-400 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-black transition-colors"
            >
              <X className="w-4 h-4" /> Toca para salir
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const PricingSection = ({ onNavigate }: { onNavigate: (view: string, option?: string) => void }) => {
  const packages = [
    { qty: "25", price: "$319.00", label: "Starter", color: "bg-white" },
    { qty: "50", price: "$499.00", label: "Básico", featured: true, color: "bg-yellow-50" },
    { qty: "100", price: "$849.00", label: "Plus", color: "bg-white" },
    { qty: "300", price: "$1,399.00", label: "Negocio", color: "bg-white" },
    { qty: "500", price: "$1,899.00", label: "Crecimiento", color: "bg-white" },
    { qty: "1,000", price: "$3,099.00", label: "Empresa", color: "bg-white" },
    { qty: "2,500", price: "$5,199.00", label: "Corporativo", color: "bg-white" },
    { qty: "5,000", price: "$9,399.00", label: "Elite", featured: true, color: "bg-cyan-50" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-yellow-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase mb-4 inline-block shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-black">Paquetes de Folios</span>
          <h2 className="text-5xl md:text-6xl font-serif font-medium mb-4">Planes de Carga</h2>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">Pagos únicos • Sin mensualidades • Folios sin vigencia</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <SketchCard 
              key={pkg.qty} 
              className={`flex flex-col p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${pkg.color} ${pkg.featured ? 'border-[3px] ring-4 ring-black/5' : 'border-2'}`} 
              skew={i % 3 === 0 ? 'rotate-1' : i % 3 === 1 ? '-rotate-1' : 'rotate-0'}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] z-10">
                  {pkg.qty === "50" ? "MÁS POPULAR 🔥" : "MEJOR VALOR 💎"}
                </div>
              )}
              
              <div className="mb-6 text-center">
                <h3 className={`text-[10px] font-black uppercase tracking-widest mb-2 ${pkg.featured ? 'text-black' : 'text-gray-400'}`}>
                  {pkg.label}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-serif font-medium">{pkg.qty}</span>
                  <span className="text-xs font-bold uppercase text-gray-400">Folios</span>
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-center items-center text-center mb-8">
                <div className="text-4xl font-black tracking-tight mb-2">{pkg.price}</div>
                <div className="flex flex-col gap-2 w-full mt-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 bg-gray-100/50 p-2 rounded-lg border border-black/5">
                    <Check className="w-3 h-3 text-green-500 stroke-[3]" />
                    <span>Sin fecha de caducidad</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 bg-gray-100/50 p-2 rounded-lg border border-black/5">
                    <Check className="w-3 h-3 text-green-500 stroke-[3]" />
                    <span>Multi-RFC incluido</span>
                  </div>
                </div>
              </div>

              <Button 
                variant={pkg.featured ? "primary" : "outline"} 
                onClick={() => onNavigate('contact')}
                className={`w-full py-4 font-black uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all`}
              >
                Seleccionar
              </Button>
            </SketchCard>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gradient-to-br from-black to-gray-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 border-4 border-black shadow-[15px_15px_0px_0px_rgba(255,255,0,1)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full -ml-24 -mb-24 blur-3xl group-hover:bg-cyan-400/20 transition-all duration-700" />
          
          <div className="space-y-4 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
              <Zap className="w-3 h-3 fill-current" /> Volumen Empresarial
            </div>
            <h4 className="text-3xl md:text-4xl font-serif font-medium leading-tight">¿Necesitas más de 5,000 folios?</h4>
            <p className="text-gray-400 font-bold text-lg max-w-xl">
              Diseñamos planes a la medida para empresas de alto volumen y distribuidores autorizados.
            </p>
          </div>
          
          <Button 
            variant="primary" 
            onClick={() => onNavigate('contact', 'personalizado')}
            className="bg-yellow-400 text-black border-white hover:bg-yellow-300 whitespace-nowrap text-lg py-6 px-10 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all relative z-10"
          >
            Contactar Ventas
          </Button>
        </div>
      </div>
    </section>
  );
};

const ContactPage = ({ onBack, initialOption = "" }: { onBack: () => void, initialOption?: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onBack();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [submitted, onBack]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simular envío
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack} className="group mb-12 flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:text-yellow-600 transition-colors">
          <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-yellow-400 transition-all bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Volver al inicio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 lg:pl-12">
            <div>
              <span className="bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase mb-6 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">Hablemos</span>
              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1] mb-8">Hablemos de tu Facturación</h1>
              <p className="text-lg text-gray-500 font-bold leading-relaxed max-w-lg">
                ¿Tienes dudas sobre los folios sin vigencia o el sistema MultiRFC? Nuestro equipo de expertos está listo para asesorarte.
              </p>
            </div>

            <div className="space-y-6">
              <SketchCard className="flex items-center gap-4 p-4 max-w-sm" skew="-rotate-0.5">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <p className="text-sm font-bold">Av. P.º de la Reforma 45, Cuauhtémoc, CDMX</p>
              </SketchCard>
            </div>
          </div>

          <div className="relative lg:max-w-lg mx-auto lg:ml-0">
            <SketchCard className={`bg-yellow-50 p-8 border-4 transition-all duration-500 ${submitted ? 'opacity-20 grayscale pointer-events-none' : ''}`} skew="rotate-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1">Nombre Completo *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      required 
                      type="text" 
                      placeholder="Tu nombre aquí..." 
                      className="w-full bg-white border-2 border-black rounded-xl py-3 pl-10 pr-4 font-bold focus:ring-4 ring-yellow-400/30 outline-none transition-all placeholder:text-gray-300 text-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1">RFC *</label>
                  <div className="relative">
                    <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      required 
                      type="text" 
                      placeholder="Tu RFC" 
                      className="w-full bg-white border-2 border-black rounded-xl py-3 pl-10 pr-4 font-bold focus:ring-4 ring-yellow-400/30 outline-none transition-all placeholder:text-gray-300 uppercase text-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Correo Electrónico *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        required 
                        type="email" 
                        placeholder="hola@ejemplo.com" 
                        className="w-full bg-white border-2 border-black rounded-xl py-3 pl-10 pr-4 font-bold focus:ring-4 ring-yellow-400/30 outline-none transition-all placeholder:text-gray-300 text-sm" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Teléfono *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        required 
                        type="tel" 
                        placeholder="10 dígitos" 
                        className="w-full bg-white border-2 border-black rounded-xl py-3 pl-10 pr-4 font-bold focus:ring-4 ring-yellow-400/30 outline-none transition-all placeholder:text-gray-300 text-sm" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1">¿En qué podemos ayudarte? *</label>
                  <div className="relative">
                    <select 
                      required 
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="w-full bg-white border-2 border-black rounded-xl p-4 pr-10 font-bold focus:ring-4 ring-yellow-400/30 outline-none transition-all appearance-none cursor-pointer text-sm"
                    >
                      <option value="" disabled>SELECCIONA UNA OPCIÓN...</option>
                      <option value="personalizado">DESEO UN PAQUETE DE FOLIOS PERSONALIZADO</option>
                      <option value="multirfc">DESEO CONTRATAR SISTEMA MultiRFC</option>
                      <option value="soporte">DESEO ASISTENCIA DE SOPORTE</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
                  </div>
                </div>

                <Button disabled={isSending} type="submit" className="w-full py-4 text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-0 active:translate-y-2 transition-all mt-4">
                  {isSending ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Enviando...</>
                  ) : (
                    <>Enviar Mensaje <Send className="w-5 h-5 ml-2" /></>
                  )}
                </Button>
                
                <p className="text-[10px] font-bold text-center text-gray-400 uppercase tracking-widest italic">
                  * Todos los campos son obligatorios.
                </p>
              </form>
            </SketchCard>

            {/* Success Overlay */}
            {submitted && (
              <div className="absolute inset-0 z-20 flex items-center justify-center p-4 animate-in zoom-in-95 duration-300">
                <div className="bg-white border-4 border-black p-10 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center max-w-sm rotate-0 scale-110">
                  <div className="w-20 h-20 bg-green-400 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Check className="w-10 h-10 text-black stroke-[4]" />
                  </div>
                  <h3 className="text-3xl font-serif font-black mb-3">¡Mensaje Enviado!</h3>
                  <p className="font-bold text-gray-600 mb-6">Te contactaremos muy pronto. <br/> Redireccionando al inicio...</p>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 animate-[draw-underline_3.5s_linear_forwards]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MultiRFCSection = ({ onNavigate }: { onNavigate: (view: string) => void }) => (
  <section className="py-24 px-6 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="bg-black text-white rounded-[4rem] p-8 md:p-16 shadow-[12px_12px_0px_0px_rgba(250,204,21,1)] relative border-4 border-black">
        <div className="absolute top-10 right-10 opacity-10 hidden md:block">
          <Settings className="w-24 h-24 animate-spin-slow" />
        </div>
        
        <div className="mb-12">
          <span className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase mb-4 inline-block shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]">Solución Corporativa</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight max-w-3xl mb-4">Sistema Multi-RFC: Todo tu despacho en un solo lugar</h2>
          <p className="text-gray-400 text-lg max-w-2xl">Factura para todas tus empresas de forma rápida, eficiente y sin tener que cambiar de cuenta.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* ¿Por qué elegirnos? */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2 text-yellow-400">
              <Check className="w-6 h-6" /> ¿Por qué elegirnos?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Una sola sesión", desc: "Gestiona múltiples RFCs desde el mismo panel.", color: "border-cyan-400" },
                { title: "Folios compartidos", desc: "Distribuye tu saldo libremente entre empresas.", color: "border-pink-400" },
                { title: "Pago inteligente", desc: "Un solo pago por sistema; recarga lo que consumas.", color: "border-yellow-400" },
                { title: "Siempre al día", desc: "Actualizaciones SAT y lista negra (69-B) incluidas.", color: "border-cyan-400" }
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-2xl bg-white/5 border-l-4 ${item.color}`}>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emite + Pasos */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-400">Emite todo lo que necesitas:</h3>
              <div className="flex flex-wrap gap-2">
                {["Facturas", "Nómina", "Carta Porte", "Complementos de Pago", "Retenciones", "Honorarios", "Arrendamiento", "Donatarias"].map((tag, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">{tag}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Comienza en 3 pasos:</h3>
              <div className="space-y-3">
                {[
                  { step: "1", label: "Elige tu paquete", desc: "Cotiza tu volumen de folios." },
                  { step: "2", label: "Asigna al Administrador", desc: "Registra el RFC principal." },
                  { step: "3", label: "Agrega tus empresas", desc: "Da de alta los RFCs adicionales." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-black shrink-0">{s.step}</span>
                    <div className="text-xs">
                      <span className="font-bold text-white">{s.label}:</span> <span className="text-gray-400">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="py-4 px-12 text-base shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none"
            >
              QUIERO CONTRATAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQPage = ({ onBack }: { onBack: () => void }) => {
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  const faqData = [
    {
      category: "Sobre los Folios y su Vigencia",
      icon: <Clock className="w-6 h-6" />,
      items: [
        { q: "¿Es verdad que los folios no caducan?", a: "¡Totalmente! En Tu Timbrado, tus folios son tuyos hasta que te los acabes. No importa si los usas en una semana, un año o cinco; tu saldo siempre estará disponible. Sin letras chiquitas." },
        { q: "¿Qué pasa si compro un paquete grande y tardo mucho en usarlo?", a: "Nada. Tu inversión está segura. A diferencia de otros sistemas que te obligan a renovar cada año o te quitan lo que no usaste, nosotros respetamos tu compra indefinidamente." },
        { q: "¿Un folio equivale a una factura?", a: "Sí. Se descuenta un folio por cada CFDI que emitas (factura, recibo de nómina, complemento de pago o nota de crédito). La cancelación de facturas en nuestro sistema también consume un folio debido al proceso de timbrado ante el SAT." }
      ]
    },
    {
      category: "Uso del Sistema",
      icon: <Smartphone className="w-6 h-6" />,
      items: [
        { q: "¿Qué necesito para empezar a facturar?", a: "Solo necesitas tu RFC, tu Régimen Fiscal y tus archivos del Certificado de Sello Digital (CSD) vigentes (.cer y .key). Una vez cargados, podrás emitir facturas en segundos." },
        { q: "¿El sistema sirve para Personas Físicas y Morales?", a: "Sí, Tu Timbrado está diseñado para adaptarse a ambos. Ya seas un freelancer (RESICO, Actividad Profesional) o una empresa consolidada, el sistema cumple con todos los requisitos legales." },
        { q: "¿Tengo que instalar algún software en mi computadora?", a: "No. Tu Timbrado es un sistema 100% en la nube. Puedes facturar desde cualquier computadora o dispositivo con internet entrando a https://tutimbrado.mx." }
      ]
    },
    {
      category: "Seguridad y Cumplimiento (SAT)",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        { q: "¿El sistema está actualizado con la versión 4.0 del SAT?", a: "Sí, siempre. Nos encargamos de todas las actualizaciones técnicas y legales para que tú solo te preocupes por vender. Tu facturación siempre será válida y verificable ante la autoridad." },
        { q: "¿Cómo protegen mis Sellos Digitales (CSD)?", a: "Usamos cifrado de grado bancario (SSL) para proteger toda tu información. Tus sellos solo se utilizan para el proceso automatizado de timbrado y nunca son compartidos con terceros ajenos a la certificación." }
      ]
    },
    {
      category: "Pagos y Devoluciones",
      icon: <CreditCard className="w-6 h-6" />,
      items: [
        { q: "¿Emiten factura por mi compra de folios?", a: "Claro que sí. Al ser un sistema de facturación, predicamos con el ejemplo. En cuanto realizas tu pago, puedes generar tu factura desde tu panel de usuario." },
        { q: "¿Puedo pedir un reembolso si ya no quiero usar el sistema?", a: "Debido a que nuestros folios no tienen vigencia, el saldo permanece a tu favor de forma indefinida. Por esta razón, y por tratarse de un producto digital de entrega inmediata, no realizamos reembolsos una vez acreditados los folios. Te sugerimos empezar con un paquete pequeño para que te enamores del sistema." }
      ]
    }
  ];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-yellow-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="group mb-12 flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:text-yellow-600 transition-colors">
          <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-yellow-400 transition-all bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Volver al inicio
        </button>

        <div className="text-center mb-16">
          <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] border border-black">Centro de Ayuda</span>
          <h1 className="text-6xl font-serif font-medium mb-4 text-center">Empecemos con el pie derecho</h1>
        </div>

        <div className="space-y-16">
          {faqData.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {cat.icon}
                </div>
                <h2 className="text-3xl font-serif font-bold border-b-4 border-yellow-400/50 pb-1">{cat.category}</h2>
              </div>
              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={itemIdx} className={`border-2 border-black rounded-2xl overflow-hidden bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1`}>
                      <button 
                        onClick={() => setOpenKey(isOpen ? null : key)} 
                        className="w-full p-6 text-left flex items-center justify-between font-bold text-xl hover:bg-gray-50 transition-colors"
                      >
                        <span className="max-w-[85%]">{item.q}</span>
                        <div className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center transition-transform shrink-0 ${isOpen ? 'rotate-180 bg-yellow-400' : 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>
                          <ChevronDown className="w-6 h-6" />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t-2 border-black/10 text-lg animate-in slide-in-from-top-2">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PrivacyPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="group mb-12 flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:text-yellow-600 transition-colors">
          <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-yellow-400 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Volver al inicio
        </button>
        <div className="mb-16">
          <span className="bg-yellow-400 text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">Legal</span>
          <h1 className="text-6xl md:text-7xl font-serif font-medium leading-tight mb-4 text-black">Aviso de Privacidad Integral</h1>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mt-4 italic">Última actualización: Febrero de 2026</p>
        </div>

        <div className="space-y-12 text-gray-800 leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-yellow-400 pl-4">1. IDENTIDAD Y DOMICILIO DEL RESPONSABLE</h2>
            <p>
              Tu Timbrado S. de R.L. de C.V. (en lo sucesivo denominado como "Tu Timbrado"), con domicilio para oír y recibir notificaciones en Av. P.º de la Reforma 45, Cuauhtémoc, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX, es el responsable del uso y protección de sus datos personales, y al respecto le informa lo siguiente:
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-cyan-400 pl-4">2. DATOS PERSONALES QUE SERÁN SOMETIDOS A TRATAMIENTO</h2>
            <p>Para la correcta prestación de los servicios de facturación electrónica a través de nuestro portal https://tutimbrado.mx, recabaremos las siguientes categorías de datos:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Datos de Identificación:</strong> Nombre completo o Razón Social, identificación oficial del representante legal y firma electrónica.</li>
              <li><strong>Datos de Contacto:</strong> Domicilio fiscal completo, dirección de correo electrónico (hola@tutimbrado.mx u otros proporcionados por el usuario) y número telefónico.</li>
              <li><strong>Datos Fiscales y de Certificación:</strong> Registro Federal de Contribuyentes (RFC), Régimen Fiscal, Cédula de Identificación Fiscal (CIF), Certificado de Sello Digital (CSD), Llave Privada (.key), y contraseñas asociadas necesarias para el timbrado.</li>
              <li><strong>Datos Patrimoniales o Financieros:</strong> Información de cuentas bancarias o tarjetas para el procesamiento de pagos de paquetes de folios.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-yellow-400 pl-4">3. FINALIDADES DEL TRATAMIENTO</h2>
            <p>Los datos personales que recabamos serán utilizados para las siguientes finalidades primarias (necesarias para el servicio):</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Proveer el sistema de generación, validación y certificación (timbrado) de Comprobantes Fiscales Digitales por Internet (CFDI).</li>
              <li>Gestionar el alta de su cuenta de usuario y la administración de sus paquetes de folios sin vigencia.</li>
              <li>Realizar el envío de los archivos XML y PDF generados a los correos electrónicos que usted designe.</li>
              <li>Procesar pagos y emitir las facturas correspondientes por la compra de nuestros servicios.</li>
              <li>Brindar soporte técnico y atención al cliente para resolver dudas sobre la plataforma.</li>
            </ul>
            <p>Finalidades secundarias:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Informarle sobre actualizaciones del sistema o nuevas funcionalidades relacionadas con normativas fiscales (como Verifactu o actualizaciones del SAT).</li>
              <li>Envío de promociones exclusivas sobre paquetes de timbres.</li>
            </ul>
            <p className="italic text-sm text-gray-500">Usted puede manifestar su negativa para estas finalidades secundarias enviando un correo a hola@tutimbrado.mx.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-pink-400 pl-4">4. TRANSFERENCIA DE DATOS PERSONALES</h2>
            <p>Le informamos que sus datos personales son compartidos dentro y fuera del país con los siguientes terceros:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Servicio de Administración Tributaria (SAT):</strong> Para la validación oficial de los comprobantes.</li>
              <li><strong>Proveedores Autorizados de Certificación (PAC):</strong> Con el único fin de obtener el sello digital del SAT para sus facturas.</li>
              <li><strong>Instituciones Bancarias:</strong> Para el procesamiento seguro de sus pagos.</li>
            </ul>
            <p className="font-bold">No vendemos ni comercializamos su información con terceros ajenos a estas operaciones legales.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-lime-400 pl-4">5. VIGENCIA DE LOS FOLIOS Y RESGUARDO DE INFORMACIÓN</h2>
            <p>
              Se hace constar que los folios adquiridos en Tu Timbrado no tienen caducidad. Por lo tanto, su información de usuario y saldos se mantendrán vigentes en nuestra base de datos mientras la cuenta no sea cancelada por el usuario. Respecto a los CFDI generados, Tu Timbrado los resguardará por el periodo que marquen las leyes fiscales vigentes.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-purple-400 pl-4">6. MEDIDAS DE SEGURIDAD</h2>
            <p>
              En Tu Timbrado S. de R.L. de C.V. contamos con medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración o acceso no autorizado. El acceso a nuestro portal https://tutimbrado.mx cuenta con protocolos de cifrado de grado bancario (SSL).
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-orange-400 pl-4">7. DERECHOS ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
            <p>
              Usted tiene derecho a conocer qué datos tenemos (Acceso), corregirlos (Rectificación), solicitar su eliminación (Cancelación) u oponerse al uso para fines específicos (Oposición). Para ejercer estos derechos, debe enviar una solicitud escrita al correo: <strong>hola@tutimbrado.mx</strong>, adjuntando una identificación oficial para verificar su identidad.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-blue-400 pl-4">8. USO DE COOKIES</h2>
            <p>
              Nuestro sitio web utiliza cookies para mejorar la experiencia de usuario y agilizar el proceso de login. Estas tecnologías no recaban datos sensibles y pueden ser desactivadas desde la configuración de su navegador.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-teal-400 pl-4">9. CAMBIOS AL AVISO DE PRIVACIDAD</h2>
            <p>
              El presente aviso puede sufrir modificaciones por nuevos requerimientos legales o cambios en nuestro modelo de negocio. Cualquier cambio será publicado en nuestro sitio web oficial: <strong>https://tutimbrado.mx</strong>.
            </p>
          </section>

          <SketchCard className="bg-yellow-50/50" skew="rotate-0">
            <h3 className="text-xl font-bold mb-4">Aceptación:</h3>
            <p>
              Al utilizar los servicios de Tu Timbrado S. de R.L. de C.V., usted reconoce haber leído y aceptado los términos de este Aviso de Privacidad Integral.
            </p>
          </SketchCard>
        </div>
      </div>
    </div>
  );
};

const TermsPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="group mb-12 flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:text-yellow-600 transition-colors">
          <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-yellow-400 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Volver al inicio
        </button>
        <div className="mb-16">
          <span className="bg-yellow-400 text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">Términos</span>
          <h1 className="text-6xl md:text-7xl font-serif font-medium leading-tight mb-4 text-black">Términos y Condiciones de Uso</h1>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mt-4 italic">Última actualización: Febrero de 2026</p>
        </div>

        <div className="space-y-12 text-gray-800 leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-yellow-400 pl-4 uppercase">1. RELACIÓN CONTRACTUAL</h2>
            <p>
              El presente contrato de Términos y Condiciones (en adelante "El Contrato") regula el acceso y uso de la plataforma tecnológica de facturación electrónica disponible en el sitio web https://tutimbrado.mx (en adelante "La Plataforma"), propiedad de Tu Timbrado S. de R.L. de C.V. (en adelante "Tu Timbrado"), con domicilio legal en Av. P.º de la Reforma 45, Cuauhtémoc, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX.
            </p>
            <p>Al crear una cuenta, adquirir folios o utilizar cualquier herramienta de La Plataforma, el Usuario acepta de manera expresa y sin reserva alguna los términos aquí establecidos. Si el Usuario no está de acuerdo, deberá abstenerse de utilizar el servicio.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-cyan-400 pl-4 uppercase">2. OBJETO DEL SERVICIO</h2>
            <p>Tu Timbrado pone a disposición del Usuario un sistema de software en la nube para la generación, validación, expedición y administración de Comprobantes Fiscales Digitales por Internet (CFDI) conforme a los estándares del Servicio de Administración Tributaria (SAT).</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-yellow-400 pl-4 uppercase">3. VIGENCIA DE LOS FOLIOS (TIMBRES)</h2>
            <p>Una de las condiciones principales y distintivas de nuestro servicio es la siguiente:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Sin Caducidad:</strong> Los folios de timbrado adquiridos por el Usuario a través de https://tutimbrado.mx NO TIENEN VIGENCIA.</li>
            </ul>
            <p>El Usuario podrá consumir sus folios en el momento que lo desee, ya sea en días, meses o años posteriores a la compra, siempre que la cuenta se mantenga activa y no haya sido dada de baja por violación a estos términos.</p>
            <p>Esta condición aplica para todos los paquetes de folios, a menos que se especifique lo contrario en una promoción temporal debidamente señalada.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-pink-400 pl-4 uppercase">4. REGISTRO Y RESPONSABILIDAD DE LA CUENTA</h2>
            <p>Para utilizar el servicio, el Usuario deberá completar un registro. El Usuario garantiza que:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Toda la información proporcionada (RFC, Nombre/Razón Social, Régimen) es verídica.</li>
              <li>Es responsable único de mantener la confidencialidad de sus credenciales de acceso.</li>
              <li>El uso de sus Certificados de Sello Digital (CSD) dentro de la plataforma es bajo su exclusiva responsabilidad. Tu Timbrado no se hace responsable por el mal uso de los sellos o la generación de facturas con datos erróneos por parte del Usuario.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-lime-400 pl-4 uppercase">5. PAGOS Y FACTURACIÓN</h2>
            <p>El Usuario pagará por adelantado los paquetes de folios mediante los métodos de pago disponibles en La Plataforma.</p>
            <p>Tu Timbrado S. de R.L. de C.V. emitirá la factura correspondiente por la compra de los servicios en el momento del pago o dentro del mes corriente de la transacción.</p>
            <p>Los precios están sujetos a cambios, pero dichos cambios no afectarán los folios que el Usuario ya haya adquirido previamente.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-purple-400 pl-4 uppercase">6. POLÍTICA DE DEVOLUCIONES Y CANCELACIONES</h2>
            <p>Debido a que los folios son productos digitales de entrega inmediata y, fundamentalmente, porque no tienen fecha de vencimiento, Tu Timbrado informa que:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>No se admiten devoluciones ni reembolsos una vez que los folios han sido abonados a la cuenta del Usuario.</li>
              <li>El Usuario acepta que la compra de folios constituye una adquisición definitiva de saldo para timbrado futuro sin límite de tiempo.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-orange-400 pl-4 uppercase">7. DISPONIBILIDAD Y SOPORTE</h2>
            <p>Tu Timbrado se compromete a realizar sus mejores esfuerzos para mantener La Plataforma operativa el 99.9% del tiempo. El Usuario reconoce que el servicio depende de terceros (como el SAT y Proveedores Autorizados de Certificación - PAC), por lo que Tu Timbrado no será responsable por interrupciones ajenas a su infraestructura técnica.</p>
            <p>Para cualquier incidencia, el Usuario puede contactar a: <strong>hola@tutimbrado.mx</strong>.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-blue-400 pl-4 uppercase">8. PROPIEDAD INTELECTUAL</h2>
            <p>Todo el contenido de https://tutimbrado.mx, incluyendo código, interfaces, logotipos y bases de datos, son propiedad de Tu Timbrado S. de R.L. de C.V. Queda estrictamente prohibida su reproducción, ingeniería inversa o uso comercial no autorizado.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-teal-400 pl-4 uppercase">9. PROTECCIÓN DE DATOS</h2>
            <p>El tratamiento de los datos personales del Usuario se rige por nuestro Aviso de Privacidad, el cual se encuentra disponible en el portal y cumple con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-yellow-400 pl-4 uppercase">10. MODIFICACIONES</h2>
            <p>Tu Timbrado se reserva el derecho de modificar estos términos en cualquier momento. Cualquier cambio será notify mediante aviso en La Plataforma or por correo electrónico. El uso del sistema posterior a la modificación implica la aceptación de los nuevos términos.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-cyan-400 pl-4 uppercase">11. JURISDICCIÓN Y LEY APLICABLE</h2>
            <p>Para la interpretación and cumplimiento de este contrato, las partes se someten a la legislación aplicable en la Ciudad de México y a la jurisdicción de los tribunales competentes en dicha entidad, renunciando a cualquier otro fuero.</p>
          </section>

          <SketchCard className="bg-yellow-50/50" skew="rotate-0">
            <h3 className="text-xl font-bold mb-4">Aceptación:</h3>
            <p>
              Al utilizar los servicios de Tu Timbrado, usted reconoce haber leído, entendido y aceptado estos Términos y Condiciones en su totalidad.
            </p>
          </SketchCard>
        </div>
      </div>
    </div>
  );
};

const RefundsPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="group mb-12 flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:text-yellow-600 transition-colors">
          <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-yellow-400 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Volver al inicio
        </button>
        
        <div className="mb-16">
          <span className="bg-yellow-400 text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">Políticas</span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-4 text-black">POLÍTICAS DE DEVOLUCIÓN Y CANCELACIÓN</h1>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mt-4 italic">Última actualización: Febrero de 2026</p>
        </div>

        <div className="space-y-12 text-gray-800 leading-relaxed">
          <section className="space-y-4">
            <p>
              Tu Timbrado S. de R.L. de C.V. (en adelante "Tu Timbrado"), con domicilio en Av. P.º de la Reforma 45, Cuauhtémoc, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX, establece las siguientes políticas que rigen la adquisición de paquetes de folios (timbres) a través de nuestro portal https://tutimbrado.mx.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-yellow-400 pl-4 uppercase">1. NATURALEZA DEL PRODUCTO DIGITAL</h2>
            <p>
              El Usuario reconoce y acepta que los servicios prestados por Tu Timbrado consisten en la venta de activos digitales (folios de facturación electrónica CFDI). Debido a que se trata de un software de entrega inmediata y consumo virtual, la ejecución del servicio comienza en el momento exacto en que los folios son abonados a la cuenta del Usuario en la plataforma.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-cyan-400 pl-4 uppercase">2. CLÁUSULA DE NO CADUCIDAD (BENEFICIO AL CONSUMIDOR)</h2>
            <p>Una de las condiciones fundamentales y distintivas de Tu Timbrado es que los folios adquiridos <strong>NO TIENEN VIGENCIA</strong>.</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Preservación del valor:</strong> El valor de la compra no se extingue por el paso del tiempo.</li>
              <li><strong>Propiedad indefinida:</strong> El Usuario mantiene la propiedad y disponibilidad de sus folios de manera indefinida hasta que sean consumidos totalmente para el timbrado de documentos fiscales.</li>
              <li><strong>Improcedencia por tiempo:</strong> Debido a que el producto no caduca y mantiene su utilidad total para el cliente de por vida (mientras la cuenta exista), no se realizarán devoluciones de efectivo ni cancelaciones de compra bajo el argumento de "falta de uso" o "vencimiento".</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-pink-400 pl-4 uppercase">3. POLÍTICA DE NO REEMBOLSO</h2>
            <p>Salvo las excepciones señaladas en el punto 4 de este documento, Tu Timbrado no realizará reembolsos, devoluciones ni cancelaciones de cargos en los siguientes casos:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Si el Usuario decide dejar de facturar por motivos personales, cierre de empresa o suspensión de actividades ante el SAT.</li>
              <li>Si el Usuario cambia de proveedor de facturación antes de agotar sus folios disponibles.</li>
              <li>Por errores del Usuario al elegir un paquete de folios (por ejemplo, comprar un paquete de 1,000 folios cuando solo necesitaba 10).</li>
              <li>Por falta de configuración de los Certificados de Sello Digital (CSD) o firma electrónica por parte del Usuario.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-lime-400 pl-4 uppercase">4. CASOS EXCEPCIONALES DE REVISIÓN</h2>
            <p>Tu Timbrado S. de R.L. de C.V. podrá evaluar solicitudes de reembolso o ajustes únicamente bajo los siguientes supuestos estrictos:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>A. Duplicidad de Pago:</strong> Cuando por un error técnico de la pasarela de pagos se registre un cargo doble por el mismo pedido y el mismo número de folios. El Usuario deberá reportarlo a <strong>hola@tutimbrado.mx</strong> dentro de las primeras 48 horas naturales posteriores a la compra.</li>
              <li><strong>B. Imposibilidad Técnica de Acreditación:</strong> Si tras realizar el pago y contar con el comprobante bancario, el sistema no acredita los folios en la cuenta del Usuario en un plazo mayor a 72 horas hábiles y nuestro equipo técnico determine que existe una falla crítica interna que impide la entrega del servicio.</li>
              <li><strong>C. Error en el Paquete (Upgrade):</strong> Si el Usuario desea cambiar un paquete pequeño por uno más grande, podrá solicitar el ajuste pagando únicamente la diferencia, siempre que no haya consumido más del 5% de los folios del paquete inicial.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-purple-400 pl-4 uppercase">5. PROCEDIMIENTO PARA ACLARACIONES</h2>
            <p>Para cualquier solicitud relacionada con pagos o folios, el Usuario deberá seguir este procedimiento oficial:</p>
            <ul className="list-decimal pl-6 space-y-4">
              <li>Enviar un correo electrónico a <strong>hola@tutimbrado.mx</strong>.</li>
              <li>Incluir en el asunto: "Aclaración de Pago - [RFC del Usuario]".</li>
              <li>Adjuntar el comprobante de pago original (formato PDF o captura de pantalla legible) y una descripción clara de la situación.</li>
            </ul>
            <p className="font-bold">El equipo administrativo de Tu Timbrado dará una respuesta oficial en un plazo no mayor a 5 días hábiles.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-orange-400 pl-4 uppercase">6. CANCELACIÓN DE CUENTA POR MAL USO</h2>
            <p>
              En caso de que una cuenta sea suspendida por uso ilícito, fraude o violación a los Términos y Condiciones, el Usuario perderá el derecho a reclamar cualquier reembolso por los folios no utilizados que existan en dicha cuenta al momento de la suspensión.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold border-l-4 border-blue-400 pl-4 uppercase">7. JURISDICCIÓN</h2>
            <p>
              Para cualquier controversia derivada de la interpretación o cumplimiento de estas políticas, las partes se someten a las leyes aplicables en la Ciudad de México y a la jurisdicción de los tribunales competentes en dicha entidad, renunciando a cualquier otro fuero.
            </p>
          </section>

          <SketchCard className="bg-yellow-50/50" skew="rotate-0">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" /> Nota Final:</h3>
            <p>
              Al realizar cualquier pago en <strong>https://tutimbrado.mx</strong>, el Usuario confirms que ha leído, comprendido y aceptado íntegramente estas Políticas de Devolución.
            </p>
          </SketchCard>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (view: string) => void }) => (
  <footer className="pt-32 pb-12 bg-white border-t-2 border-black/5 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
        <div className="md:col-span-4 space-y-8">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 font-bold text-3xl tracking-tighter text-left">
            <Logo className="w-64 h-auto" />
          </button>
          <p className="text-gray-500 leading-relaxed max-w-sm">Vendiendo los mejores planes de folios desde 2020</p>
        </div>
        
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400">Legal</h4>
          <ul className="space-y-4 font-bold text-sm">
            <li><button onClick={() => onNavigate('privacy')} className="hover:text-yellow-600">Aviso de Privacidad</button></li>
            <li><button onClick={() => onNavigate('terms')} className="hover:text-yellow-600">Términos y Condiciones</button></li>
            <li><button onClick={() => onNavigate('refunds')} className="hover:text-yellow-600">Políticas de Devolución</button></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-6">
          <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400">Redes Sociales</h4>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center hover:bg-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center hover:bg-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center hover:bg-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center hover:bg-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center hover:bg-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"><Music className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t-2 border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          © 2026 Tu Timbrado S. de R.L. de C.V. Todos los derechos reservados
        </div>
        <div className="flex items-center gap-2 bg-cyan-50 border border-cyan-400 px-3 py-1.5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] scale-90">
            <Lock className="w-3 h-3 text-cyan-600" />
            <span className="text-[9px] font-black uppercase tracking-wider text-cyan-900">Toda tu información está cifrada</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState('home');
  const [contactOption, setContactOption] = useState('');

  const handleNavigate = (newView: string, option: string = '') => {
    setContactOption(option);
    setView(newView);
  };

  const renderContent = () => {
    switch(view) {
      case 'privacy': return <PrivacyPage onBack={() => setView('home')} />;
      case 'terms': return <TermsPage onBack={() => setView('home')} />;
      case 'refunds': return <RefundsPage onBack={() => setView('home')} />;
      case 'faq': return <FAQPage onBack={() => setView('home')} />;
      case 'contact': return <ContactPage onBack={() => setView('home')} initialOption={contactOption} />;
      default: return (
        <>
          <Hero />
          <FeaturesCarousel />
          <section className="py-16 md:py-24 bg-gray-200 overflow-hidden px-8 md:px-16 rounded-[2.5rem] max-w-6xl mx-auto my-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                  <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">La diferencia</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight">Estar al día con el SAT no tiene porque ser abrumador.</h2>
                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-bold">Factura desde cualquier dispositivo conectado a internet</p>
                  <Button variant="primary">Quiero probarlo gratis</Button>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute -inset-4 border-2 border-black border-dashed rounded-3xl -z-10 rotate-2" />
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" 
                      className="rounded-3xl border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-1 grayscale hover:grayscale-0 transition-all duration-500 w-full" 
                      alt="Dashboard preview" 
                    />
                    
                    {/* Mockup de teléfono en la esquina */}
                    <div className="absolute -bottom-4 right-0 md:-bottom-4 md:right-2 w-32 md:w-40 aspect-[9/19.5] bg-black border-[3px] border-black rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-6 p-1.5 overflow-hidden flex flex-col animate-bounce-slow">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-xl z-20" /> {/* Notch */}
                        <div className="flex-grow bg-white rounded-[2rem] p-3 flex flex-col items-center justify-center text-center">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                <Check className="w-5 h-5 text-green-600 stroke-[3]" />
                            </div>
                            <h4 className="text-xs md:text-sm font-black leading-tight text-black mb-1">Factura realizada</h4>
                            <p className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-tighter">CFDI 4.0 Enviado</p>
                            <div className="mt-3 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-yellow-400 animate-pulse" />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PricingSection onNavigate={handleNavigate} />
          <MultiRFCSection onNavigate={setView} />
        </>
      );
    }
  };

  return (
    <div className="bg-white selection:bg-yellow-200 selection:text-black">
      <Navbar onNavigate={setView} />
      {renderContent()}
      <Footer onNavigate={setView} />
    </div>
  );
}

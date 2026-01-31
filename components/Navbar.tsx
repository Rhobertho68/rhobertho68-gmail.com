import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, Phone, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Pequeño delay para permitir que el menú cierre
    }
  };

  const menuItems = [
    { label: 'Propiedades', id: 'propiedades' },
    { label: 'Medios de Pago', id: 'medios-de-pago' }, // Nota: Sección placeholder en diseño actual
    { label: 'Ubicación', id: 'ubicación' }, // Nota: Sección placeholder
    { label: 'Opiniones', id: 'opiniones' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group z-50 relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-gold-500/50 transition-colors">
              <Building2 className="w-8 h-8 text-gold-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white leading-none">
                GRUPO SION
              </span>
              <span className="text-[10px] md:text-xs font-sans tracking-[0.25em] text-gold-500 uppercase leading-tight -mt-1">
                DESARROLLADOR
              </span>
            </div>
          </div>

          {/* Desktop Menu (Links tradicionales) */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.slice(0, 4).map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-sm uppercase tracking-widest text-slate-300 hover:text-white transition-colors hover:underline decoration-gold-500 underline-offset-4"
              >
                {item.label}
              </button>
            ))}
            <Button variant="primary" onClick={() => scrollToSection('contacto')}>
              <Phone className="w-4 h-4" /> Agendar Cita
            </Button>
          </div>

          {/* Mobile Toggle Button (Diseño Llamativo) */}
          <button 
            className="md:hidden group relative px-4 py-2 rounded-full border border-gold-500/50 hover:border-gold-500 overflow-hidden transition-all duration-300 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <div className="relative flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold-500 group-hover:text-slate-900 transition-colors">
                {isMenuOpen ? 'Cerrar' : 'Menú'}
              </span>
              {isMenuOpen ? (
                <X className="w-4 h-4 text-gold-500 group-hover:text-slate-900 transition-colors" />
              ) : (
                <Menu className="w-4 h-4 text-gold-500 group-hover:text-slate-900 transition-colors" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px]" />
           <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto h-full px-4 flex flex-col justify-center relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20 pb-10">
            
            {/* Left Side: Navigation Links */}
            <div className="flex flex-col space-y-6">
              {menuItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center gap-4 text-left transition-all duration-500 ease-out transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 group-hover:from-gold-400 group-hover:to-white transition-all duration-300">
                    {item.label}
                  </span>
                  <ArrowRight className="w-8 h-8 text-gold-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Right Side: Info & Social (Hidden on very small screens if needed, mostly decoration) */}
            <div className={`hidden md:flex flex-col justify-center items-start space-y-8 pl-12 border-l border-white/10 transition-all duration-700 delay-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <h3 className="text-gold-500 text-sm tracking-widest uppercase mb-4">Contacto Directo</h3>
                <p className="text-2xl text-white font-light">+52 (222) 123 4567</p>
                <p className="text-slate-400 mt-2">contacto@pueblaconstruct.com</p>
              </div>

              <div>
                <h3 className="text-gold-500 text-sm tracking-widest uppercase mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold-500 hover:text-slate-900 transition-all duration-300 text-white">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                 <Button variant="outline" onClick={() => scrollToSection('contacto')}>
                    Agendar una visita ahora
                 </Button>
              </div>
            </div>

          </div>

          {/* Footer of Menu (Mobile Only) */}
          <div className={`md:hidden mt-auto pb-8 flex flex-col items-center gap-6 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <Button variant="primary" className="w-full max-w-xs" onClick={() => scrollToSection('contacto')}>
               Agendar Cita
            </Button>
            <div className="flex gap-6 text-slate-400">
               <Instagram className="w-6 h-6 hover:text-gold-500 transition-colors" />
               <Facebook className="w-6 h-6 hover:text-gold-500 transition-colors" />
               <Linkedin className="w-6 h-6 hover:text-gold-500 transition-colors" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
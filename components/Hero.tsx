import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden supports-[height:100dvh]:h-[100dvh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Imagen 4K: Vista aérea (Render Style) de ciudad nocturna */}
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=90&w=3840&auto=format&fit=crop" 
          alt="Vista aérea de desarrollo inmobiliario de lujo" 
          className="w-full h-full object-cover animate-zoom-slow"
        />
        {/* Gradiente ajustado para resaltar el dorado de la imagen pero mantener legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative text-center pt-16 md:pt-20">
        <span className="inline-block py-1.5 px-4 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs md:text-sm font-semibold tracking-wider mb-6 animate-pulse-slow backdrop-blur-sm">
          LÍDERES EN CONSTRUCCIÓN EN PUEBLA
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 text-white leading-[1.1]">
          CONSTRUCCIÓN CON <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">VISIÓN</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-8 md:mb-10 max-w-2xl mx-auto font-light px-4 leading-relaxed">
          Tu patrimonio en zonas exclusivas, con alta plusvalía y excelente ubicación.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-6 sm:px-0">
          <Button className="w-full sm:w-auto" onClick={() => document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth'})}>
            Ver Propiedades <ChevronRight className="w-4 h-4" />
          </Button>
          <Button className="w-full sm:w-auto" variant="glass" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth'})}>
            Contáctanos
          </Button>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hidden md:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};
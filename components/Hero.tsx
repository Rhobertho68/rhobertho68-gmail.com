import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden supports-[height:100dvh]:h-[100dvh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* 
           NOTA PARA EL DESARROLLADOR: 
           Para usar tu imagen específica:
           1. Guarda tu imagen como 'render-portada.jpg' en la carpeta public/ de tu proyecto.
           2. El código abajo intentará cargarla, si no, usará la de Unsplash como respaldo.
        */}
        <img 
          src="/render-portada.jpg"
          onError={(e) => {
            // Fallback a una imagen similar de Unsplash si no encuentra la local
            e.currentTarget.src = "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=90&w=3840&auto=format&fit=crop";
          }}
          alt="Vista aérea de desarrollo inmobiliario de lujo" 
          className="w-full h-full object-cover animate-zoom-slow"
        />
        
        {/* Gradiente ajustado: Azul profundo en la base para el texto, transparente arriba para ver el cielo del render */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative text-center pt-16 md:pt-20">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs md:text-sm font-semibold tracking-wider mb-6 animate-pulse-slow backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          NUEVO LANZAMIENTO 2024
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 text-white leading-[1.1] drop-shadow-2xl">
          CONSTRUCCIÓN CON <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-white to-gold-400">VISIÓN</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-8 md:mb-10 max-w-2xl mx-auto font-light px-4 leading-relaxed drop-shadow-lg">
          Tu patrimonio en las zonas más exclusivas de Puebla, con una arquitectura que desafía lo convencional.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-6 sm:px-0">
          <Button className="w-full sm:w-auto shadow-blue-900/50" onClick={() => document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth'})}>
            Ver Disponibilidad <ChevronRight className="w-4 h-4" />
          </Button>
          <Button className="w-full sm:w-auto" variant="glass" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth'})}>
            Agendar Visita
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
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

// Generamos 20 testimonios diversos
const testimonials: Testimonial[] = [
  { id: 1, name: "Carlos Rodríguez", role: "Inversionista", content: "La plusvalía en Lomas ha superado mis expectativas. Excelente gestión.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Mariana Silva", role: "Propietaria", content: "Los acabados de lujo y la atención al detalle son incomparables.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Roberto Méndez", role: "Empresario", content: "La ubicación del local comercial es estratégica. Mi negocio ha crecido.", avatar: "https://randomuser.me/api/portraits/men/85.jpg" },
  { id: 4, name: "Elena Torres", role: "Arquitecta", content: "Como profesional, reconozco la calidad constructiva de Grupo Sion.", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 5, name: "Javier López", role: "Inversionista", content: "Transparencia total en el proceso de preventa. Muy confiables.", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 6, name: "Sofía Herrera", role: "Residente", content: "Vivir en Torre Helea es una experiencia de otro nivel. Vistas increíbles.", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 7, name: "Miguel Ángel R.", role: "Dueño de Lote", content: "El proceso de escrituración fue rápido y sin contratiempos.", avatar: "https://randomuser.me/api/portraits/men/54.jpg" },
  { id: 8, name: "Patricia Vega", role: "Inversionista", content: "He comprado 3 propiedades con ellos y el retorno es constante.", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { id: 9, name: "Fernando Ruiz", role: "Propietario", content: "La seguridad y amenidades del fraccionamiento son de primera.", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 10, name: "Lucía Castro", role: "Doctora", content: "Cercanía a hospitales y vías rápidas. La ubicación perfecta.", avatar: "https://randomuser.me/api/portraits/women/89.jpg" },
  { id: 11, name: "Alejandro B.", role: "Inversionista", content: "El mejor desarrollador en Puebla para diversificar portafolio.", avatar: "https://randomuser.me/api/portraits/men/76.jpg" },
  { id: 12, name: "Carmen Ortiz", role: "Residente", content: "Me encanta el diseño ecológico y las áreas verdes de Haras.", avatar: "https://randomuser.me/api/portraits/women/21.jpg" },
  { id: 13, name: "Daniel Vargas", role: "Ingeniero", content: "Estructuras sólidas y diseño vanguardista. Muy recomendado.", avatar: "https://randomuser.me/api/portraits/men/43.jpg" },
  { id: 14, name: "Isabel Mendoza", role: "Abogada", content: "Asesoría legal impecable durante toda la compraventa.", avatar: "https://randomuser.me/api/portraits/women/55.jpg" },
  { id: 15, name: "Ricardo P.", role: "Comerciante", content: "El flujo de gente en la plaza comercial es constante.", avatar: "https://randomuser.me/api/portraits/men/67.jpg" },
  { id: 16, name: "Gabriela N.", role: "Diseñadora", content: "La estética de los departamentos es moderna y limpia.", avatar: "https://randomuser.me/api/portraits/women/90.jpg" },
  { id: 17, name: "Héctor Salinas", role: "Jubilado", content: "Buscaba tranquilidad y lujo, y lo encontré en La Vista.", avatar: "https://randomuser.me/api/portraits/men/9.jpg" },
  { id: 18, name: "Verónica Lima", role: "Inversionista", content: "Atención personalizada 24/7. Se nota la experiencia.", avatar: "https://randomuser.me/api/portraits/women/18.jpg" },
  { id: 19, name: "Óscar Medina", role: "CEO Tech", content: "Smart homes de verdad. Tecnología integrada desde la construcción.", avatar: "https://randomuser.me/api/portraits/men/99.jpg" },
  { id: 20, name: "Laura Ibarra", role: "Propietaria", content: "Hicieron realidad el sueño de mi familia. Gracias Grupo Sion.", avatar: "https://randomuser.me/api/portraits/women/29.jpg" },
];

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <div className="w-[85vw] max-w-[350px] md:w-[400px] bg-slate-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl mx-3 hover:bg-slate-800/60 hover:border-gold-500/30 transition-all duration-300 group flex-shrink-0">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full border border-white/10 object-cover" />
        <div>
          <h4 className="text-white font-medium text-sm">{item.name}</h4>
          <p className="text-gold-500 text-xs uppercase tracking-wider">{item.role}</p>
        </div>
      </div>
      <Quote className="w-5 h-5 text-gold-500/20 group-hover:text-gold-500 transition-colors" />
    </div>
    
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="w-3 h-3 text-gold-500 fill-gold-500" />
      ))}
    </div>

    <p className="text-slate-400 text-sm leading-relaxed italic whitespace-normal">
      "{item.content}"
    </p>
  </div>
);

export const Testimonials: React.FC = () => {
  // Dividimos en dos filas para el efecto visual
  const firstRow = testimonials.slice(0, 10);
  const secondRow = testimonials.slice(10, 20);

  return (
    <section id="opiniones" className="py-12 md:py-16 bg-slate-950 relative overflow-hidden">
      {/* Luces ambientales */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
        <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
          Confianza Absoluta
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          La Voz de Nuestros Clientes
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Más de 500 familias e inversionistas han confiado su patrimonio a Grupo Sion. 
          Sus historias son nuestra mejor carta de presentación.
        </p>
      </div>

      <div className="relative w-full overflow-hidden space-y-6">
        {/* Máscaras de degradado para suavizar los bordes */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 z-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 z-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

        {/* Fila 1 - Izquierda */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] touch-pan-x">
          {/* Renderizamos duplicado para el loop infinito */}
          {[...firstRow, ...firstRow].map((item, idx) => (
            <TestimonialCard key={`${item.id}-1-${idx}`} item={item} />
          ))}
        </div>

        {/* Fila 2 - Derecha (Reverse) */}
        <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused] touch-pan-x">
          {[...secondRow, ...secondRow].map((item, idx) => (
            <TestimonialCard key={`${item.id}-2-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { MapPin, BedDouble, Square, Bath, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Property } from '../types';

const properties: Property[] = [
  {
    id: 1,
    title: "Torre Helea - Depto Lujo",
    category: "Apartamento",
    price: "$4,500,000 MXN",
    location: "Lomas de Angelópolis",
    // Edificio futurista de noche
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=90&w=2560&auto=format&fit=crop",
    features: ["180m²", "3 Hab", "2 Baños"]
  },
  {
    id: 2,
    title: "Plaza Sonata - Local 45",
    category: "Local Comercial",
    price: "$35,000 MXN / mes",
    location: "Sonata Town Center",
    // Ambiente comercial nocturno elegante
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=90&w=2560&auto=format&fit=crop",
    features: ["60m²", "Planta Baja", "Doble Altura"]
  },
  {
    id: 3,
    title: "Lote Residencial La Vista",
    category: "Lote",
    price: "$8,200,000 MXN",
    location: "La Vista Country Club",
    // Paisaje verde con iluminación dramática
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=90&w=2560&auto=format&fit=crop",
    features: ["450m²", "Vista al Golf", "Esquina"]
  },
    {
    id: 4,
    title: "Penthouse Zavaleta",
    category: "Apartamento",
    price: "$6,100,000 MXN",
    location: "Calzada Zavaleta",
    // Interior oscuro y lujoso
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=90&w=2560&auto=format&fit=crop",
    features: ["220m²", "Roof Garden", "3.5 Baños"]
  },
  {
    id: 5,
    title: "Bodega Industrial Norte",
    category: "Local Comercial",
    price: "$12,000,000 MXN",
    location: "Parque Industrial 2000",
    // Arquitectura industrial moderna
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=90&w=2560&auto=format&fit=crop",
    features: ["1200m²", "Andén Carga", "Oficinas"]
  },
  {
    id: 6,
    title: "Terreno Lomas III",
    category: "Lote",
    price: "$2,800,000 MXN",
    location: "Cascatta, Lomas",
    // Atardecer dorado sobre terreno
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=90&w=2560&auto=format&fit=crop",
    features: ["200m²", "Frente Área Verde", "Plano"]
  },
  {
    id: 7,
    title: "Residencial La Calera",
    category: "Lote",
    price: "$1,800,000 MXN",
    location: "La Calera",
    // Bosque con arquitectura integrada
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=90&w=2560&auto=format&fit=crop",
    features: ["300m²", "Bosque", "Seguridad 24/7"]
  },
  {
    id: 8,
    title: "Torre Platea - Oficina",
    category: "Local Comercial",
    price: "$28,000 MXN / mes",
    location: "Zona Angelópolis",
    // Edificio de cristal reflejando el cielo
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=90&w=2560&auto=format&fit=crop",
    features: ["80m²", "Piso 12", "Vistas Panorámicas"]
  },
  {
    id: 9,
    title: "Casa Club Haras",
    category: "Apartamento",
    price: "$3,200,000 MXN",
    location: "Haras Ciudad Ecológica",
    // Casa moderna de madera y concreto
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=2560&auto=format&fit=crop",
    features: ["150m²", "Eco-friendly", "Lago"]
  },
  {
    id: 10,
    title: "Plaza Explanada - Local",
    category: "Local Comercial",
    price: "$45,000 MXN / mes",
    location: "Periférico Ecológico",
    // Interior de plaza comercial moderna
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?q=90&w=2560&auto=format&fit=crop",
    features: ["90m²", "Alto Flujo", "Estacionamiento"]
  },
  {
    id: 11,
    title: "Penthouse Centro Histórico",
    category: "Apartamento",
    price: "$5,500,000 MXN",
    location: "Centro de Puebla",
    // Interior clásico renovado
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=90&w=2560&auto=format&fit=crop",
    features: ["200m²", "Terraza Privada", "Colonial Moderno"]
  }
];

export const PropertySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [direction, setDirection] = useState(0); 

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const currentProp = properties[currentIndex];

  return (
    <section id="propiedades" className="py-12 md:py-16 relative bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 md:mb-12 px-2">
          <div>
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-gold-500 uppercase mb-3 block">
              Oportunidades Únicas
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Catálogo Exclusivo
            </h2>
          </div>
          
          {/* Top Pagination (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-2xl font-serif text-white">
               {(currentIndex + 1).toString().padStart(2, '0')}
            </span>
            <div className="w-12 h-[1px] bg-white/20">
               <div className="h-full bg-gold-500 transition-all duration-300" style={{ width: `${((currentIndex + 1) / properties.length) * 100}%` }} />
            </div>
            <span className="text-sm font-serif text-white/40">
               {properties.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Cinematic Card Container 
            Mobile: h-[75vh] para dar más espacio vertical en celulares.
            Desktop: mantiene el aspecto panorámico.
        */}
        <div className="relative w-full h-[75vh] md:h-auto md:aspect-[2.4/1] rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10 touch-pan-y">
          
          {/* Main Image Layer */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out md:group-hover:scale-105">
             <img 
               key={currentProp.id} 
               src={currentProp.image} 
               alt={currentProp.title}
               className="w-full h-full object-cover animate-fade-in" 
             />
             {/* Gradient Overlay - Más fuerte abajo para legibilidad de texto */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90" />
          </div>

          {/* Floating Glass Info Panel */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:bottom-8 md:left-8 md:right-auto md:w-auto z-20">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl max-w-xl w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-300">
              
              {/* Category Tag & Navigation (Mobile Only) */}
              <div className="flex justify-between items-center mb-3 md:mb-4">
                 <span className="px-3 py-1 bg-gold-500 text-slate-900 text-[10px] md:text-xs font-bold tracking-wider uppercase rounded-full">
                   {currentProp.category}
                 </span>
                 
                 {/* Mobile Arrows inside Card for easy reach */}
                 <div className="flex gap-2 md:hidden">
                    <button onClick={prev} className="p-2 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-slate-900 transition-colors active:scale-95">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="p-2 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-slate-900 transition-colors active:scale-95">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                 </div>

                 <span className="hidden md:block text-white font-serif">
                    {currentProp.price}
                 </span>
              </div>

              {/* Title & Location */}
              <h3 className="text-2xl md:text-4xl font-serif text-white mb-1 md:mb-2 leading-tight">
                {currentProp.title}
              </h3>
              <div className="flex items-center text-slate-300 text-sm mb-4 md:mb-6">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1 text-gold-500" />
                {currentProp.location}
              </div>

              {/* Features Grid - Improved mobile wrapping */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                {currentProp.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:p-2 rounded-lg bg-white/5 border border-white/5">
                      {idx === 0 ? <Square className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/70"/> : idx === 1 ? <BedDouble className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/70"/> : <Bath className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/70"/>}
                      <span className="text-xs text-white font-medium whitespace-nowrap">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Footer: Price (Mobile & Desktop) & Action */}
              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-white/10">
                 <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">Precio</p>
                    <p className="text-xl md:text-2xl font-serif text-white">{currentProp.price}</p>
                 </div>
                 
                 <button className="flex items-center gap-2 text-gold-400 hover:text-white transition-colors group/btn bg-white/5 px-4 py-2 rounded-lg md:bg-transparent md:px-0 md:py-0">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Ver Detalles</span>
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                 </button>
              </div>

            </div>
          </div>

          {/* Navigation Controls (Desktop Floating Bottom Right) */}
          <div className="absolute bottom-8 right-8 z-20 hidden md:flex gap-3">
             <button 
               onClick={prev}
               className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-slate-900 hover:border-gold-500 transition-all duration-300 active:scale-95"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
               onClick={next}
               className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-slate-900 hover:border-gold-500 transition-all duration-300 active:scale-95"
             >
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};
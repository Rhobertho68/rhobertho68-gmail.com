import React, { useState } from 'react';
import { Button } from './Button';
import { User, Phone, ArrowRight, CheckCircle2, MapPin, Building } from 'lucide-react';

// Simulamos ubicaciones estratégicas sobre el mapa visual
const projectLocations = [
  { id: 1, name: "Torre Helea", type: "Residencial", top: "40%", left: "45%", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=90&w=400&auto=format&fit=crop" },
  { id: 2, name: "Plaza Sonata", type: "Comercial", top: "55%", left: "35%", image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=90&w=400&auto=format&fit=crop" },
  { id: 3, name: "La Vista CC", type: "Lotes", top: "30%", left: "60%", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=90&w=400&auto=format&fit=crop" },
  { id: 4, name: "Oficinas Centrales", type: "Corporativo", top: "48%", left: "52%", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=90&w=400&auto=format&fit=crop" },
];

export const MapSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activePin, setActivePin] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setForm({ name: '', phone: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handlePinInteraction = (id: number) => {
    if (activePin === id) {
        setActivePin(null);
    } else {
        setActivePin(id);
    }
  };

  return (
    <section id="contacto" className="py-12 md:py-20 bg-slate-950 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Lado Izquierdo: Formulario de Captación */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
              
              {/* Brillo decorativo en hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                      Atención Personalizada
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                      Déjanos contactarte
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      Tu tiempo es valioso. Ingresa tus datos y un asesor experto se comunicará contigo en breve.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-500 group-focus-within/input:text-gold-500 transition-colors" />
                      </div>
                      <input
                        type="text"
                        placeholder="Tu Nombre"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:bg-slate-900 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-500 group-focus-within/input:text-gold-500 transition-colors" />
                      </div>
                      <input
                        type="tel"
                        placeholder="Tu Teléfono"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:bg-slate-900 transition-all duration-300"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full mt-2 group/btn">
                      Solicitar Llamada 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </>
              ) : (
                <div className="h-[300px] flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6 text-gold-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-slate-400">
                    Gracias {form.name}. Uno de nuestros asesores te contactará al número proporcionado en los próximos minutos.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Lado Derecho: Mapa Interactivo Simulado */}
          <div className="order-1 lg:order-2 h-[400px] lg:h-auto min-h-[400px] relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 group">
            
            {/* Mapa Base (iframe) - Estilo Iluminado */}
            <div className="absolute inset-0 bg-slate-200">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4593815049987!2d-98.22533252479637!3d19.04347795299443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0dd6c32c45d%3A0x62e4c0700d117066!2sAv.%20Ju%C3%A1rez%2C%20Puebla%2C%20Pue.!5e0!3m2!1sen!2smx!4v1715876543210!5m2!1sen!2smx" 
                width="100%" 
                height="100%" 
                style={{ 
                    border: 0, 
                    filter: 'contrast(1.1) saturate(1.1)' 
                }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full pointer-events-none"
                ></iframe>
            </div>

            {/* Overlay sutil para unificar tono */}
            <div className="absolute inset-0 bg-gold-500/5 mix-blend-multiply pointer-events-none" />

            {/* Marcadores Simulados */}
            {projectLocations.map((loc) => (
                <div 
                    key={loc.id}
                    className="absolute z-20"
                    style={{ top: loc.top, left: loc.left }}
                    onMouseEnter={() => setActivePin(loc.id)}
                    onMouseLeave={() => setActivePin(null)}
                    onClick={() => handlePinInteraction(loc.id)} // Soporte para touch en móviles
                >
                    {/* Pin Animado */}
                    <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin p-4 -m-4"> {/* Área de toque aumentada */}
                        <div className="w-4 h-4 bg-gold-500 rounded-full shadow-[0_0_20px_rgba(197,160,40,0.8)] relative z-10 border-2 border-white transition-transform duration-300 group-hover/pin:scale-125" />
                        <div className="absolute inset-0 top-4 left-4 right-4 bottom-4 bg-gold-500 rounded-full animate-ping opacity-75" />
                        <div className="w-0.5 h-8 bg-gold-500/50 absolute top-[16px] left-1/2 -translate-x-1/2 rounded-full" />
                    </div>

                    {/* Tooltip Card - Ajustada para móviles (z-index alto) */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden transition-all duration-300 origin-bottom z-50 ${activePin === loc.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                        <div className="h-24 w-full relative">
                            <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                        </div>
                        <div className="p-3">
                            <p className="text-[10px] text-gold-500 font-bold uppercase tracking-wider mb-1">{loc.type}</p>
                            <h4 className="text-white font-serif text-sm leading-tight">{loc.name}</h4>
                        </div>
                        {/* Triangulito del tooltip */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45 border-r border-b border-white/20" />
                    </div>
                </div>
            ))}

            {/* Leyenda Flotante */}
            <div className="absolute top-4 right-4 lg:top-6 lg:right-6 z-30 bg-white/90 backdrop-blur-md px-3 py-2 lg:px-4 lg:py-3 rounded-xl shadow-lg border border-white/50 animate-fade-in-up">
                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                    <Building className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gold-500" />
                    <span className="text-slate-800 text-[10px] lg:text-xs font-bold uppercase tracking-wide">Cobertura</span>
                </div>
                <div className="text-[9px] lg:text-[10px] text-slate-600 space-y-0.5">
                    <p>• Residenciales</p>
                    <p>• Comerciales</p>
                    <p>• Corporativos</p>
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
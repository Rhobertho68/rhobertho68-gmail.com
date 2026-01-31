import React from 'react';
import { Building2, Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-12 md:pt-16 pb-10 border-t border-white/10 relative overflow-hidden font-sans">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Descripción */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                <Building2 className="w-6 h-6 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-white leading-none">
                  GRUPO SION
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] text-gold-500 uppercase leading-tight">
                  DESARROLLADOR
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Construimos más que edificios; creamos espacios que elevan tu calidad de vida. Líderes en desarrollo inmobiliario de lujo en Puebla.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-serif">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {['Propiedades', 'Nosotros', 'Servicios', 'Inversionistas', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors text-sm flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-serif">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>Av. Juárez 2925, Zona Esmeralda,<br />72410 Puebla, Pue.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>+52 (222) 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>contacto@pueblaconstruct.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter y Redes */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-serif">Mantente Informado</h4>
            <p className="text-slate-400 text-sm mb-4">Suscríbete para recibir noticias exclusivas y preventas.</p>
            
            <div className="relative mb-8">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-colors pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-gold-500 text-slate-900 rounded-md hover:bg-gold-400 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-slate-900 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Grupo Sion Desarrollador. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Términos y Condiciones</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
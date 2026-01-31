import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'dark' | 'white';
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, variant = 'dark' }) => {
  const bgStyles = variant === 'white' 
    ? 'bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/15'
    : 'bg-slate-900/80 backdrop-blur-xl border-white/10 text-slate-100';

  const borderStyles = variant === 'white'
    ? 'from-white/40 to-white/0'
    : 'from-white/20 to-white/0';

  return (
    <div 
      className={`group relative rounded-2xl ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Animated Border Background */}
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-gold-500 via-slate-500 to-gold-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-spin-slow blur-sm" />
      
      {/* Static Border (Always visible but subtle) */}
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-b ${borderStyles} opacity-50`} />

      {/* Card Content */}
      <div className={`relative h-full w-full rounded-2xl p-6 border shadow-2xl transition-transform duration-300 group-hover:scale-[0.99] ${bgStyles}`}>
        {children}
      </div>
    </div>
  );
};
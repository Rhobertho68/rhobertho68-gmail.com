import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold-500 hover:bg-gold-400 text-slate-900 shadow-[0_0_20px_rgba(197,160,40,0.3)] hover:shadow-[0_0_30px_rgba(197,160,40,0.5)]",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500/10",
    glass: "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
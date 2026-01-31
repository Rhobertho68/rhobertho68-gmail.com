import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '¡Hola! 👋 Bienvenido a Grupo Sion. Soy tu asistente virtual inteligente. ¿Estás buscando un departamento, un lote o un local comercial?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages.concat(userMsg), input);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gold-500 text-slate-900 shadow-[0_0_20px_rgba(197,160,40,0.4)] hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-4 right-4 z-50 w-full max-w-[350px] md:max-w-[400px] flex flex-col bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-500 transform origin-bottom-right overflow-hidden ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}
        style={{ height: 'min(600px, 80vh)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gold-600 to-gold-500 p-4 flex justify-between items-center text-slate-900">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <div>
              <h3 className="font-bold text-sm">Asistente Grupo Sion</h3>
              <p className="text-xs opacity-80">Impulsado por Gemini AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-gold-500/20 border border-gold-500/20 text-white rounded-br-none' 
                    : 'bg-white/10 border border-white/5 text-slate-200 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 rounded-2xl p-3 flex gap-1">
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-slate-950/50">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta..."
              className="w-full bg-slate-900 border border-white/20 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gold-500 text-slate-900 rounded-full hover:bg-gold-400 transition-colors disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
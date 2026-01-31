import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// Initialize Gemini Client
// In a production environment, ensure process.env.API_KEY is defined.
// If it is not defined, the chat functionality will degrade gracefully or show an error.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Eres "Asistente Sion", un agente virtual experto de la empresa "Grupo Sion Desarrollador".
Tu objetivo es ayudar a los clientes a encontrar su propiedad ideal en Puebla (Departamentos, Lotes o Locales) y agendar citas.

Información clave:
- Ubicación: Puebla, México.
- Ofrecemos: Departamentos de lujo, Lotes residenciales, Locales comerciales en plazas.
- Estilo: Moderno, seguro, alta plusvalía.
- Objetivo principal: Convencer al usuario de agendar una visita o pedir más informes.

Sé amable, profesional, conciso y utiliza emojis ocasionalmente. Responde siempre en Español.
Si te preguntan precios, da rangos generales (ej: Deptos desde 2.5M MXN) e invita a contactar a un asesor.
`;

export const sendMessageToGemini = async (history: Message[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Lo siento, el sistema de chat no está configurado correctamente (falta API Key).";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash-latest',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Lo siento, no pude procesar tu respuesta.";
  } catch (error) {
    console.error("Error connecting to Gemini:", error);
    return "Tuve un problema conectando con el servidor. Por favor intenta más tarde.";
  }
};
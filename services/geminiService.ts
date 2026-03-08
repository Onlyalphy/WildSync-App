import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid runtime errors on load if missing
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  message: string
): Promise<string> => {
  if (!ai) {
    console.error("API Key missing");
    return "I apologize, but I am currently offline. Please contact our office directly via WhatsApp.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm having trouble connecting to the wilderness right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble retrieving that information. Please try again later or contact our support.";
  }
};
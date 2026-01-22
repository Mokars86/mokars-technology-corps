
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `You are the AI Assistant for Mokars Technology Corps.
Mokars is a tech company focused on innovation in Africa, specializing in Agriculture, Health, and Energy sectors.
You help visitors with:
1. Information about projects (AgriSmart, HealthBridge, SolarGrid).
2. Recruitment questions for graduates (how to apply, skills needed like React, Flutter, Python).
3. Donation inquiries (how NGOs can help).
4. General company info (Mission: Innovating Today for a Smarter Tomorrow).
Be professional, helpful, and inspiring.`;

export const getGeminiResponse = async (history: ChatMessage[], currentMessage: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  // Format history for Gemini
  const contents = history.map(h => ({
    role: h.role,
    parts: [{ text: h.text }]
  }));
  
  // Add current message
  contents.push({ role: 'user', parts: [{ text: currentMessage }] });

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing some connectivity issues. Please contact our support team directly.";
  }
};

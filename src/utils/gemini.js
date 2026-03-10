import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

const fileToGenerativePart = async (file) => {
  const base64EncodedDataPromise = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

export const analyzeSafetyMVP = async (filesArray, userText) => {
  if (!API_KEY) {
    throw new Error("Missing API Key in Vercel Environment Variables.");
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

  const prompt = `
    ACT AS: BioReason Safety Agent.
    TASK: You are receiving an experimental protocol (PDF/Text) and an image of the physical lab setup.
    
    ADDITIONAL USER CONTEXT / PASTED PROTOCOL TEXT: 
    "${userText || 'No additional text provided.'}"

    1. Parse the protocol (whether from the uploaded PDF or the text above) to understand the intended procedure and reagents.
    2. Visually audit the lab setup image (if provided).
    3. Cross-reference the two: Are there missing reagents? Incompatible chemicals? Dangerous thermal setups?
    
    OUTPUT JSON format strictly:
    {
      "safetyScore": (Integer 0-100),
      "status": "SAFE" | "WARNING" | "CRITICAL",
      "title": "Short Title of Audit",
      "hazards": ["List of specific conflicts between protocol and visual reality"],
      "reasoning": "Brief explanation of your findings based on the text and images."
    }
  `;

  let promptParts = [prompt];
  
  // Attach all files (PDFs and Images)
  for (const file of filesArray) {
    if (file) {
      const part = await fileToGenerativePart(file);
      promptParts.push(part);
    }
  }

  const result = await model.generateContent(promptParts);
  const text = await result.response.text();
  
  const cleanJson = text.replace(/```json|```/g, '').trim();
  return JSON.parse(cleanJson);
};

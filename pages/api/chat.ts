"use server";
import { NextApiRequest, NextApiResponse } from "next";
import Groq from "groq-sdk";
import { Message } from "@/app/types";

const groq_api_key = process.env.GROQ_API_KEY as string;
const client = new Groq({ apiKey: groq_api_key });

export const systemPrompt: Message = {
  role: "system",
  content: `Você é um ajudante virtual cujo papel é receber a descrição de uma vaga de tecnologia e 
    fornecer detalhes sobre as tecnologias exigidas pela vaga, bem como elaborar um plano de estudos de acordo com 
    as exigências da vaga. Suas respostas devem ser as mais detalhadas e úteis possíveis.`,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
    return;
  }

  const { chat_history, user_input } = req.body;

  const updatedChatHistory = [
    ...chat_history,
    { role: systemPrompt.role, content: systemPrompt.content },
    { role: "user", content: user_input },
  ];

  try {
    const response = await client.chat.completions.create({
      model: "llama3-70b-8192",
      messages: updatedChatHistory,
      max_tokens: 7000,
      temperature: 0.5,
    });

    const assistantMessage = {
      role: "assistant",
      content: response.choices[0].message.content,
    };

    updatedChatHistory.push(assistantMessage);

    res
      .status(200)
      .json({ response: assistantMessage, chat_history: updatedChatHistory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error generating response from Groq API" });
  }
}

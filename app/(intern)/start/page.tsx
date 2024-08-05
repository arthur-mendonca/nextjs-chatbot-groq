"use client";
import Layout from "@/app/components/Layout/Layout";
import { useRouter } from "next/navigation";
import React from "react";

const Introduction = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/chatbot");
  };

  return (
    <Layout>
      <div className="min-h-[80vh] h-full flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Bem-vindo ao Study Roadmap Chatbot
        </h1>
        <p className="text-lg mb-4 text-center">
          Este chatbot é conectado ao Groq LLM e fornece informações sobre o
          melhor roteiro de estudo para aprender todas as tecnologias exigidas
          para um determinado trabalho em tecnologia.
        </p>
        <p className="text-lg mb-8 text-center">
          Seja você um iniciante ou um profissional experiente, nosso chatbot o
          guiará pelas habilidades e conhecimentos essenciais necessários para
          sua função desejada em tecnologia.
        </p>
        <button
          onClick={handleStart}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          Começar a conversa
        </button>
      </div>
      <div className="mb-48 sm:mb-0">
        <small>
          <p className="text-center">
            Aviso legal: este site foi criado para fins educacionais e não tem o
            intuito de fornecer aconselhamento profissional, legal ou de
            qualquer outro tipo.
          </p>
        </small>
      </div>
    </Layout>
  );
};

export default Introduction;

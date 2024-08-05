"use client";
import "./chatbotStyle.css";
import { useEffect, useState } from "react";
import { Message } from "../../types";
import JobForm from "../JobForm/JobForm";
import { JobElement } from "../JobForm/JobForm";
import { createOrUpdateJob } from "@/backend/Jobs/createOrUpdate";
import { createOrUpdateStudyRoute } from "@/backend/StudyRoute/createOrUpdate";
import ReactMarkdown from "react-markdown";

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [jobData, setJobData] = useState<{
    id?: number;
    title: string;
    description: string;
    technologies: string;
  } | null>(null);

  useEffect(() => {
    console.log(messages);
    console.log(jobData);
  }, [messages, jobData]);

  useEffect(() => {
    if (jobData) {
      const sendJobMessage = async () => {
        const userMessage: Message = { role: "user", content: userInput };
        const jobMessage: Message = {
          role: "user",
          content: `Eu tenho uma nova vaga de emprego, cujo título é ${jobData.title}. Esta é a descrição da vaga: ${jobData.description}, e estas são as tecnologias exigidas pela vaga: ${jobData.technologies}. Crie uma rotina de estudos para esta vaga.`,
        };

        const newMessages = [...messages, jobMessage, userMessage];
        setMessages(newMessages);

        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_history: newMessages,
              user_input: userInput,
            }),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log("Received response:", data);
          setMessages([...newMessages, data.response]);
          setUserInput("");

          await createOrUpdateStudyRoute({
            jobId: jobData.id,
            content: data.response.content,
          });
        } catch (error) {
          console.error("Error:", error);
        }
      };

      sendJobMessage();
    }
  }, [jobData]);

  const handleJobData = async (job: JobElement) => {
    //Criar instância de Job
    try {
      const savedJob = await createOrUpdateJob(job);
      setJobData({ ...job, id: savedJob.id });
    } catch (error) {
      console.error("Failed to save job:", error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="bg-zinc-800 h-[60vh]  p-4 rounded-md overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className={message.role}>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <JobForm onSubmit={handleJobData} />
      </div>
    </div>
  );
}

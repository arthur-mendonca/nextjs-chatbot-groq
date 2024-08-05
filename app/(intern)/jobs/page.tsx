"use client";
import Layout from "@/app/components/Layout/Layout";
import { Job } from "@/app/types";
import ReactMarkdown from "react-markdown";
import { getAllJobs } from "@/backend/Jobs/getAll";
import { getAllStudyRoutes } from "@/backend/StudyRoute/getAll";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Jobs = () => {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobsAndStudyRoutes = async () => {
      const [jobsData, studyRoutesData] = await Promise.all([
        getAllJobs(),
        getAllStudyRoutes(),
      ]);

      const jobsWithStudyRoutes = jobsData.map((job) => ({
        ...job,
        studyRoutes: studyRoutesData.filter((route) => route.jobId === job.id),
      }));

      setJobs(jobsWithStudyRoutes);
      setLoading(false);
    };
    fetchJobsAndStudyRoutes();
  }, []);

  const handleStart = () => {
    router.push("/chatbot");
  };

  if (loading) {
    return (
      <Layout>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Carregando...</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-8 gap-4 flex flex-col overflow-auto max-h-[93vh]">
        <div className="bg-zinc-800 p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-4">Jobs</h1>
          <p>
            Bem-vindo à página de vagas. Aqui você encontra as vagas e as rotas
            de estudo sugeridas.
          </p>
        </div>

        {jobs.length === 0 ? (
          <div className="flex flex-col p-8 gap-4 items-center">
            <h2 className="text-xl font-semibold">
              Ops, ainda não há vagas disponíveis.
            </h2>
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-blue-500 w-1/2 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Começar a conversa
            </button>
          </div>
        ) : (
          <div className="">
            <ul>
              {jobs.map((job, index) => (
                <li
                  key={index}
                  className="bg-zinc-800 flex flex-col rounded-md gap-4 border mb-4 px-8 ">
                  <div className="py-4 flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold">{job.title}</h2>
                    <p className="text-xl text-zinc-300">Descrição da vaga</p>
                    <p className="text-zinc-300">{job.description}</p>
                  </div>
                  {job.studyRoutes && job.studyRoutes.length > 0 && (
                    <div className="flex flex-col bg-zinc-900 rounded-md">
                      <h3 className="p-2 mx-4 my-4 text-lg font-medium bg-zinc-600 rounded-md text-center">
                        Rota de estudo sugerida:
                      </h3>
                      <ul className="p-4 mx-4 overflow-auto max-h-[40vh]">
                        {job.studyRoutes.map((route) => (
                          <li key={route.id}>
                            <ReactMarkdown className={`text-justify`}>
                              {route.content}
                            </ReactMarkdown>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Jobs;

"use client";
import { useEffect, useState } from "react";

export interface JobElement {
  id?: number;
  title: string;
  description: string;
  technologies: string;
}

interface JobFormProps {
  onSubmit: (job: JobElement) => void;
  initialJob?: JobElement;
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit, initialJob }) => {
  const [job, setJob] = useState<JobElement>(
    initialJob || { title: "", description: "", technologies: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(job);
    setJob({ title: "", description: "", technologies: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
      <input
        type="text"
        name="title"
        value={job.title}
        onChange={handleChange}
        placeholder="Título da vaga "
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="description"
        value={job.description}
        onChange={handleChange}
        placeholder="Descrição"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="technologies"
        value={job.technologies}
        onChange={handleChange}
        placeholder="Tecnologias"
        className="p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar vaga
      </button>
    </form>
  );
};

export default JobForm;

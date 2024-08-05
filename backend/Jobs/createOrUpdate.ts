import JobRepository from "./jobRepository";
import { Job } from "@/app/types";

export const salvarJob = async (job: Partial<Job>) => {
  const novoJob = { ...job, id: job.id ?? 0 } as Job;

  return JobRepository.createOrUpdate(novoJob);
};

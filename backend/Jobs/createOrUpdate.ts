"use server";

import JobRepository from "./jobRepository";
import { Job } from "@/app/types";

export const createOrUpdateJob = async (job: Partial<Job>) => {
  const newJob = { ...job } as Job;

  return JobRepository.createOrUpdate(newJob);
};

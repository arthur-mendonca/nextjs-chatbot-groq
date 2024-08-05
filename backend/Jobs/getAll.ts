"use server";

import JobRepository from "./jobRepository";

export const getAllJobs = async () => {
  return JobRepository.getAll();
};

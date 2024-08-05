"use server";

import JobRepository from "./jobRepository";

export const deleteJob = async (id: number) => {
  return JobRepository.delete(id);
};

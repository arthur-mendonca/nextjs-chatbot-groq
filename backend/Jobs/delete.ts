import JobRepository from "./jobRepository";

export const deletarJob = async (id: number) => {
  return JobRepository.delete(id);
};

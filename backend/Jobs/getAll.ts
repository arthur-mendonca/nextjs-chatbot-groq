import JobRepository from "./jobRepository";

export const obterTodosJob = async () => {
  return JobRepository.getAll();
};

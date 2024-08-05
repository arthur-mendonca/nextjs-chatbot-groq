import StudyRouteRepository from "./studyRouteRepository";

export const obterTodosStudyRoute = async () => {
  return StudyRouteRepository.getAll();
};

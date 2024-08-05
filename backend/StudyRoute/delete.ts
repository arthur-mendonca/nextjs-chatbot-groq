import StudyRouteRepository from "./studyRouteRepository";

export const deletarStudyRoute = async (id: number) => {
  return StudyRouteRepository.delete(id);
};

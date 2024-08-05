import { StudyRoute } from "@/app/types";
import StudyRouteRepository from "./studyRouteRepository";

export const createOrUpdate = async (studyRoute: Partial<StudyRoute>) => {
  const novoStudyRoute = {
    ...studyRoute,
    id: studyRoute.id ?? 0,
  } as StudyRoute;

  return StudyRouteRepository.createOrUpdate(novoStudyRoute);
};

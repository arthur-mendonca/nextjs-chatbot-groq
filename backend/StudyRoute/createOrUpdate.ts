"use server";
import { StudyRoute } from "@/app/types";
import StudyRouteRepository from "./studyRouteRepository";

export const createOrUpdateStudyRoute = async (
  studyRoute: Partial<StudyRoute>
) => {
  const novoStudyRoute = {
    ...studyRoute,
  } as StudyRoute;

  return StudyRouteRepository.createOrUpdate(novoStudyRoute);
};

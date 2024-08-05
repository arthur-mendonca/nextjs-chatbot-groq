"use server";

import StudyRouteRepository from "./studyRouteRepository";

export const getAllStudyRoutes = async () => {
  return StudyRouteRepository.getAll();
};

"use server";

import StudyRouteRepository from "./studyRouteRepository";

export const deleteStudyRoute = async (id: number) => {
  return StudyRouteRepository.delete(id);
};

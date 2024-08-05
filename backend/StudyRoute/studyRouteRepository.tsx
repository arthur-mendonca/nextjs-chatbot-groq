import { StudyRoute } from "@/app/types";
import prisma from "@/prisma/client";

export default class StudyRouteRepository {
  static async createOrUpdate(studyRoute: StudyRoute): Promise<StudyRoute> {
    if (studyRoute.id) {
      return await prisma.studyRoute.update({
        where: { id: studyRoute.id },
        data: studyRoute,
      });
    } else {
      return await prisma.studyRoute.create({
        data: studyRoute,
      });
    }
  }

  static async getById(id: number): Promise<StudyRoute | null> {
    return prisma.studyRoute.findUnique({ where: { id } });
  }

  static async getAll(): Promise<StudyRoute[]> {
    return await prisma.studyRoute.findMany();
  }

  static async delete(id: number): Promise<void> {
    await prisma.studyRoute.delete({ where: { id } });
  }
}

// return await prisma.studyRoute.upsert({
//   where: { id: studyRoute.id },
//   update: studyRoute,
//   create: studyRoute,
// });

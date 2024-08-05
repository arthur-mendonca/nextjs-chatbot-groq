import prisma from "@/prisma/client";
import { Job } from "@/app/types";

export default class JobRepository {
  static async createOrUpdate(job: Job): Promise<Job> {
    return await prisma.job.upsert({
      where: { id: job.id },
      update: {
        ...job,
        studyRoutes: {
          create: job.studyRoutes,
        },
      },
      create: {
        ...job,
        studyRoutes: {
          create: job.studyRoutes,
        },
      },
    });
  }

  static async getById(id: number): Promise<Job | null> {
    return prisma.job.findUnique({ where: { id } });
  }

  static async getAll(): Promise<Job[]> {
    return await prisma.job.findMany();
  }

  static async delete(id: number): Promise<void> {
    await prisma.job.delete({ where: { id } });
  }
}

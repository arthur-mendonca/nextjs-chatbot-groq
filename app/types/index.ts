export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  technologies: string;
  createdAt: Date;
  updatedAt: Date;
  studyRoutes?: StudyRoute[];
}

export interface StudyRoute {
  id: number;
  jobId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

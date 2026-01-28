import type { ProjectsInfo } from "../types/serviceTypes";
import api from "./api";

interface ProjectsResponse {
  portfolio: ProjectsInfo;
}

export const getProjectsService = async (): Promise<ProjectsInfo> => {
  try {
    const { data } = await api.get<ProjectsResponse>("/api/list");

    if (!data?.portfolio) {
      throw new Error("Resposta inválida da API portfolio");
    }

    return data.portfolio;
  } catch (error) {
    throw new Error("Falha ao buscar informações de portfólio");
  }
};

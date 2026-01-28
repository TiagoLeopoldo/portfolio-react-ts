import type { SkillsInfo } from "../types/serviceTypes";
import api from "./api";

interface SkillsResponse {
  skills: SkillsInfo;
}

export const getSkillsInfo = async (): Promise<SkillsInfo> => {
  try {
    const { data } = await api.get<SkillsResponse>("/api/list");

    if (!data?.skills) {
      throw new Error("Resposta inválida da API skills");
    }

    return data.skills;
  } catch (error) {
    throw new Error("Falha ao buscar informações de skills");
  }
};


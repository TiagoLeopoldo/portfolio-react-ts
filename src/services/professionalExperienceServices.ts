import type { ProfessionalExperienceInfo } from "../types/serviceTypes";
import api from "./api";

interface ProfessionalExperienceResponse {
  professionalExperiences: ProfessionalExperienceInfo;
}

export const getProfessionalExperienceInfo =
  async (): Promise<ProfessionalExperienceInfo> => {
    try {
      const { data } =
        await api.get<ProfessionalExperienceResponse>("/api/list");

      if (!data.professionalExperiences) {
        throw new Error("Resposta inválida da API professionalExperiences");
      }

      return data.professionalExperiences;
    } catch (error) {
      throw new Error("Falha ao buscar informações profissionais");
    }
  };

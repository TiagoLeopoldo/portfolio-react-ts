import type { LanguagesInfo } from "../types/serviceTypes";
import api from "./api";

interface LanguagesResponse {
  languages: LanguagesInfo;
}

export const getLanguagesInfo = async (): Promise<LanguagesInfo> => {
  try {
    const { data } = await api.get<LanguagesResponse>("/api/list");

    if (!data.languages) {
      throw new Error("Resposta inválida da API languages");
    }

    return data.languages;
  } catch (error) {
    throw new Error("Falha ao buscar informações de idiomas");
  }
};

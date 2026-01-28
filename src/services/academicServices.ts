import type { AcademicInfo } from "../types/serviceTypes";
import api from "./api";

interface AcademicResponse {
  academic: AcademicInfo
}

export const getAcademicService = async (): Promise<AcademicInfo> => {
  try {
  const { data } = await api.get<AcademicResponse>("/api/list");

  if (!data?.academic) {
    throw new Error("Resposta inválida da API academic")
  }

  return data.academic
  } catch (error) {
    throw new Error("Falha ao buscar informações acadêmicas")
  }
}
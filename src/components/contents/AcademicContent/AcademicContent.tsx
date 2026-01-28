import { useEffect, useState } from "react";
import type { AcademicInfo } from "../../../types/serviceTypes";
import { getAcademicService } from "../../../services/academicServices";

const AcademicContent = () => {
  const [academicInfo, setAcademicInfo] = useState<AcademicInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdacemic = async () => {
      try {
        const data = await getAcademicService();
        console.log("Dados acadêmicos carregados:", data);
        setAcademicInfo(data);
      } catch (error) {
        console.error("Erro ao carregar dados acadêmicos:", error);
        setError("Erro ao carregar dados acadêmicos!");
      } finally {
        setLoading(false);
      }
    }

    fetchAdacemic();
  }, []);

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      {academicInfo ?
      <ul>
        {academicInfo?.course?.map((course) => {
        return <li key={course.name}>
          <h3>{course.name}</h3>
          <p className="period">{course.period}</p>
        </li>
        })
        }
      </ul>
      :
      "Erro ao carregar!"
}
    </>
  )
}

export default AcademicContent
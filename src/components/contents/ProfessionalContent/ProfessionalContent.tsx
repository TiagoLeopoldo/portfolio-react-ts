import "./ProfessionalContent.css";
import { useEffect, useState } from "react"
import type { ProfessionalExperienceInfo } from "../../../types/serviceTypes"
import { getProfessionalExperienceInfo } from "../../../services/professionalExperienceServices";

const ProfessionaContent = () => {
  const [professionalInfo, setProfessionalInfo] = useState<ProfessionalExperienceInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getProfessionalExperienceInfo();
        console.log("Experiências profissionais carregadas:", data);
        setProfessionalInfo(data);
      } catch (error) {
        console.error("Erro ao carregar experiências profissionais:", error);
        setError("Erro ao carregar informações profissionais.");
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>{error}</p>

  return (
    <>
      {professionalInfo ?
        <ul className="experience">
          {professionalInfo?.experiences?.map((experience) => {
            return <li key={experience.id}>
              <h3 className="title">{experience.name}</h3>
              <p className="period">{experience.period}</p>
              <p>{experience.description}</p>
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

export default ProfessionaContent
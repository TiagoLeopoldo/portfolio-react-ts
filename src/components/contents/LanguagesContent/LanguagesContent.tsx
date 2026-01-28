import { useEffect, useState } from "react";
import "./LanguagesContent.css";
import type { LanguagesInfo } from "../../../types/serviceTypes";
import { getLanguagesInfo } from "../../../services/languagesServices";


const LanguagesContent = () => {
  const [languagesInfo, setLanguagesInfo] = useState<LanguagesInfo>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const data = await getLanguagesInfo();
        console.log("Idiomas carregados:", data);
        setLanguagesInfo(data);
      } catch (error) {
        console.error("Erro ao carregar Idiomas", error);
        setError("Erro ao carregar Idiomas");
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, [])

  if (loading) return <p>Carregando...</p>

  if (error) return <p>{error}</p>

  return (
    <>
      {languagesInfo ?
        <div className="content">
          <ul className="languages">
            {languagesInfo?.map((lang) => {
              return <li key={lang.id}><p>{lang.language}</p></li>
            })}
          </ul>
        </div>
        : "Erro ao carregar!"
      }
    </>

  )
}

export default LanguagesContent;
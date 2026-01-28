import "./ProjectsContent.css";
import { useEffect, useState } from "react";
import type { ProjectsInfo } from "../../../types/serviceTypes";
import { getProjectsService } from "../../../services/projectsServices";

const ProjectsContent = () => {
  const [projectsInfo, setProjectsInfo] = useState<ProjectsInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectsService();
        console.log("Projetos carregados", data);
        setProjectsInfo(data);
      } catch (error) {
        console.error("Erro ao carregar dados dos projetos:", error);
        setError("Erro ao carregas as informações de projetos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, []);

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>Erro ao carregar</p>;

  return (
    <>
      {projectsInfo ?
        <ul className="portfolio">
          {projectsInfo?.projects?.map((project) => {
            return <li key={project.id}>
              <h3 className={project.github ? "github" : ""}>{project.name}</h3>
              <p><span>Descrição:</span> {project.description}</p>
              <a href={project.repositorie} target="_blank">Repositório GitHub</a>
              <a href={project.deploy} target="_blank">Deploy</a>
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

export default ProjectsContent;
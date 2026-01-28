import "./Main.css"
import Accordion from "../base/Accordion/Accordion"
import SkillsContent from "../contents/SkillsContent/SkillsContent"
import LanguagesContent from "../contents/LanguagesContent/LanguagesContent"
import ProfessionaContent from "../contents/ProfessionalContent/ProfessionalContent"
import ProjectsContent from "../contents/ProjectsContent/ProjectsContent"
import AcademicContent from "../contents/AcademicContent/AcademicContent"

const Main = () => (
  <main className="main">
    <Accordion title="Experiências Profissionais" defaultOpen>
      <ProfessionaContent />
    </Accordion>

    <Accordion title="Projetos" defaultOpen>
      <ProjectsContent />
    </Accordion>
    
    <Accordion title="Skills" defaultOpen>
      <SkillsContent />
    </Accordion>

    <Accordion title="Formação Acadêmica" defaultOpen>
      <AcademicContent />
    </Accordion>

    <Accordion title="Idiomas" defaultOpen>
      <LanguagesContent />
    </Accordion>
  </main>
)

export default Main;

import { HomeContainer, ProjectsSection, ProjectCard, TaskCard } from "./Home.style";
import Header from "../../Components/Header/Header";

function Home() {
  return (
    <HomeContainer>
      <Header />
      <ProjectsSection>
        <h2>Projetos que você participa</h2>
        <ProjectCard>
          <div className="project-header">
            <h3>Nome do Projeto</h3>
            <span className="status">Em andamento</span>
          </div>
          <div className="project-body">
            <div className="team">
              <p>Time</p>
              {/* Exemplo de Avatares dos membros */}
              <div className="avatars">
                <div className="avatar" />
                <div className="avatar" />
                <div className="avatar" />
                {/* Outros avatares */}
              </div>
            </div>
            <div className="progress">
              <h4>Sprint 10</h4>
              <div className="progress-bar">
                <div className="progress-filled" style={{ width: "70%" }} />
              </div>
              <div className="dates">
                <p>Início 01/02</p>
                <p>Fim 01/02</p>
              </div>
            </div>
          </div>
          <TaskCard>
            <div className="task-header">
              <h4>Nome da Tarefa</h4>
              <span className="status overdue">Data limite próxima</span>
            </div>
            <p>Descrição da tarefa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            <button>Visualizar</button>
          </TaskCard>
          <TaskCard>
            <div className="task-header">
              <h4>Nome da Tarefa</h4>
              <span className="status delivered">Tarefa entregue</span>
            </div>
            <p>Descrição da tarefa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
            <button>Visualizar</button>
          </TaskCard>
        </ProjectCard>
      </ProjectsSection>
    </HomeContainer>
  );
}

export default Home;

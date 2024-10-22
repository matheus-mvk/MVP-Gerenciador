import { HomeContainer, MainContainer } from "./Home.style";
import Header from "../../Components/Header/Header";
import Projeto from "../../Components/Projeto/Projeto"; // Importe o componente de Projeto

const projetosData = [
  { id: 1, nome: "Projeto OpenQ", descricao: "Projeto fiscal OpenQ" },
  { id: 2, nome: "NASIQ Empreendimentos", descricao: "NASIQ" },
  { id: 3, nome: "Projeto Itaperu", descricao: "Projeto em realização para a prefeitura" },
  { id: 4, nome: "Projeto USS Discovery", descricao: "NCC-1031"}
];

function Home() {
  return (
    <HomeContainer>
      <Header />
      <MainContainer>
        {projetosData.map((projeto) => (
          <Projeto key={projeto.id} projeto={projeto} /> // Renderiza um container para cada projeto
        ))}
      </MainContainer>
      
    </HomeContainer>
  );
}

export default Home;

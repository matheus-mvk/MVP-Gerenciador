import { HomeContainer, MainContainer } from "./Home.style";
import Header from "../../Components/Header/Header";
import Projeto from "../../Components/Projeto/Projeto"; // Importe o componente de Projeto

const projetosData = [
  { id: 1, nome: "Projeto A", descricao: "Descrição do Projeto A" },
  { id: 2, nome: "Projeto B", descricao: "Descrição do Projeto B" },
  { id: 3, nome: "Projeto C", descricao: "Descrição do Projeto C" },
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

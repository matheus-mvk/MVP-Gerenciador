import { useState } from "react";
import Tabs from "../../Components/Tabs/Tabs";
import SprintList from "../../Components/SprintList/SprintList";
import { ProjetoContainer } from "./Projeto.style";

type ProjetoProps = {
  projeto: {
    id: number;
    nome: string;
    descricao: string;
  };
};

function Projeto({ projeto }: ProjetoProps) {
  const [activeTab, setActiveTab] = useState("Resumo");

  return (
    <ProjetoContainer>
        
      <h2>{projeto.nome}</h2>
      <p>{projeto.descricao}</p>
      <Tabs activeTab={activeTab} onChangeTab={setActiveTab} />
      {activeTab === "Resumo" && <SprintList />}
      {activeTab === "Time" && <p>Time Section (Placeholder)</p>}
      {activeTab === "Testes" && <p>Testes Section (Placeholder)</p> }
      
    </ProjetoContainer>
  );
}

export default Projeto;

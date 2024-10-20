import { useState } from "react";
import { HomeContainer } from "./Home.style";
import Header from "../../Components/Header/Header";
import Tabs from "../../Components/Tabs/Tabs";
import SprintList from "../../Components/SprintList/SprintList";

function Home() {
  const [activeTab, setActiveTab] = useState("Resumo");

  return (
    <HomeContainer>
      <Header />
      <Tabs activeTab={activeTab} onChangeTab={setActiveTab} />
      {activeTab === "Resumo" && <SprintList />}
      {activeTab === "Time" && <p>Time Section (Placeholder)</p>}
      {activeTab === "Testes" && <p>Testes Section (Placeholder)</p>}
    </HomeContainer>
  );
}

export default Home;

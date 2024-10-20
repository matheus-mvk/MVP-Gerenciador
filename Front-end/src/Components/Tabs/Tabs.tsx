import React from "react";
import { TabsContainer, TabButton } from "./Tabs.style";

type TabsProps = {
  activeTab: string;
  onChangeTab: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ activeTab, onChangeTab }) => {
  return (
    <TabsContainer>
      <TabButton active={activeTab === "Resumo"} onClick={() => onChangeTab("Resumo")}>
        Resumo
      </TabButton>
      <TabButton active={activeTab === "Time"} onClick={() => onChangeTab("Time")}>
        Time
      </TabButton>
      <TabButton active={activeTab === "Testes"} onClick={() => onChangeTab("Testes")}>
        Testes
      </TabButton>
    </TabsContainer>
  );
};

export default Tabs;

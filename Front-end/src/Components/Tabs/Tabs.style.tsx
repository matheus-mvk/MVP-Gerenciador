import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #14213d;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const TabButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#007bff")};
  }
`;

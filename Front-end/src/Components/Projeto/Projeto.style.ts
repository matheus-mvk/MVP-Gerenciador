import styled from "styled-components";

export const ProjetoContainer = styled.section`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: flex-start; 

  padding: 20px; 
  margin: 20px; 
  background-color: #e5e5e5; 
  border-radius: 8px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  min-height: 400px; 
  width: 40%;

  @media (max-width: 768px) {
    padding: 15px; 
    margin: 10px; 
  }

  h2 {
    font-size: 1.5em; 
    margin-bottom: 10px; 
  }

  p {
    margin-bottom: 20px; 
  }
`;

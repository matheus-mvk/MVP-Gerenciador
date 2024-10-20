import styled from "styled-components";

export const HeaderContainer = styled.header`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #14213d;
  color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.8em;
    color: #e5e5e5;
  }
`;

export const HeaderRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  h2 {
    font-size: 1.2em;
    color: white;
  }
`;

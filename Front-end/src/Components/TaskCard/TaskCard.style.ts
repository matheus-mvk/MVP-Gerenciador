import styled from "styled-components";

export const TaskCardContainer = styled.div`
  


  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 1.2rem;
    }

    .status {
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.8rem;

      &.Em andamento {
        background-color: #ff8c00;
        color: white;
      }

      &.Finalizada {
        background-color: #32cd32;
        color: white;
      }
    }
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
  }

  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

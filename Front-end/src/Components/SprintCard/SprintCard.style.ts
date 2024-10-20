import styled from "styled-components";

export const SprintCardContainer = styled.div`
  width:100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .dates {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #666;
  }
`;

export const ProgressBar = styled.div`

  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;

  .filled {
    height: 100%;
    background-color: #007bff;
    border-radius: 5px;
  }
`;
